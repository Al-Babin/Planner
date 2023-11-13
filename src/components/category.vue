<template>
    <li class="task">
        <!-- Чекбокс выполнения -->
        <input 
        class="form-check-input checkbox"
        type="checkbox"
        :checked="is_checked" 
        value=""
        :disabled="isChanging"
        @:click="toggleChecked(task)"
        >
        <p class="task__name" v-if="!isChanging">{{ taskName }}</p>
        <input 
            class="form-control"
            type="text"
            v-else="isChanging"
            v-model="taskName"
            @keyup.enter="updateTaskValue(task)"
        >
        <button class="btn btn-secondary" v-if="!isChanging" @:click="toggleChanging"><i class="bi bi-pencil"></i></button> 
        <button class="btn btn-success" v-if="isChanging" @:click="updateTaskValue(task)"><i class="bi bi-check2"></i></button> 
        <button class="btn btn-secondary" v-if="isChanging" @:click="toggleChanging"><i class="bi bi-x-lg"></i></button> 
        <button class="btn btn-danger" v-if="!isChanging" @:click="removeTask(task)"><i class="bi bi-trash"></i></button> 
    </li>

</template>

<script>
export default {
    data() {
        return {
            isChanging: false,
            taskName: this.task.name,
            is_checked: this.task.is_checked
        }
    },
    props: ['task'],
    methods: {
        removeTask(inputTask) {
            let { id, category_id } = inputTask
            const task = {}
            task.id = id
            task.category_id = category_id
            console.log(task)
            this.$store.dispatch('removeTask', task )
        },
        toggleChecked(task) {
            let { id, category_id, is_checked } = task
            let taskData = {}
            taskData.id = id
            taskData.category_id = category_id
            taskData.is_checked = !is_checked
            taskData.name = this.taskName
            this.$store.dispatch('updateTask', taskData )
        },
        updateTaskValue(task) {
            let { id, category_id, is_checked } = task
            let taskData = {}
            taskData.id = id
            taskData.category_id = category_id
            taskData.is_checked = is_checked
            taskData.name = this.taskName
            this.$store.dispatch('updateTask', taskData)
            this.toggleChanging()
        },
        toggleChanging() {
            this.isChanging = !this.isChanging
        }
    },
    computed: {

    },
    components: {
    }
}
</script>

<style scoped lang="scss">
    p {
        margin: 0;
    }
    .task {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }
    .task__name {
        margin-right: auto;
    }
    .checkbox {
        flex: 0 0 1em;
        margin-bottom: 3px;
    }
</style>