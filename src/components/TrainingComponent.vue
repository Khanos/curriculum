<template>
  <div id="training-container" class="q-mb-lg">
    <div class="row">
      <div class="col-12">
        <div class="q-pa-sm text-h5 section-title">
          <q-icon
            name="fa-solid fa-book-open q-mx-md"
            color="primary"
            size="30px"
          />
          <span class="text-subtitle1 text-primary"><b>Training</b></span>
        </div>
      </div>
      <div class="col-12 q-px-lg">
        <q-timeline
          layout="comfortable"
          color="primary"
          v-for="(item, index) in training"
          :key="index"
        >
          <TrainingEntry
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
import training from '../data/training';
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

<style></style>
