export const useGlobalStore = defineStore('global', {
  state: () => ({
    darkMode: false
  }),
  actions: {
    toggleDark() {
      console.log('toggled', this.darkMode)
      this.darkMode = !this.darkMode
    }
  }
})
