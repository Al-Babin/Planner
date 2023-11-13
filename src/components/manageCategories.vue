<template>
    <div class="d-flex align-items-center my-4 mb-3">
        <button class="btn btn-outline-secondary text-nowrap" @:click="showModal"> Категории </button>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    methods: {
        showModal() {
            this.$store.state.modals.modal_manageCategories.show()
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