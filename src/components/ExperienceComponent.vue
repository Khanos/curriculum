<template>
  <div id="experience-container" class="q-mb-lg">
    <div class="row">
      <div class="col-12">
        <div class="q-pa-sm text-h5 section-title">
          <q-icon
            name="fa-solid fa-briefcase q-mx-md"
            color="primary"
            size="30px"
          />
          <span class="text-subtitle1 text-primary"><b>Experience</b></span>
        </div>
      </div>
      <div class="col-12 q-px-lg">
        <q-timeline
          layout="comfortable"
          color="secondary"
          v-for="(item, index) in experiences"
          :key="index"
        >
          <ExperienceEntry
            :title="item.title"
            :subtitle="item.subtitle"
            :icon="item.icon"
            :avatar="item.avatar"
            :body="item.body"
          />
        </q-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ExperienceEntry from './ExperienceEntry.vue';
import experiences from '../data/experiences';
export default defineComponent({
  name: 'ExperienceComponent',
  components: {
    ExperienceEntry,
  },
  setup() {
    return {
      experiences,
    };
  },
});
</script>

<style>
#experience-container .q-timeline--comfortable .q-timeline__subtitle {
  width: 10% !important;
}
</style>
