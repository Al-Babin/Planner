<template>
    <ul>
        <li class="block" v-for="block in blocks" v-bind:key="block.category_id">
            <div class="category-wrapper">
                <h5 class="category"> {{ block.name }}</h5>
                <!-- <button class="btn btn-secondary"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger">Удалить</button>  -->
            </div>
            <div class="controller">
                <!-- Текстовый ввод задачи -->
                <input 
                    class="form-control"
                    :class="{ empty: block.isEmptyTask }"
                    type="text" 
                    :placeholder="placeholder"
                    :value="block.inputValue"
                    :blockId="block.category_id"
                    @input="saveInputValue"
                    @keyup.enter="addTask(block)"
                    @:click="notEmptyInput(block)"
                >
                <button class="btn btn-primary" @:click="addTask(block)">Добавить</button> 
            </div>
            <ul class="tasks">
                <item  v-for="task in block.tasks" :item-in="task" :key="task.id" :fns="functions" :considerCheck="true"/>
            </ul>
        </li>
    </ul>
</template>

<script>
import item from "@/components/item.vue"

export default {
    data() {
        return {
            placeholder: 'Введите название задачи',
            functions: {
                update: 'updateTask',
                remove:  'removeTask'
            }
        }
    },
    components: {
        item
    },
    methods: {
        saveInputValue(e) {
            let result = {};
            result.value = e.target.value
            result.blockId = e.target.getAttribute('blockId')
            this.$store.commit('saveInputValue', result)
        },
        addTask(block) {
            console.log(block)
            this.$store.dispatch('addNewTask', block)
        },
        removeTask(inputTask) {
            let { id, category_id } = inputTask
            const task = {}
            task.id = id
            task.category_id = category_id
            console.log(task)
            this.$store.dispatch('removeTask', task )
        },
        notEmptyInput(block) {
            this.$store.commit('notEmptyInput', block)
        },
    },
    computed: {
        blocks() {
            return this.$store.state.blocks;
        }
    },
}
</script>

<style scoped lang="scss">
    ul {
        padding-top: 20px;
        list-style: none;
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    input {
        width: 100%;
    }
    .form-label {
        margin-bottom: 0;
    }

    .category {
        margin-right: auto;
    }
    .category-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        gap: 10px;
    }
    .controller {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .tasks {
        margin-bottom: 20px;
    }
    .empty {
        background-color: rgb(244, 206, 206);
        border: 1px solid rgb(255, 72, 72);
    }
</style>