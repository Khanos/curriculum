import { defineStore } from 'pinia';
import experience from 'src/data/experience';

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experiences: [],
  }),
  getters: {
    getExperience: (state) => state.experiences || [],
  },
  actions: {
    async initExperience() {
      try {
        this.experiences = experience;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
