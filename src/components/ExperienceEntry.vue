<template>
  <q-timeline-entry
    v-if="!avatar"
    :title="title"
    :subtitle="subtitle"
    :icon="icon ?? iconDefault"
  >
    <div v-html="body"></div>
  </q-timeline-entry>
  <q-timeline-entry v-else :title="title" :subtitle="subtitle" :avatar="avatar">
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
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      iconDefault: 'fa-solid fa-calendar-alt',
    };
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
  padding-bottom: 0px !important;
}
</style>
