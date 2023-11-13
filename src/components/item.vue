<template>
    <li class="item">
        <!-- Чекбокс выполнения -->
        <input 
        class="form-check-input checkbox"
        type="checkbox"
        :checked="is_checked" 
        value=""
        :disabled="isChanging"
        v-if="considerCheck"
        @:click="toggleChecked(itemIn)"
        >
        <p class="item__name" v-if="!isChanging">{{ itemName }}</p>
        <input 
            class="form-control"
            type="text"
            v-else="isChanging"
            v-model="itemName"
            @keyup.enter="updateItemValue(itemIn)"
        >
        <button class="btn btn-secondary" v-if="!isChanging" @:click="toggleChanging"><i class="bi bi-pencil"></i></button> 
        <button class="btn btn-success" v-if="isChanging" @:click="updateItemValue(itemIn)"><i class="bi bi-check2"></i></button> 
        <button class="btn btn-secondary" v-if="isChanging" @:click="toggleChanging"><i class="bi bi-x-lg"></i></button> 
        <button class="btn btn-danger" v-if="!isChanging" @:click="removeItem(itemIn, type)"><i class="bi bi-trash"></i></button>
    </li>

</template>

<script>
export default {
    data() {
        return {
            isChanging: false,
            itemName: this.itemIn.name,
            is_checked: this.itemIn.is_checked,
            functions: {
              update: this.fns.update,
              remove: this.fns.remove
            },
        }
    },
    props: ['itemIn', 'fns', 'considerCheck', 'type'],
    methods: {
        removeItem(item, type) {
            let { id, category_id } = item
            const data = {}
            data.id = id
            data.category_id = category_id
            console.log(data)
            if(type == 2) { // Type 2 - удаление категории
                const block = this.$store.state.blocks.find(block => block.category_id == category_id)
                if(block.tasks.length) {
                    this.$store.commit('setCategoryToDelete', data)
                    this.$store.state.modals.modal_warnBeforeRemove.show()
                    this.$store.state.modals.modal_manageCategories.hide()
                } else {
                    this.$store.dispatch(this.functions.remove, data.category_id)
                }
            } else {
                this.$store.dispatch(this.functions.remove, data)
            }
        },
        toggleChecked(item) {
            let { id, category_id, is_checked } = item
            let data = {}
            data.id = id
            data.category_id = category_id
            data.is_checked = !is_checked
            data.name = this.itemName
            this.$store.dispatch('updateTask', data )
        },
        updateItemValue(item) {
            console.log(item)
            let { id, category_id, is_checked } = item
            let data = {}
            data.id = id
            data.category_id = category_id
            data.is_checked = is_checked
            data.name = this.itemName
            console.log(data)
            this.$store.dispatch(this.functions.update, data)
            this.toggleChanging()
        },
        toggleChanging() {
            this.isChanging = !this.isChanging
        },
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
    .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }
    .item__name {
        margin-right: auto;
    }
    .checkbox {
        flex: 0 0 1em;
        margin-bottom: 3px;
    }
</style>