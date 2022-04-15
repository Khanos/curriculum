<template>
  <q-page>
    <HeaderComponent />
    <ExperienceComponent />
    <TrainingComponent />
    <SkillsComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'components/HeaderComponent.vue';
import ExperienceComponent from 'components/ExperienceComponent.vue';
import TrainingComponent from 'components/TrainingComponent.vue';
import SkillsComponent from 'components/SkillsComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderComponent,
    ExperienceComponent,
    TrainingComponent,
    SkillsComponent,
  },
  setup() {
    const test = ref(false);
    return { test };
  },
});
</script>
