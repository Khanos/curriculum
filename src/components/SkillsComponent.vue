<template>
  <div id="skills-container" class="q-mb-lg">
    <div class="row">
      <div class="col-12">
        <h3 class="q-timeline__heading-title">Skills</h3>
      </div>
    </div>
    <div class="row q-px-md">
      <div
        class="col-xs-4 col-sm-3 col-md-2 q-pa-sm skill-card"
        v-for="(skill, index) in skills"
        :key="index"
      >
        <q-card flat class="my-card text-center q-pa-none">
          <q-card-section class="q-pa-none q-ma-none">
            <q-img
              :src="skill.img"
              :alt="skill.name"
              loading="lazy"
              spinner-color="white"
              style="max-width: 80px;"
            />

          </q-card-section>

          <q-card-section>
            <div class="text-caption text-uppercase">{{skill.name}}</div>
          </q-card-section>
        </q-card>
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
    const test = skills[0];
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
      test
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
