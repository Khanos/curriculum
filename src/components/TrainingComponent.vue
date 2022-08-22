<template>
  <div id="training-container" class="q-mb-lg">
    <div class="row">
      <div class="col-12 q-px-lg">
        <q-timeline layout="comfortable" color="primary">
          <q-timeline-entry heading> Training </q-timeline-entry>
          <TrainingEntry
            class="page-break"
            v-for="(item, index) in training"
            :key="index"
            :body="item.body"
            :subtitle="item.subtitle"
            :icon="item.icon"
          />
        </q-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import TrainingEntry from './TrainingEntry.vue';
import { useTrainingStore } from 'src/stores/TrainingStore';
export default defineComponent({
  name: 'TrainingComponent',
  components: {
    TrainingEntry,
  },
  setup() {
    const store = useTrainingStore();
    const { training } = storeToRefs(store);
    const { initTraining } = store;
    onBeforeMount(() => {
      initTraining();
    });
    return {
      training,
    };
  },
});
</script>

<style>
#training-container .q-timeline__heading {
  left: -170px;
}
</style>
