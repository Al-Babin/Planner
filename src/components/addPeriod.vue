<template>
    <div class="wrapper">
        <p class="fw-bold mb-3">Добавить период</p>
        <div class="wrapper d-flex gap-3">
            <dateInput @update:model-value="handleDateLow" ref="datepicker" />
            <dateInput @update:model-value="handleDateHigh"/>
            <button class="btn btn-primary text-nowrap" @:click="addPeriod" > Добавить </button>
        </div>
        <div class="d-flex align-content-center mt-3 gap-2">
            <checkbox />
            <label class="fw-light fs-6" for="checkbox">Сделать текущим периодом</label>
        </div>
    </div>
</template>

<script>
import toast from '@/toasts/toasts'
import dateInput from './dateInput.vue';
import checkbox from './checkbox.vue';

export default {
    data() {
        return {
            dateLow: null,
            dateHigh: null
        }
    },
    methods: {
        addPeriod() {
            const period = {
                dateLow: this.dateLow,
                dateHigh: this.dateHigh
            }
            this.$store.dispatch('addPeriod', period);
        },
        handleDateLow(modelData) {
            this.dateLow = modelData
        },
        handleDateHigh(modelData) {
            this.dateHigh = modelData
        }
    },
    computed: {

    },
    components: {
        dateInput,
        checkbox
    }
}
</script>

<style scoped lang="scss">

</style>