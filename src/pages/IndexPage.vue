<template>
  <q-page>
    <HeaderComponent />
    <ExperienceComponent />
    <TrainingComponent />
    <SkillsComponent />
  </q-page>
</template>

<script>
import HeaderComponent from 'components/HeaderComponent.vue';
import ExperienceComponent from 'components/ExperienceComponent.vue';
import TrainingComponent from 'components/TrainingComponent.vue';
import SkillsComponent from 'components/SkillsComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderComponent,
    ExperienceComponent,
    TrainingComponent,
    SkillsComponent,
  },
  setup() {
    return {};
  }
})
</script>
