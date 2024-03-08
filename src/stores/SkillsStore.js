import { defineStore } from 'pinia';
import Skills from 'src/data/skills';

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
        this.skills = Skills;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
