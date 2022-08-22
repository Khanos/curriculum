import { defineStore } from 'pinia';
import { api } from 'boot/axios'

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
        const response = await api.get(process.env.API_URL_EXPERIENCE);
        if(response.status === 200) {
          this.experiences = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
