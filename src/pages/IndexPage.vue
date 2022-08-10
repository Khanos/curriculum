<template>
  <q-page>
    <HeaderComponent />
    <ExperienceComponent />
    <TrainingComponent />
    <SkillsComponent />
    <p class="q-pa-lg text-center">Made with <q-icon color="red" name="fa-solid fa-heart"/> and <a href="https://github.com/Khanos/curriculum">Shared on</a> <q-icon name="fa-brands fa-github-alt" /></p> 
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
