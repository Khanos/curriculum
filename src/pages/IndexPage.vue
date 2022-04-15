<template>
  <q-page>
    <HeaderComponent />
    <ExperienceComponent />
    <TrainingComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'components/HeaderComponent.vue';
import ExperienceComponent from 'components/ExperienceComponent.vue';
import TrainingComponent from 'components/TrainingComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderComponent,
    ExperienceComponent,
    TrainingComponent,
  },
  setup() {
    const test = ref(false);
    return { test };
  },
});
</script>
