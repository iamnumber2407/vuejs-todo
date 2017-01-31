// define the component
var todoItems = Vue.extend({
  template: '#todo-items-template',
  props: ['todos'],
  methods: {
    deleteTodo(todo) {
      this.todos.$remove(todo);
    },
    todoCompleted(todo) {
      todo.completed = !todo.completed
    }
  }
});

// register the component
Vue.component('todo-item', todoItems);

// create the root vue instance
new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: {
      title: '',
      completed: false
    }
  },
  computed: {
    todoCount() {
      return this.todos.length
    }
  },
  methods: {
    addTodo(newTodo) {
      if (newTodo.title.length == 0) {
        alert('you must enter a task!')
      } else {
        this.todos.push(newTodo)
        this.newTodo = {
          title: '',
          completed: false
        }
      }
    }
  }
})
