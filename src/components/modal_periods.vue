<template>
    <div class="modal in fade" id="managePeriods" tabindex="-1" aria-labelledby="managePeriodsLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="fs-5" id="managePeriodsLabel">Управление периодами</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body p-5">
                    <addPeriod class="mb-4" />
                   <p class="fw-bold">Мои периоды</p>
                   <periodList />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import periodList from './periodList.vue';
import addPeriod from './addPeriod.vue';

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
        periodList,
        addPeriod
    }
}
</script>

<style scoped lang="scss">
h1{
    margin: 0;
}

</style>