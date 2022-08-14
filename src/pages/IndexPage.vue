<template>
  <q-page>
    <HeaderComponent />
    <p class="text-center location-text q-pb-none q-mb-none">
      I'm currently in Venezuela 5101 
      <q-img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Venezuela_%28state%29.png/800px-Flag_of_Venezuela_%28state%29.png"
        width="28px"
      />
    </p>
    <p class="q-gutter-none text-center location-sub-text q-pb-none q-mb-none">
      Working remotely and open to relocation.
    </p>
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
