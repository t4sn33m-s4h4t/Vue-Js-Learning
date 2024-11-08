import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import ToDoItem from './components/ToDoItem.vue'

const app = createApp(App)
app.component("food-item", FoodItem)
app.component("todo-item", ToDoItem)
app.mount('#app')
