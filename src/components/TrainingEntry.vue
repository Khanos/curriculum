<template>
  <q-timeline-entry :subtitle="subtitle" :icon="icon ?? iconDefault">
    <div v-html="body"></div>
  </q-timeline-entry>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TrainingComponent',
  props: {
    body: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      iconDefault: 'fa-solid fa-book-open',
    };
  },
});
</script>

<style></style>
