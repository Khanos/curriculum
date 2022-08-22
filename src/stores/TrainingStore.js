import { defineStore } from 'pinia';
import { api } from 'boot/axios'

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
        const response = await api.get(process.env.API_URL_TRAINING);
        if(response.status === 200) {
          this.training = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
