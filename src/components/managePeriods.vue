<template>
    <div class="my-4 mb-3" v-if="this.$store.state.appIsReady">
        <button class="btn btn-outline-secondary text-nowrap" @:click="showModal()">
            {{ selectedPeriod }}
        </button>
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
            this.$store.state.modals.modal_managePeriods.show()
        }
    },
    computed: {
        selectedPeriod() {
            let rawData = this.$store.getters.selectedPeriod
            let date_low = new Date(rawData.date_low).toLocaleDateString("ru")
            let date_high = new Date(rawData.date_high).toLocaleDateString("ru")
            return `${date_low} - ${date_high}`
        }
    },
    components: {
    }
}

function formatDate(input) {
   let arr = input.split('-')
   let y = arr[0].substr(-2, 2)
   let m = arr[1]
   let d = arr[2].substr(0, 2)
   return `${d}.${m}.${y}`
}

</script>

<style scoped lang="scss">

</style>