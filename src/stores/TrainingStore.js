import { defineStore } from 'pinia';
import training from 'src/data/training';

export const useTrainingStore = defineStore('training', {
  state: () => ({
    training: [],
  }),
  getters: {
    getTraining: (state) => state.training || [],
  },
  actions: {
    async initTraining() {
      try {
        this.training = training;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
