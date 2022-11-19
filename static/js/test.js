'use strict';
class CustomMapYandex {
    /**
     * Создание экземпляра карты
     * @param canvasId ID Html элемента, куда будет загружена карта
     * @param lat Широта центра карты
     * @param lng Долгота центра карты
     * @param zoom Приближение(обычно от 1(охват земли) до 16(охват дома))
     */
    constructor(canvasId, lat = 40, lng = 40, zoom = 11, callBack = () => {}) {
        /**
         *Временная коллекция сырых данных для последующей инициализации маркеров карты
         */
        this.rawMarkers = [];
        this.mapPromise = ymaps.ready(() => this.initMap(canvasId, lat, lng, zoom, callBack));
    }
    initMap(canvasId, lat = 40, lng = 40, zoom = 11, callBack) {
        this.markers = new ymaps.GeoObjectCollection();
        this.currentMap = new ymaps.Map(canvasId, {
            center: [lng, lng],
            zoom: zoom,
            //устанавливаем нужный набор контролов на карте
            controls: ['smallMapDefaultSet'],
        });
        //Создание обёртки, чтобы частые вызовы добавить маркер не просаживали производительность.
        this.debouncedUseMarkers = this.debounce(this.useMarkers, 70);
        this.debounceOpenMarkerBySchoolId = this.debounce(this.openMarkerBySchoolIdPrivate, 70);
        callBack();
    }
    /**
     * Добавить маркер на карту.
     * @param htmlContent Содержимое всплывающего окна маркера, поддерживает HTML.
     * @param lat Широта отметки
     * @param lng Долгота отметки
     * @param maxWidth Не используется в яндексКарте
     * @param callback Обработчик нажатия на маркер
     * @param data Дополнительные данные, которые нужно сохранить в маркер
     */
    addMarkerToMap(htmlContent, lat, lng, callback = null, data = {}) {
        let promise = Promise.all([this.mapPromise]).then(() => {
            //Записываем много данных
            this.rawMarkers.push({
                lat,
                lng,
                htmlContent,
                callback,
                data,
            });
            //Метод инициализации будет вызван после последего обращения к нему с задержкой debounce(100мс)
            //Т.е здесь мы вызываем его каждый раз 100+ раз. Но отработает метод 1 раз на 100мс.
            this.debouncedUseMarkers();
        });
    }
    /**
     * Загрузить маркеры на карту на основе сырых данных rawMarkers.
     */
    useMarkers() {
        if (this.currentMap == null) {
            return;
        }
        for (var i = 0; i < this.rawMarkers.length; i++) {
            var myPlacemark = new ymaps.Placemark([this.rawMarkers[i].lat, this.rawMarkers[i].lng], {
                balloonContentBody: this.rawMarkers[i].htmlContent,
                data: this.rawMarkers[i].data,
                balloonAutoPan: true,
            });
            if (this.rawMarkers[i].callback) {
                let cb = this.rawMarkers[i].callback;
                myPlacemark.events.add('click', (e) => {
                    cb();
                });
            }
            this.markers.add(myPlacemark);
        }
        //Связываем коллекцию маркеров с картой
        this.currentMap.geoObjects.add(this.markers);
        this.rawMarkers = [];
        this.fitMarkers(15);
    }
    /**
     * Очистить все маркеры. Закрыть все открытые балуны и хинты
     */
    clearMarkersAndWindows() {
        if (this.markers) {
            this.markers.removeAll();
            this.rawMarkers = [];
        }
    }
    /**
     * Найти и открыть окно маркера нужной школы.
     * @param schoolId АйДи школы, которое ранее нами было сохранено в маркере(правда же?!)
     */
    openMarkerBySchoolId(schoolId) {
        //Костыль, когда в Public.ts этот метод вызывается много раз из-за наслоения коллбеков.
        //Мы используем debounce для вызова только 1 раз в 100мс
        let promise = Promise.all([this.mapPromise]).then(() => {
            this.debounceOpenMarkerBySchoolId(schoolId);
        });
    }
    openMarkerBySchoolIdPrivate(schoolId) {
        if (!this.markers) {
            return;
        }
        // ReSharper disable once CoercedEqualsUsing
        let marker = this.markers
            .toArray()
            .filter((marker) => marker.properties.get('data', {}).schoolId == schoolId)
            .pop();
        if (marker == null) {
            return;
        }
        //Преобразуем наш обычный GeoObject к объекту с координатами
        let point = marker.geometry;
        //Центрируем карту по нашему маркеру
        this.currentMap.panTo(point.getCoordinates());
        //Открываем окно балун
        marker.balloon.open();
    }
    /**
     * Подогнать размеры карты под содержимое и разброс маркеров
     * @param minZoom Настроки приближения
     */
    fitMarkers(minZoom) {
        if (this.currentMap == undefined || this.markers.getBounds() == null) {
            return;
        }
        this.currentMap.setBounds(this.markers.getBounds()).then(() => {
            var zoom = this.currentMap.getZoom();
            if (minZoom) {
                if (zoom > minZoom) this.currentMap.setZoom(minZoom);
            } else {
                if (zoom > 11) this.currentMap.setZoom(11);
            }
        });
    }
    /**
     * Установить центр карты
     */
    setCenter(lat, lng) {
        this.currentMap.setCenter([lat, lng], 11);
    }
    /**
     * Установить приближение
     */
    setZoom(zoom) {
        this.currentMap.setZoom(zoom);
    }
    /**
     * Добавить обработчик.
     * @param eventName Имя события
     * @param handler Обработчик
     */
    addListener(eventName, handler) {
        this.currentMap.events.add(eventName, handler);
    }
    get Markers() {
        return this.markers;
    }
    get Zoom() {
        return this.currentMap.getZoom();
    }
    get Center() {
        return this.currentMap.getCenter();
    }
    /**
     * Получить границы карты, которая видима
     */
    getBounds() {
        return this.currentMap.getBounds();
    }
    triggerEvent(eventName) {
        if (eventName == 'resize') {
            this.currentMap.container.fitToViewport();
            this.fitMarkers(15);
        }
    }
    debounce(f, ms) {
        let timer = null;
        return (...args) => {
            const onComplete = () => {
                f.apply(this, args);
                timer = null;
            };
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(onComplete, ms);
        };
    }
}
class ErpStatistics {
    static GetStatistics(totalSchoolsBlockId, totalChildrenBlockId, totalCitiesBlockId, schoolTypeId) {
        $.get('https://education-erp.com/api/LandingService/v1/TotalStatistics?schoolTypeId=' + schoolTypeId).done(
            function (result) {
                $('#' + totalSchoolsBlockId).text(result.TotalCountOfSchools);
                $('#' + totalSchoolsBlockId).attr('data-count', result.TotalCountOfSchools);
                $('#' + totalChildrenBlockId).text(result.TotalCountOfChildren);
                $('#' + totalChildrenBlockId).attr('data-count', result.TotalCountOfChildren);
                $('#' + totalCitiesBlockId).text(result.TotalCountOfCities);
                $('#' + totalCitiesBlockId).attr('data-count', result.TotalCountOfCities);
            }
        );
    }
    static GetStatisticsWithUnit(
        totalSchoolsBlockId,
        totalSchoolsUnitBlockId,
        totalChildrenBlockId,
        totalChildrenUnitBlockId,
        totalCitiesBlockId,
        totalCitiesUnitBlockId,
        schoolTypeId,
        culture = 'ru'
    ) {
        $.get(
            'https://education-erp.com/api/' +
                culture +
                '/LandingService/v1/TotalStatistics?schoolTypeId=' +
                schoolTypeId
        ).done(function (result) {
            $('#' + totalSchoolsBlockId).text(result.TotalCountOfSchools);
            $('#' + totalSchoolsBlockId).attr('data-count', result.TotalCountOfSchools);
            $('#' + totalSchoolsUnitBlockId).text(' ' + result.TotalSchoolsUnit);
            $('#' + totalChildrenBlockId).text(result.TotalCountOfChildren);
            $('#' + totalChildrenBlockId).attr('data-count', result.TotalCountOfChildren);
            $('#' + totalChildrenUnitBlockId).text(' ' + result.TotalChildrenUnit);
            $('#' + totalCitiesBlockId).text(result.TotalCountOfCities);
            $('#' + totalCitiesBlockId).attr('data-count', result.TotalCountOfCities);
            $('#' + totalCitiesUnitBlockId).text(' ' + result.TotalCitiesUnit);
        });
    }
    static SetMarksOnMap(schoolTypeId) {
        $.get(
            'https://education-erp.com/api/LandingService/v1/Schools?schoolsOnly=true&schoolTypeId=' + schoolTypeId
        ).done(function (result) {
            //console.log(result);
            var locations = new Array();
            locations = result;
            var myMap = new ymaps.Map(
                'map',
                {
                    center: [55.76, 37.64],
                    zoom: 3,
                },
                {}
            );
            locations.forEach((location) => {
                var placemark = new ymaps.Placemark([location.Lat, location.Lon], null);
                /* var geoObject = new ymaps.GeoObject({
                     // Описание геометрии.
                     geometry: {
                         type: "Point",

                         //coordinates: [location.Lat, location.Lon]
                     }
                 });*/
                myMap.geoObjects.add(placemark);
            });
        });
    }
}
function onVerifyCaptchaClientRequest(data) {
    $('.form').find('.recaptchaError').empty();
}
var Public;
(function (Public) {
    let maps = [];
    // let recaptchaSiteKey = "6Ld4_v4SAAAAACTtf_z82Nrms-mpxCS6Vw3dV2dh";
    let recaptchaSize = '';
    if (screen.width < 370) {
        recaptchaSize = 'compact';
    }
    function initFirstLessonForm() {
        $('.form').submit((event) => {
            var form = $(event.target);
            var error = form.find('.error');
            event.preventDefault();
            event.stopPropagation();
            var recpche = form.find('.g-recaptcha');
            if (recpche.length > 0) {
                //проверка есть ли на форме рекапча
                var response = grecaptcha.getResponse();
                if (response.length === 0) {
                    var elError = form.find('.recaptchaError');
                    elError.text('Подтвердите что вы не робот');
                    return;
                }
            }
            if (!form.find('[name=SchoolId]').val()) {
                error.show();
                error.text('Необходимо выбрать школу');
                return;
            }
            if (!form.find('[name=Phone]').val()) {
                error.show();
                error.text('Необходимо указать номер телефона');
                return;
            }
            if (
                form.find('[name=Phone]').val().replace(/\D+/g, '').length < 9 &&
                typeof CityDetectionService == 'undefined'
            ) {
                error.show();
                error.text('Необходимо указать полный номер мобильного телефона');
                return;
            }
            if (!form.find('[name=Name]').val()) {
                error.show();
                error.text('Необходимо указать ваше имя');
                return;
            }
            if (!form.find('[name=Agreement]').prop('checked')) {
                error.show();
                error.text('Заявки без согласия с условиями обработки персональных данных не принимаются');
                return;
            }
            if (typeof CityDetectionService !== 'undefined') {
                if (
                    CityDetectionService !== undefined &&
                    CityDetectionService.CheckPhoneLen !== undefined &&
                    CityDetectionService.CheckPhoneLen('city-callback', 'FirstLessonPhone') === false
                ) {
                    return;
                }
            }
            error.hide();
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form.serialize(),
                success() {
                    form.hide();
                    $('.success-message').show();
                },
                error() {
                    form.hide();
                    $('.error-message').show();
                },
            });
            var button = form.find('.button');
            button.val(button.data('wait'));
        });
    }
    Public.initFirstLessonForm = initFirstLessonForm;
    function initSchoolRequestForm() {
        $('#openSchoolForm').submit((event) => {
            var form = $(event.target);
            var error = form.find('.error');
            event.preventDefault();
            event.stopPropagation();
            if (!form.find('[name=Name]').val()) {
                error.show();
                error.text('Необходимо указать ваше имя');
                return;
            }
            if (!form.find('[name=Phone]').val()) {
                error.show();
                error.text('Необходимо указать номер телефона');
                return;
            }
            if (form.find('[name=Phone]').val().replace(/\D+/g, '').length < 9) {
                error.show();
                error.text('Необходимо указать полный номер мобильного телефона');
                return;
            }
            error.hide();
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form.serialize(),
                success() {
                    $('.success-message-schoolRequest').show();
                },
                error() {
                    $('.error-message-schoolRequest').show();
                },
            });
            var button = form.find('.button');
            button.val(button.data('wait'));
        });
    }
    Public.initSchoolRequestForm = initSchoolRequestForm;
    function rerenderMaps() {
        for (let map of maps) {
            map.triggerEvent('resize');
        }
    }
    Public.rerenderMaps = rerenderMaps;
    function getMapProvider(id, zoom, callback = () => {}) {
        //  if (this.CULTURE_NAME == "ru") {
        return new CustomMapYandex(id, null, null, zoom, callback);
        //}
        //return new CustomMapGoogle(id, null, null, zoom);
    }
    var loadSchoolsToSelect = (schools, schoolSelect) => {
        if (schools.length >= 2) {
            schoolSelect.append(`<option value='' selected>Выберите школу</option>`);
        }
        schools.forEach((school) => {
            if (school.isExemplary) {
                schoolSelect.append(
                    `<option data-externalid="${school.externalid}"  data-icon="fa fa-medal" value="${school.id}">${school.fullName}</option>`
                );
            } else {
                schoolSelect.append(
                    `<option  data-externalid="${school.externalid}"  value="${school.id}">${school.fullName}</option>`
                );
            }
        });
        if (schools.length < 2) {
            schoolSelect.parent().hide();
        } else {
            schoolSelect.parent().show();
        }
    };
    function initMaps() {
        var zoom = 11;
        $('.form [name=CityId]').each((i, elem) => {
            var id = `SchoolMap${i + 1}`;
            if ($(`#${id}`).length > 0) {
                maps[i] = getMapProvider(id, zoom, () => {
                    $(elem)
                        .change((event) => {
                            if (maps[i] != null) {
                                setCityOnMap($(event.target), maps[i]);
                            }
                            var cityId = $(elem).val();
                            var schoolSelect = $(elem).parents('form').find('[name=SchoolId]');
                            schoolSelect.empty();
                            var schools = window.schools[cityId];
                            if (schools) {
                                loadSchoolsToSelect(schools, schoolSelect);
                                schoolSelect
                                    .unbind('change.schoolSelectChangeFunc')
                                    .bind('change.schoolSelectChangeFunc', () => {
                                        if (typeof schoolSelect.data('num') == 'undefined') {
                                            return;
                                        }
                                        schoolSelect.parents('form').find('.school-error').hide();
                                        var num = schoolSelect.data('num') - 1;
                                        if (!maps[num]) {
                                            return;
                                        }
                                        maps[num].openMarkerBySchoolId(schoolSelect.val());
                                        // подтягиваем занятия для выбранной школы
                                        SchoolRequestForm.GetSchoolRequestLesson();
                                    })
                                    .change();
                            } else {
                                // если школ нет, то скрываем элемент встраиваемой формы для школ
                                if ($('#schoolRequestformDiv #schoolRequestSchoolDiv').length > 0) {
                                    $('#schoolRequestformDiv #schoolRequestSchoolDiv').hide();
                                }
                            }
                        })
                        .change();
                });
            }
        });
    }
    Public.initMaps = initMaps;
    function LoadSchools(cityId) {
        if (cityId) {
            var schoolsAddressesBlock = $('#schools_addresses');
            if (schoolsAddressesBlock.length > 0) {
                schoolsAddressesBlock.load('/home/GetCitySchools?cityId=' + cityId);
            }
        }
    }
    Public.LoadSchools = LoadSchools;
    var citiesShown = false;
    // по дефолту id страны = 1 (Россия)
    var currentCountryId = 1;
    function initCountryMap() {
        var map = getMapProvider('SchoolMap2', 10);
        $('#CountryId')
            .change(function () {
                var countryId = $(this).val();
                // записываем id выбранной страны в селекте для стран
                currentCountryId = $(this).val();
                map.fitMarkers(10);
                // вызываем setCities, если выбрали другую страну в селекте для стран
                setTimeout(function () {
                    setCities(map, currentCountryId);
                }, 1500);
            })
            .change();
        setTimeout(function () {
            setCities(map, currentCountryId);
        }, 1500);
        $('#CountryCityId').change((e) => {
            setTimeout(function () {
                var transliterationName = $('#CountryCityId :selected').val();
            }, 0);
        });
        $('#ApplyCityBtn').click((e) => {
            //$("#CountryCityId").change();
            var transliterationName = $('#CountryCityId :selected').val();
            location.href = `${window.location.protocol}//${window.location.host}/home/setcity?name=${transliterationName}&redirectUrl=${location.href}`;
        });
    }
    Public.initCountryMap = initCountryMap;
    function setCities(map, countryId) {
        var citySelect = $('#CountryCityId');
        var currentCityId = $('#CurrentCityId').val();
        //console.log(window.Cities);
        //console.log(currentCityId);
        //console.log(countryId);
        if (!window.Cities[countryId]) {
            var keys = Object.keys(window.Cities);
            countryId = Number(keys[0]);
        }
        map.clearMarkersAndWindows();
        citySelect.empty();
        window.Cities[countryId].forEach((city) => {
            if (city.Lat && city.Lng) {
                var content = `<div>${city.Name}<br><a href=${
                    window.location.protocol + '//' + window.location.host
                }/home/setcity?name=${city.TransliterationName}&redirectUrl=${location.href}>Выберите город</a></div>`;
                map.addMarkerToMap(content, city.Lat, city.Lng);
                var selected = city.Id == currentCityId ? 'selected' : '';
                citySelect.append(`<option value="${city.TransliterationName}" ${selected}>${city.Name}</option>`);
            }
        });
    }
    function setCityOnMap(citySelector, map) {
        map.clearMarkersAndWindows();
        var cityId = citySelector.val();
        var form = citySelector.parents('form');
        var schoolInput = form.find('[name=SchoolId]');
        var schools = window.schools[cityId];
        if (!schools) {
            return;
        }
        for (let i = 0; i < schools.length; i++) {
            let school = schools[i];
            if (!school.showOnMap) {
                continue;
            }
            let schoolId = school.id;
            map.addMarkerToMap(
                makeSchoolHtmlContent(school),
                school.lat,
                school.lng,
                () => {
                    if (schoolInput.val() == schoolId) {
                        return;
                    }
                    schoolInput.find(`option[value=${schoolId}]`).prop('selected', true);
                    schoolInput.change();
                },
                { schoolId }
            );
        }
    }
    function makeSchoolHtmlContent(school) {
        var windowContent;
        if (school.isExemplary) {
            windowContent = `<div style="width:250px;"><i class="fa fa-medal"></i>&nbsp;<strong>${school.name}</strong><br>${school.address}<br>${school.phone}</div>`;
        } else if (school.address && school.phone) {
            windowContent = `<div style="width:250px;"><strong>${school.name}</strong><br>${school.address}<br>${school.phone}</div>`;
        } else {
            windowContent = `<div style="width:250px;"><strong>${school.name}</strong></div>`;
        }
        return windowContent;
    }
    function setSchool(schoolId) {
        var forms = $('.first-lesson-block');
        var selects = forms.find('[name=SchoolId]');
        selects.find(`option[value=${schoolId}]`).prop('selected', true).change();
        maps.forEach((x) => x.openMarkerBySchoolId(schoolId));
        forms[0].scrollIntoView();
    }
    Public.setSchool = setSchool;
    function initMobileCityPicker(countryId) {
        $(`.cities-scroll[data-country-id=${countryId}]`).show();
        $('.country-picker').click((e) => {
            $('.cities-scroll').hide();
            $(`.cities-scroll[data-country-id=${$(e.delegateTarget).data('countryId')}]`).show();
        });
    }
    Public.initMobileCityPicker = initMobileCityPicker;
    function initReviewForm() {
        //var recaptchaId = window.grecaptcha.render("reviewCaptcha", { sitekey: recaptchaSiteKey, size: recaptchaSize });
        $('#review form').submit((event) => {
            var form = $(event.target);
            event.preventDefault();
            event.stopPropagation();
            if (!form.find('[name=Name]').val()) {
                $('#error').popup('show');
                return;
            }
            if (!form.find('[name=ReviewText]').val()) {
                $('#error').popup('show');
                return;
            }
            if (!form.find('[name=Agreement]').prop('checked')) {
                $('#error').popup('show');
                return;
            }
            //if (!window.grecaptcha.getResponse(recaptchaId)) {
            //    $('#error').popup('show');
            //    return;
            //}
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form.serialize(),
            });
            //$('#review').popup('hide');
            //$('#thanksForReview').popup('show');
        });
    }
    Public.initReviewForm = initReviewForm;
})(Public || (Public = {}));
var SchoolRequestForm;
(function (SchoolRequestForm) {
    /**
        Данный скрипт предназначен для встраиваемой формы заявок записи в школу.
        При подключении all.js файла считываются параметры переданные в query string
        и на основании параметров будет отображаться форма заявки.
    */
    // чтобы не делать отдельные запросы на сервер для получения PartialView,
    // html код для формы представлен ниже
    // стили для формы
    const styles = `<style>
        #schoolRequestformDiv input, select {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        #schoolRequestCountryDiv {
            display: none;
        }

        #schoolRequestformDiv input[type=submit] {
            width: 100%;
            background-color: #286090;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        #schoolRequestformDiv input[type=submit]:hover {
            background-color: #204d74;
        }

        #schoolRequestformDiv, #schoolRequestMapDiv {
            padding: 20px;
            width: 50%;
        }

        #schoolRequestMapDiv #SchoolMap1 {
            width: 100%;
            height: 400px;
        }

        #schoolRequestAgreementDiv {
            display: flex;
            align-items: center;
        }

        #schoolRequestContentDiv {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .success-message p {
            font-size: 20px;
            font-weight: 600;
        }

        .success-message {
            display: none;
        }


        @media only screen and (max-width: 1025px) {
            #schoolRequestContentDiv {
                flex-wrap: wrap;
            }

        }

        @media only screen and (max-width: 700px) {
            #schoolRequestformDiv, #schoolRequestMapDiv {
                width: 100%;
            }
        }

    </style>`;
    // селектор для стран
    const countrySelectForForm = `<select disabled placeholder="Выберите страну" required="required" data-msg="Выберите одно условие" name="CountryId" id="CountryIdForm">
                           </select>`;
    // сама форма
    const templateForSchoolRequestForm = `${styles}

   <div id="schoolRequestContentDiv" style="align-items: start;">
        <div id="schoolRequestformDiv">
            <div class="success-message">
               <p>Спасибо за заявку! Ожидайте звонка от менеджера школы.</p>
            </div>
            <form class="form" action="https://education-erp.com/api/LandingService/v1/SingleRequest">
                <div class="error" style="color: red;"></div>

                <!--Указываем тип запроса из формы-->
                <input class="customizedInput input-type" type="hidden" name="Type" value="2" id="type" />
                <input class="customizedInput input-schoolTypeForm" type="hidden" name="SchoolType" id="schoolTypeForm" />

                <div class="customizedInput input-name">
                    <input  name="Name" placeholder="Ваше имя" type="text" id="name"/>
                </div>
                <div  class="customizedInput input-child-name">
                    <input data-msg="Заполните это поле" name="ChildName" placeholder="Имя ребенка" type="text" id="child-name" />
                </div>
                <div class="customizedInput input-first-lesson-phone">
                         <input data-msg="Заполните это поле" name="Phone" placeholder="Ваш телефон" type="text" id="FirstLessonPhone" />
                </div>
                <div class="customizedInput input-email">
                    <input class="customizedInput input-email" data-msg="Заполните это поле" name="Email" id="email" placeholder="Ваш E-mail" type="email" />
                </div>

                <div class="customizedInput input-school-request-country"  id="schoolRequestCountryDiv"></div>

                <div id="schoolRequestCityDiv" class="customizedInput input-school-request-city">
                                      <select disabled class="citySelect" placeholder="Выберите город" data-msg="Выберите одно условие" name="CityId" id="CityIdForm">
                      </select>
                </div>

                <div id="schoolRequestSchoolDiv " style="display: none;" class="customizedInput input-school-request-school">
                        <select disabled data-msg="Выберите школу" data-num="1" id="school" name="SchoolId" placeholder="Выберите школу"></select>
                </div>

                <div class="customizedInput school-request-age"  id="schoolRequestAgeIdDiv"  style="display: none;">
                        <select style="display: none;" disabled placeholder="Выберите возрастную категорию" data-msg="Выберите одно условие" name="AgeId" id="AgeId"  class="school-request-age" >
                        </select>
                </div>

                <div id="schoolRequestLessonDiv" class="customizedInput school-request-lesson" style="display: none;">
                                                <select style="display: none;" disabled placeholder="Выберите урок"  data-msg="Выберите одно условие" name="LessonId" id="LessonId" class="school-request-lesson">
                        </select>
                </div>

                <div class ="customizedInput input-agreement" id="schoolRequestAgreementDiv" >
                    <div style="width: 30px;">
                        <input class="customizedCheckBox" checked="checked" data-msg="Необходимо принять условие соглашения" name="Agreement" id="agreement" type="checkbox" />
                    </div>
                    <div>
                        Я принимаю <a href="https://education-erp.com/agreement?type=Confidentiality">условия соглашения</a> об обработке персональных данных
                    </div>
                </div>
            <div class ="customizedInput input-submit">
                <input class="customizedSubmitButton" type="submit" value="Отправить" disabled id="submit-button">
            </div>
            </form>
        </div>
        <div id="schoolRequestMapDiv">
            <div id="SchoolMap1" style="height: 600px"></div>
        </div>
    </div>
    `;
    // код для нахождения параметров в подключенном скрипте
    var script_tag = document.getElementById('schoolRequestScript');
    if (script_tag != undefined && script_tag != null) {
        GetScriptParameters();
    }
    function GetScriptParameters() {
        var query = script_tag.src.replace(/^[^\?]+\??/, '');
        // Parse the query string into arguments and parameters
        var vars = query.split('&');
        var args = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            // decodeURI doesn't expand "+" to a space.
            args[pair[0]] = decodeURI(pair[1]).replace(/\+/g, ' ');
        }
        // параметр типа школы
        let schoolTypeId = args['schoolTypeId'];
        // параметр, чтобы определять нужно ли отображать карту рядом с формой
        // если передали showMap = true, значит  отображаем карту, если параметр вообще не передали
        // значит не отображаем
        let showMap = args['showMap'];
        // параметр id города. Данный параметр передается, если необходимо будет отображаться школы,
        // только лишь одного города, а не всех городов этого типа школы.
        let cityId = args['cityId'];
        // если передали schoolTypeId, значит скрипт all.js подключили с указанием параметра
        // типа школы и необходимо на его основании отображать форму заявки
        if (schoolTypeId != null && schoolTypeId != undefined && schoolTypeId != '0') {
            InitSchoolRequestForm(showMap, cityId, schoolTypeId);
        }
    }
    /**
    *
       Основная функция по получения данных и рендеру формы
    */
    function InitSchoolRequestForm(showMap, cityId, schoolTypeId) {
        let urlForGetInfoForForm = `https://education-erp.com/SchoolRequestForm/GetCitiesAndSchools?schoolTypeId=${schoolTypeId}`;
        // если при подключении скрипта передали еще и cityId, значит необходимо передать
        // данный параметр в запросе, чтобы пришел ответ только на основании данного города
        if (cityId != undefined && cityId != null && cityId != '0') {
            urlForGetInfoForForm += `&cityId=${cityId}`;
        }
        // если на стр есть элемент с таким id, то вставляем в него форму
        let elemForForm = $('#schoolRequestFormElement');
        if (elemForForm != null && elemForForm != undefined) {
            elemForForm.html(templateForSchoolRequestForm);
            // если параметр showMap true, то показываем карту рядом с формой
            if (showMap == 'true') {
                $('#schoolRequestMapDiv').show();
            } else {
                $('#schoolRequestMapDiv').hide();
            }
        }
        AjaxRequestForSchoolRequestForm(urlForGetInfoForForm, countrySelectForForm);
    }
    /**
    *
        ajax запрос для получения данных для формы
    */
    function AjaxRequestForSchoolRequestForm(urlForGetInfoForForm, countrySelectForForm) {
        $.ajax({
            method: 'GET',
            url: `${urlForGetInfoForForm}`,
            success: (data) => {
                // делаем запрос для получения данных и вставки
                GetAndPasteInfoToSchoolRequestForm(data, countrySelectForForm);
                // за счет данного метода вешаем на форму проверки валидации при сабмите
                Public.initFirstLessonForm();
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    /**
    *
        получить данные для формы и вставить их в неё
    */
    function GetAndPasteInfoToSchoolRequestForm(data, countrySelectForForm) {
        // если пришли города и школы, записываем их
        if (
            data.cities != null &&
            data.cities != undefined &&
            data.schools != null &&
            data.schools != undefined &&
            data.schoolType != null
        ) {
            window.Cities = data.cities;
            window.schools = data.schools;
            // записываем в скрытый инпут типа школы название типа школы, которое пришло
            // это необходимо при отправке данных из формы заявки
            $('#schoolTypeForm').val(data.schoolType);
            // если пришли еще и страны, то записываем их
            if (data.countries != null && data.countries != undefined) {
                window.Countries = data.countries;
                // если на стр уже есть селектор для стран, то в форме его не отображаем
                // (так сделано на наших собственных лендингах, для этого тут есть данная проверка)
                if ($('#CountryId').length == 0) {
                    $('#schoolRequestCountryDiv').show();
                }
                $('#schoolRequestCountryDiv').html(countrySelectForForm);
                // записываем старны в селектор для стран формы
                SetCountryCollectionToSelect();
            }
            //если школ нет, то скрываем селектор для школ в форме
            let countSchools = window.schools.length;
            if (countSchools == 0) {
                $('#schoolRequestformDiv #schoolRequestSchoolDiv').hide();
            } else {
                $('#schoolRequestformDiv #schoolRequestSchoolDiv').show();
            }
            // изначально все селекторы в форме disabled для удобства пользователя
            // как только все данные прогрузились, снимаем disabled
            $('#schoolRequestContentDiv select').prop('disabled', false);
            $('#schoolRequestContentDiv input[type=submit]').prop('disabled', false);
        }
        // проверка чтобы невозможно было печатать не цифры в инпуте для тел.
        $('#schoolRequestformDiv input[name=Phone]').keydown(function (event) {
            let backSpaceKey = 8;
            if (!((event.key >= '0' && event.key <= '9') || event.keyCode == backSpaceKey)) {
                event.preventDefault();
            }
        });
    }
    // вставляем данные в селектор стран в форме
    function SetCountryCollectionToSelect() {
        // селектор стран в форме
        var countrySelect = $('#CountryIdForm');
        // вставить страны в селектор для стран
        SetCountriesToSelect(countrySelect);
        // данный обработчик вешаем только для селектор стран формы,
        // чтобы не было конфликтов на наших лендингах, т.к. там уже есть обработчики
        countrySelect
            .change(function () {
                // берем id выбранной страны в селекторе для стран
                let currentCountryId = countrySelect.val();
                // вызываем функцию смены городов, если выбрали другую страну в селекторе для стран
                SetCityCollectionToSelect(currentCountryId);
            })
            .change();
    }
    function SetCountriesToSelect(select) {
        select.empty();
        let selected = '';
        // проходимся по странам пришедшим от сервера и записываем их в селектор
        window.Countries.forEach((country) => {
            // если есть значение в currentSelectedCountryId, значит на нашем лендинге выбрана страна (значение выбранной страны храниться на бек энд) и ее надо пометить выбранной в селекторе
            if (
                window.currentSelectedCountryId != undefined &&
                window.currentSelectedCountryId != null &&
                window.currentSelectedCountryId != ''
            ) {
                selected = country.Id == window.currentSelectedCountryId ? 'selected' : '';
            }
            select.append(`<option value="${country.Id}" ${selected}>${country.Name}</option>`);
        });
        let coutriesCount = Object.keys(window.Countries).length;
        // если страна всего одна, то селектор стран нет смысла показывать в форме
        if (coutriesCount < 2) {
            select.hide();
        } else {
            select.append(`<option id="noSchoolInMyCountry" value="0">Нет моей страны</option>`);
            select.show();
        }
    }
    // вставить города в селектор для городов формы
    function SetCityCollectionToSelect(countryId) {
        // селектор городов в форме
        var citySelect = $('#CityIdForm');
        citySelect.empty();
        // проходимся по городам пришедшим от сервера и вставляем их в селектор для городов
        window.Cities[countryId].forEach((city) => {
            if (city.Lat && city.Lng) {
                let selected = '';
                // если есть значение в currentSelectedCityId, значит на нашем лендинге выбран город (значение выбранного города храниться на бек энд) и его надо пометить выбранным в селекторе
                if (
                    window.currentSelectedCityId != undefined &&
                    window.currentSelectedCityId != null &&
                    window.currentSelectedCityId != ''
                ) {
                    selected = city.Id == window.currentSelectedCityId ? 'selected' : '';
                }
                citySelect.append(`<option value="${city.Id}" ${selected}>${city.Name}</option>`);
            }
        });
        let citiesCount = Object.keys(window.Cities[countryId]).length;
        // если город всего один, то нет смысла его отображать в селекторе города формы
        if (citiesCount < 2) {
            citySelect.hide();
        } else {
            citySelect.append(`<option id="noSchoolInMyCity" value="0">Нет моего города</option>`);
            citySelect.show();
        }
        // очищаем div для карты, чтобы туда вставилась карта с корректными метками школ, выбранного города
        $('#schoolRequestContentDiv #SchoolMap1').empty();
        // вызываем метод для рендера карты и меток на ней
        Public.initMaps();
        // кастомный event, на который можно подписаться, чтобы что-то сделать, когда форма
        // отрендерилась.
        window.dispatchEvent(window.customEventForSchoolRequestForm);
    }
    // функция получения занятий выбранной школы в форме
    function GetSchoolRequestLesson() {
        // id выбранной школы
        let selectedSchoolId = $('#school').find(':selected').attr('data-externalid');
        // селектор занятий в форме
        let lessonsSelect = $('#LessonId');
        let lessonElem = $('.school-request-lesson');
        // селектор возрастной категории в форме
        let ageSelect = $('#AgeId');
        let ageElem = $('.school-request-age');
        lessonsSelect.hide();
        ageSelect.hide();
        lessonElem.hide();
        ageElem.hide();
        if (selectedSchoolId == undefined || selectedSchoolId == null || selectedSchoolId == '') {
            return;
        }
        const url = `https://education-erp.com/api/LandingService/v1/Groups?schoolId=${selectedSchoolId}&schedule=schoolFormRequest`;
        $.ajax({
            method: 'GET',
            url: `${url}`,
            success: (data) => {
                lessonsSelect.empty();
                ageSelect.empty();
                if (data == null || data == undefined || $.isEmptyObject(data)) {
                    return;
                }
                // записываем пришедшую инфо уроков
                window.Lessons = data;
                // вставляем пришедшую инфо уроков в селекторы
                PasteDataToLessonsSelect(ageSelect, lessonsSelect);
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    SchoolRequestForm.GetSchoolRequestLesson = GetSchoolRequestLesson;
    function PasteDataToLessonsSelect(ageSelect, lessonsSelect) {
        // возрастные категории групп, которые пришли. Сначала пользователь выбирает возрастную категорию, а потом группу и время занятия.
        let ageCategories = Object.keys(window.Lessons);
        if (ageCategories.length == 0) {
            return;
        }
        // проходимся по возрастным категориям
        ageCategories.forEach((ageCategory) => {
            ageSelect.append(`<option value="${ageCategory}">${ageCategory}</option>`);
        });
        ageSelect.append(`<option value='' selected>Выберите возрастную категорию</option>`);
        if (ageSelect.val() == null || ageSelect.val() == undefined) {
            return;
        }
        ageSelect.show();
        $('.school-request-age').show();
        ageSelect
            .change(function () {
                // при смене возрастной категории в селекторе, очищаем селектор занятия
                lessonsSelect.empty();
                // выбранная возрастная категория
                let ageSelected = ageSelect.val();
                if (ageSelect.val() != '') {
                    //ищем группы с занятиями на основании выбранной возрастной категории
                    // и вставляем данные в селектор занятий
                    if (window.Lessons[ageSelected] != undefined && window.Lessons[ageSelected] != null) {
                        window.Lessons[ageSelected].forEach((lesson) => {
                            lessonsSelect.append(
                                `<option value="${lesson.LessonId}">Группа: ${lesson.GroupName}, Время занятия: ${lesson.DateTime}</option>`
                            );
                        });
                        lessonsSelect.append(`<option value='' selected>Выберите занятие</option>`);
                        lessonsSelect.show();
                        $('.school-request-lesson').show();
                    }
                }
            })
            .change();
        ageSelect.prop('disabled', false);
        lessonsSelect.prop('disabled', false);
    }
    /// кастомный event, на который можно подписаться, чтобы что-то сделать, когда форма отрендерилась.
    window.customEventForSchoolRequestForm = new Event('customEventForSchoolRequestForm');
})(SchoolRequestForm || (SchoolRequestForm = {}));
