<template>
    <div class="wrapper">
        <p>Добавить категорию</p>
        <div class="wrapper d-flex gap-3">
            <input
                name="category-name-input"
                class="form-control input"
                type="text"
                v-bind:placeholder="placeholder"
                v-model="categoryName"
                v-on:keyup.enter="addCategory"
            >
            <button class="btn btn-primary text-nowrap" @:click="addCategory" > Добавить </button>
        </div>
    </div>
</template>

<script>
import toast from '@/toasts/toasts'

export default {
    data() {
        return {
            placeholder: "Введите название категории",
            categoryName: ""
        }
    },
    methods: {
        addCategory() {
            let blocks = this.$store.state.blocks
            let currentPeriod = this.$store.state.periods.find(period => period.is_selected == true)
            const data = {
                categoryName: this.categoryName,
                period_id: currentPeriod.id
            }
            let categoryNames = []
            for(let block of blocks) {
                categoryNames.push(block.name)
            }
            if(categoryNames.includes(this.categoryName)) {
                toast.showToast()
                this.categoryName = "";
            } else {
                this.$store.dispatch('addCategory', data);
                this.categoryName = "";
                // this.hideInput();
            }
        }
    },
    computed: {

    },
    components: {
    }
}
</script>

<style scoped lang="scss">

</style>