import { createStore } from 'vuex'
import axios from 'axios';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Modal } from 'bootstrap/dist/js/bootstrap.js'


export default createStore({
  state: {
    blocks: [],
    periods: [],
    appIsReady: false,
    categoryToDelete: null,
    modals: {
      modal_warnBeforeRemove: null,
      modal_manageCategories: null,
      modal_managePeriods: null
    },
  },
  getters: {
    blocks(state) {
      return state.blocks
    },
    amountOfCheckedTasks(state) {
      let amount = state.blocks.reduce((sum, block) => {
        let innerAmount = block.tasks.reduce((sum, task) => {
          if(task.is_checked) {
            return ++sum
          } else {
            return sum
          }
        }, 0)
        return sum + innerAmount
      }, 0)
      return amount
    },
    amountOfTasks(state) {
      let amount = state.blocks.reduce((sum, block) => {
        let innerAmount = block.tasks.reduce((sum, task) => {
          return ++sum
        }, 0)
        return sum + innerAmount
      }, 0)
      return amount
    },
    selectedPeriod(state) {
      const filteredPeriod = state.periods.filter(period => period.is_selected == true)
      return filteredPeriod[0]
    },
  },
  mutations: {
    initializeData(state, data) {
      let blocks = data[0]
      blocks.forEach(function(block){ 
        let tasks = data[1]
        const filteredTask = tasks.filter(task => task.category_id === block.category_id)
        let blockTasks = block.tasks = filteredTask.sort((a,b) => a.id - b.id)
        block.inputValue = ''
        block.isEmptyTask = false
      })
      state.blocks = blocks
      state.periods = data[2].sort((a,b) => a.id - b.id)
      state.appIsReady = true
      console.log('App is ready' + ' ' + state.appIsReady)
    },
    saveInputValue(state, inputTask) {
      const block = state.blocks.find(block => block.category_id == inputTask.blockId)
      block.inputValue = inputTask.value
    },
    notEmptyInput(state, block) {
      block.isEmptyTask = false
    },
    initializationModals(state) {
      state.modals.modal_manageCategories = new Modal(document.querySelector('#manageCategories'));
      state.modals.modal_warnBeforeRemove = new Modal(document.querySelector('#warnBeforeRemove'));
      state.modals.modal_managePeriods = new Modal(document.querySelector('#managePeriods'));
    },

    // Category mutations

    addCategory(state, category) {
      state.blocks.push({
        category_id: category.category_id,
        name: category.name,
        inputValue: "",
        tasks: [],
      })
    },
    updateCategory(state, categoryData) {
      const block = state.blocks.find(block => block.category_id == categoryData.category_id)
      block.name = categoryData.name
    },
    removeCategory(state, category_id) {
      const block = state.blocks.find(block => block.category_id == category_id)
      state.blocks = state.blocks.filter(block => block.category_id !== category_id)
    },
    setCategoryToDelete(state, data) {
      state.categoryToDelete = data.category_id
    },

    // task mutations

    removeTask(state, taskObj) {
      const block = state.blocks.find(block => block.category_id == taskObj.category_id)
      block.tasks = block.tasks.filter(task => task.id !== taskObj.id)
    },
    removeAllTasksInCategory(state, category_id) {
      const block = state.blocks.find(block => block.category_id == category_id)
      block.tasks.splice(0, block.tasks.length)
    },
    updateTask(state, taskObj) {
      const block = state.blocks.find(block => block.category_id == taskObj.category_id)
      let task = block.tasks.find(task => task.id == taskObj.id)
      task.is_checked = taskObj.is_checked
      task.name = taskObj.name
    },
    updateTaskValue(state, taskObj) {
      const block = state.blocks.find(block => block.category_id == taskObj.category_id)
      let task = block.tasks.find(task => task.id == taskObj.id)
      task.name = taskObj.name
    },
    updateTasks(state, response) {
      const block = state.blocks.find(block => block.category_id == response.category_id)
      block.tasks.push(response)
      block.inputValue = ""
    },

    // Period mutations
    addPeriod(state, period) {
      state.periods.push(period)
    },
    updatePeriod(state, data) {
      let period = state.periods.find(period => period.id == data.id)
      period.date_low = data.date_low
      period.date_high = data.date_high
    },
    setSelectedPeriod(state, id) {
      let selectedPeriod = state.periods.filter(period => period.id == id)[0]
      let otherPeriods = state.periods.filter(period => period.id != id)
      selectedPeriod.is_selected = true
      otherPeriods.forEach(period => period.is_selected = false)
    },
    removePeriod(state, id) {
      state.periods = state.periods.filter(period => period.id !== id)
    }
  },
  actions: {
    updateData({commit, dispatch}, condition) {
      // If condition = true, do initializationModals, else just startApp
      console.log(condition)
      dispatch('startApp')
      .then(responses => {
        console.log(responses)
        let data = [];
        responses.forEach(response => data.push(response.data))
        commit('initializeData', data)
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('Ошибка в ответе');
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('Ответ не получен');
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Что-то не то :D');
          console.log('Error', error.message);
        }
          console.log(error.config);
      })
      if(condition) {
        commit('initializationModals')
      }
    },
    startApp({dispatch}) {
      const dispatchingFunctions = [
        dispatch('getCategories'), 
        dispatch('getTasks'),
        dispatch('getPeriods')
      ]
      console.log('Запущено')
      return Promise.all(dispatchingFunctions)
    },
    // Categories
    async addCategory({ commit }, data) {
      const request = await axios.post('http://localhost:3000/api/category', {
        name: data.categoryName,
        period_id: data.period_id
      })
      .then(response => {
        commit('addCategory', response.data)
      })
    },
    async getCategories() {
      const response = await axios.get('http://localhost:3000/api/category');
      return response
    },
    async updateCategory({ commit }, category) {
      const request = await axios.patch('http://localhost:3000/api/category', {
        name: category.name,  
        categoryId: category.category_id
      })
      .then(response => {
        commit('updateCategory', response.data)
      })
    },
    async removeCategory({ commit }, category_id) {
        const request = await axios.delete(`http://localhost:3000/api/category/${category_id}`)
        .then(response => {
          commit('removeCategory', category_id)
        })
    },

    // Tasks
    async getTasks() {
      const response = await axios.get('http://localhost:3000/api/task');
      return response
    },
    async addNewTask({state, commit }, data) {
      const block = state.blocks.find(block => block.category_id == data.category_id)      
      const taskName = block.inputValue
      const prepCategoryId = Number(data.category_id)
      if(taskName !== "") {
        const request = await axios.post('http://localhost:3000/api/task', {
          name: taskName,
          categoryId: prepCategoryId,
          period_id: data.period_id
        })
        .then(response => {
          commit('updateTasks', response.data)
        })
      } else {
        block.isEmptyTask = true
      }
    },
    async removeTask({ commit }, task) {
      const request = await axios.delete(`http://localhost:3000/api/task/${task.id}`)
      .then(response => {
        commit('removeTask', task)
      })
    },
    async removeAllTaskInCategory({ dispatch, commit }, category_id) {
      const request = await axios.delete(`http://localhost:3000/api/task/dltAllinCtg/${category_id}`)
      .then(response => {
        commit('removeAllTasksInCategory', category_id)
        dispatch('removeCategory', category_id)
      })
    },
    async updateTask({ commit }, taskData) {
        const request = await axios.patch('http://localhost:3000/api/task', {
          name: taskData.name,  
          is_checked: taskData.is_checked,
          id: taskData.id,
        })
        .then(response => {
          commit('updateTask', response.data)
        })
    },

    // Periods
    async getPeriods() {
      const response = await axios.get('http://localhost:3000/api/period');
      return response
    },
    async addPeriod({ commit }, period) {
      const request = await axios.post('http://localhost:3000/api/period', {
        date_low: period.dateLow,
        date_high: period.dateHigh
      })
      .then(response => {
        commit('addPeriod', response.data)
      })
    },
    async updatePeriod({ commit }, period) {
      const request = await axios.patch('http://localhost:3000/api/period', {
        date_low: period.date_low,
        date_high: period.date_high,
        is_selected: period.is_selected,
        id: period.id
      })
      .then(response => {
        commit('updatePeriod', response.data)
      })
    },
    async removePeriod({ commit }, periodId) {
        const request = await axios.delete(`http://localhost:3000/api/period/${periodId}`)
        .then(response => {
          commit('removePeriod', response.data.id)
        })
    },
    async setSelectedPeriod({ commit, dispatch }, periodId) {
        const request = await axios.patch(`http://localhost:3000/api/period/setSelected/${periodId}`)
        .then(response => {
          commit('setSelectedPeriod', periodId)
          dispatch('updateData')
        })
    },


    
  },
  modules: {
  }
})
