import Vue from "vue";
import Vuex from "vuex";
import { tomorrow } from "../utils/date.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    todos: [
      {
        icon: "bookmark",
        name: "重要",
        type: "matter",
        tasks: [
          {
            id: 1,
            title: "王者荣耀",
            date: new Date(),
            done: false,
            deleted: false,
          },
          {
            id: 2,
            title: "网上冲浪",
            date: new Date(),
            done: false,
            deleted: false,
          },
        ],
        colors: ["#e53e3e", "#ffa947"],
      },
      {
        icon: "suitcase",
        name: "计划日程",
        type: "plan",
        tasks: [
          {
            id: 3,
            title: "学习雪碧图",
            date: new Date(),
            done: true,
            deleted: false,
          },
          {
            id: 4,
            title: "移动端响应式设计",
            date: new Date(),
            done: false,
            deleted: false,
          },
          {
            id: 5,
            title: "HTML/CSS 学习",
            date: new Date(),
            done: false,
            deleted: false,
          },
          {
            id: 6,
            title: "周报",
            date: new Date(),
            done: false,
            deleted: false,
          },
          {
            id: 7,
            title: "学习PS",
            date: new Date(),
            done: false,
            deleted: false,
          },
        ],
        colors: ["#5b9df9", "#47bfff"],
      },
      {
        icon: "home",
        name: "其他",
        type: "other",
        tasks: [
          {
            id: 2,
            title: "室内清洁",
            date: new Date(),
            done: true,
            deleted: false,
          },
        ],
        colors: ["#2c7d59", "#3ba776"],
      },
    ],

    selected: null,
    unselect: null,
    editing: null,
  },
  getters: {
    currentTodo(state) {
      return state.todos[state.currentIndex];
    },
    todayTasks(state) {
      const tasks = [];
      state.todos.forEach((todo) => {
        todo.tasks.forEach((task) => {
          if (task.date <= tomorrow && !task.done && !task.deleted) {
            tasks.push(task);
          }
        });
      });
      return tasks;
    },
  },
  mutations: {
    selectTodo(state, selected) {
      state.unselect = null;
      state.selected = selected;
    },
    unselectTodo(state) {
      state.unselect = state.selected;
      state.selected = null;
    },
    nextTodo(state) {
      if (state.currentIndex < state.todos.length - 1) {
        state.currentIndex++;
      }
    },
    prevTodo(state) {
      if (state.currentIndex > 0) {
        state.currentIndex--;
      }
    },
    deleteTask(_, { task }) {
      task.deleted = true;
    },
    toggleEditing(state) {
      if (state.editing && state.editing.text) {
        state.selected.todo.tasks.unshift({
          title: state.editing.text,
          date: new Date(),
          done: false,
          deleted: false,
        });
      }
      state.editing = state.editing ? null : { text: "" };
    },
  },
  actions: {},
});
