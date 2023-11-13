<template>
    <div class="modal fade" id="warnBeforeRemove" tabindex="-1" data-bs-backdrop="statick" aria-labelledby="warnBeforeRemoveLabel" aria-hidden="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="fs-5" id="warnBeforeRemoveLabel">Подтверждение удаления</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body p-5">
                   <p>При удалении категории удалятся все задачи, входящие в нее. Подтвердить удаление?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" 
                        @:click="this.$store.dispatch('removeAllTaskInCategory', categoryToDelete),
                        this.$store.state.modals.modal_warnBeforeRemove.hide(), 
                        this.$store.state.modals.modal_manageCategories.show()">Да
                    </button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @:click="this.$store.state.modals.modal_manageCategories.show()" >Отменить</button>
                </div>
            </div>
        </div>
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
        categoryToDelete(){
            return this.$store.state.categoryToDelete
        }
    },
    components: {
    }
}
</script>

<style scoped lang="scss">

</style>