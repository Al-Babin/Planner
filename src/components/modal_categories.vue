<template>
    <div class="modal in fade" id="manageCategories" tabindex="-1" aria-labelledby="manageCategoriesLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="fs-5" id="manageCategoriesLabel">Управление категориями</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body p-5">
                   <addCategory class="mb-4" />
                   <p>Мои категории</p>
                   <categoryList />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import addCategory from '@/components/addCategory.vue';
import categoryList from '@/components/categoryList.vue';

export default {
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {

    },
    components: {
        addCategory,
        categoryList
    }
}
</script>

<style scoped lang="scss">
h1{
    margin: 0;
}

</style>