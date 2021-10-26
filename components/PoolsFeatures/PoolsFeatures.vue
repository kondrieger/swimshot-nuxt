<template>
  <ul
    class="pools-features__list"
    :class="{ 'pools-features__list--alone': alone }"
  >
    <li
      class="pools-features__list-item"
      v-for="(feature, index) in PoolsFeatures"
      :key="index"
    >
      <p class="pools-features__list-item-title">{{ feature.title }}</p>
      <p class="pools-features__list-item-text">{{ feature.text }}</p>
    </li>
  </ul>
</template>

<script>
import "./styles.css";
export default {
  props: {
    PoolsFeatures: {
      type: Array,
      default: () => [],
    },
    alone: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
