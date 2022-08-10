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
import { defineComponent } from 'vue';
import TrainingEntry from './TrainingEntry.vue';
import training from '../models/training';
export default defineComponent({
  name: 'TrainingComponent',
  components: {
    TrainingEntry,
  },
  setup() {
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
