import { defineStore } from 'pinia'

export const usePcsProjectsStore = defineStore('pcsProjects', {
  state: () => ({
    projects: [
     {
        id: 'asdf',
        name: 'My Pieces',
        template: {
          id: 'japanese-culture-style-prototype',
          name: 'Japanese Culture Style Prototype',
        },
        create_at: '2024-01-11T00:00:00.000Z',
        size: {
          'B(胸圍)': 82,
          'BL(背長)': 37,
          'S(袖長)': 54,
        },
        aux: {
          鬆份: 5,
        },
      },
      {
        id: 'eeeee',
        name: 'My Emoji',
        template: {
          id: 'japanese-culture-style-prototype',
          name: 'Japanese Culture Style Prototype',
        },
        create_at: '2024-01-11T00:00:00.000Z',
        size: {
          'B(胸圍)': 82,
          'BL(背長)': 37,
          'S(袖長)': 54,
        },
        aux: {
          鬆份: 5,
        },
      },
    ],
    fetchedData: null,
  }),
  actions: {
    async fetchDataById(payload) {
      const data = this.projects.find((project) => project.id === payload.id);
      this.fetchedData = data;
    }
  },
  getters: {
    allProjects: (state) => state.projects,
    getFetchedData() { return this.fetchedData }
  },
})