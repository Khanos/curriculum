import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    skills: [],
  }),
  getters: {
    getSkills: (state) => state.skills || [],
  },
  actions: {
    async initSkills() {
      try {
        const response = await api.get(process.env.API_URL_SKILLS);
        if(response.status === 200) {
          this.skills = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
