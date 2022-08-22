<template>
  <div id="experience-container" class="q-mb-lg">
    <div class="row">
      <div class="col-12 q-px-lg">
        <q-timeline layout="comfortable" color="secondary">
          <q-timeline-entry heading> Experience </q-timeline-entry>
          <ExperienceEntry
            class="page-break"
            v-for="(item, index) in experiences"
            :key="index"
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
import { defineComponent, onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import ExperienceEntry from './ExperienceEntry.vue';
import { useExperienceStore } from 'src/stores/ExperienceStore';
export default defineComponent({
  name: 'ExperienceComponent',
  components: {
    ExperienceEntry,
  },
  setup() {
    const store = useExperienceStore();
    const { experiences } = storeToRefs(store);
    const { initExperience } = store;
    onBeforeMount(() => {
      initExperience();
    });
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
