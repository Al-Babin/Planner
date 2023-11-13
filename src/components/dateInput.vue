<template>
    <VueDatePicker 
    v-model="date" 
    :format="format" 
    :placeholder="placeholder"
    :enable-time-picker="false"
    utc
    auto-apply
    ref="datepicker"/>
</template>

<script setup>
// Example using a custom format function
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
import { DatePickerInstance } from "@vuepic/vue-datepicker"

const props = defineProps({
  date: String
})

const date = ref(props.date);
const datepicker = ref<DatePickerInstance>(null);

const placeholder = ref('Дата')

const format = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  day < 10 ? day = `0${day}` : day 
  month < 10 ? month = `0${month}` : month 
  // year = year.toString().substr(-2, 2)

  return `${day}.${month}.${year}`;
}

const clearValue = () => {
  if (datepicker) {
    datepicker.value.clearValue()
  }
}
defineExpose({
  clearValue
})

</script>

<style scoped lang="scss">

</style>