<template>
    <li class="item">
        <!-- Чекбокс -->
        <input 
        class="form-check-input d-flex radio-button"
        type="radio"
        :checked="itemIn.is_selected" 
        value=""
        :disabled="isChanging"
        @:click="selectCurrent(itemIn)"
        >
        <p class="period_text" v-if="!isChanging">{{ formatPeriod }}</p>
        
        <div v-else="isChanging" class="date-inputs d-flex me-auto gap-3">
            <dateInput :date="itemIn.date_low" @update:model-value="handleDateLow" @date-update="dateClicked"/>
            <dateInput :date="itemIn.date_high" @update:model-value="handleDateHigh"/>
        </div>

        <button class="btn btn-secondary" v-if="!isChanging" @:click="toggleChanging"><i class="bi bi-pencil"></i></button> 
        <button class="btn btn-success" v-if="isChanging" @:click="updateItemValue(itemIn)"><i class="bi bi-check2"></i></button> 
        <button class="btn btn-secondary" v-if="isChanging" @:click="toggleChanging"><i class="bi bi-x-lg"></i></button> 
        <button class="btn btn-danger" v-if="!isChanging" @:click="removeItem(itemIn)"><i class="bi bi-trash"></i></button>
    </li>

</template>

<script>
import dateInput from './dateInput.vue'

export default {
    data() {
        return {
            dateLow: this.itemIn.date_low,
            dateHigh: this.itemIn.date_high,
            isChanging: false,
        }
    },
    props: ['itemIn', 'fns', 'type'],
    methods: {
        removeItem(item) {
            if(item.is_selected){
                console.log('Вы удаляете текущий период')
            } else {
                this.$store.dispatch('removePeriod', item.id)
            }
        },
        selectCurrent(item) {
            console.log(item)
            this.$store.dispatch('setSelectedPeriod', item.id )             
        },
        updateItemValue(item) {
            console.log(item)
            let { id, is_selected } = item
            let data = {}
            data.id = id
            data.date_low = this.dateLow
            data.date_high = this.dateHigh
            data.is_selected = is_selected
            console.log(data)
            this.$store.dispatch('updatePeriod', data)
            this.toggleChanging()
        },
        toggleChanging() {
            this.isChanging = !this.isChanging
        },
        handleDateLow(modelData) {
            this.dateLow = modelData
            console.log(modelData)
        },
        handleDateHigh(modelData) {
            this.dateHigh = modelData
            console.log(modelData)
        },
        dateClicked(date) {
            console.log(date);
        }
    },
    computed: {
        formatPeriod() {
            const date_low = new Date(this.itemIn.date_low).toLocaleDateString("ru")
            const date_high = new Date(this.itemIn.date_high).toLocaleDateString("ru")

            return `${date_low} - ${date_high}`
        }
    },
    components: {
        dateInput
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
    .radio-button {
        margin: 0;
        flex: 0 0 auto;
    }
    .period_text {
        margin-right: auto;
    }
</style>