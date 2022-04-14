<template>
  <q-timeline-entry :title="title" :subtitle="subtitle" :icon="icon">
    <div v-html="body"></div>
  </q-timeline-entry>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ExperienceEntry',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style>
.q-timeline__title {
  margin-top: 0;
  margin-bottom: 5px;
}
.q-timeline__content {
  padding-top: 0px !important;
  padding-bottom: 10px !important;
}
</style>
