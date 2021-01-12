import { createHook } from 'overmind-react';

export const config = {
  state: {
    todos: ['Code', 'Test', 'Repeat'],
  },
  actions: {
    addTodo({ state }, todo) {
      state.todos = [todo, ...state.todos];
    },
    removeTodo({ state }, indexToDelete) {
      state.todos = state.todos.filter((_, i) => indexToDelete !== i);
    },
  },
};

export const useOvermind = createHook();
