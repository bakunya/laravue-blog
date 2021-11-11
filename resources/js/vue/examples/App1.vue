<template>
    <div class="container mx-auto mt-3">
        <div class="card p-2">
            <div class="card-body">
                <h5 class="card-title">Todo App</h5>
            </div>
            <div class="row">
                <div class="col-10">
                    <input type="text" class="form-control" v-model="todo" @keyup.enter="add">
                </div>
                <div class="col-2">
                    <button class="btn btn-success container" @click="add">ADD</button>
                </div>
            </div>
            <todo-item :todos="todos" @deleteTodo="deleteTodo" @doneTodo="doneTodo" />
            <small class="text-end mt-2">Total TODOS: {{ totalTODOS }}</small>
        </div>
    </div>
</template>

<script>
    import List from './components/List.vue'

    export default {
        components: {
            "todo-item": List
        },
        data() {
            return {
                todo: "",
                todos: []
            }
        },
        mounted() {
            this.todos = this.getLocalStorage()
        },
        computed: {
            totalTODOS() {
                return this.todos.length
            }
        },
        methods: {
            add() {
                this.todos.unshift({
                    activity: this.todo,
                    finished: false,
                })
                this.todo = ""
                this.saveLocalStorage()
            },
            deleteTodo(key) {
                this.todos = this.todos.filter((itm, i) => key !== i && itm)
                this.saveLocalStorage()
            },
            doneTodo(key) {
                this.todos = this.todos.filter((itm, i) => {
                    if(i === key) return itm.finished = true
                    return itm
                })
                this.saveLocalStorage()
            },
            saveLocalStorage() {
                localStorage.setItem('todos', JSON.stringify(this.todos))
            },
            getLocalStorage() {
                return JSON.parse(localStorage.getItem('todos')) ?? []
            }
        }
    }
</script>