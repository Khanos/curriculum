<template>
  <div id="skills-container" class="q-mb-lg">
    <div class="row">
      <div class="col-12">
        <h3 class="q-timeline__heading-title">Skills</h3>
      </div>
    </div>
    <div class="row q-px-md">
      <div
        class="col-xs-10 col-sm-6 col-md-4"
        v-for="(skill, index) in skills"
        :key="index"
      >
        <div class="q-pa-sm row justify-end">
          <div class="text-h6 q-pt-xs q-pr-sm">{{ skill.name }}</div>
          <q-rating
            v-model="skill.level"
            color="primary"
            size="18px"
            :icon="icons"
            readonly
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import skills from '../models/skills';
export default defineComponent({
  name: 'SkillsComponent',
  setup() {
    return {
      defaultIcon: 'fa-solid fa-code',
      icons: [
        'fa-solid fa-face-frown',
        'fa-solid fa-face-meh',
        'fa-solid fa-face-smile',
        'fa-solid fa-face-grin-beam',
        'fa-solid fa-face-grin-hearts',
      ],
      skills,
    };
  },
});
</script>

<style>
#skills-container .q-timeline__heading-title {
  margin-left: 10%;
}
#skills-container .q-rating__icon-container {
  padding: 3px;
}
#skills-container {
  padding-bottom: 3em;
}
</style>
