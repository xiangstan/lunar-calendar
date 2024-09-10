// src/store/index.js
import { defineStore } from "pinia"

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      isDarkMode: false,
      isInternal: false,
      isShown: {
        calendarModal: false
      }
    }
  },
  actions: {
    // toggle between light/dark mode
    setDarkMode(data) {
      const darkMode = (typeof data === "boolean") ? data : false;
      this.isDarkMode = darkMode
    },
    // Define an action to update the internal status
    updateInternalStatus(status) {
      this.isInternal = (typeof status === "boolean") ? status : false;
    },
    updateShown(data) {
      this.isShown[data.cat] = data.value
    }
  },
})