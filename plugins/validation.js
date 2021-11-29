import { validationMixin } from 'vuelidate';
import {
    helpers,
    required as r,
    minLength as minl,
    maxLength as maxl,
    minValue as minv,
    maxValue as maxv,
    sameAs as sa,
} from 'vuelidate/lib/validators';

import { password as passwordRegx, tel as telRegx, email as emailRegx, nameAll as nameAllRegx } from './regex';

export const nameAll = helpers.regex('nameAll', nameAllRegx);
export const password = helpers.regex('password', passwordRegx);
export const tel = helpers.regex('tel', telRegx);
export const email = helpers.regex('email', emailRegx);
export const required = r;
export const sameAs = sa;
export const minLength = minl;
export const maxLength = maxl;
export const minValue = minv;
export const maxValue = maxv;

export default validationMixin;
