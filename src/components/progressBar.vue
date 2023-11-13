<template>
    <div class="wrapper d-flex align-items-center">
        <p class="me-sm-3 me-2"><small>Выполнение</small></p>
        <div class="progress me-2"
        role="progressbar"
        aria-label="Basic example"
        aria-valuemin="0"
        aria-valuemax="100">
            <div class="progress-bar" :style="{ width: progressValue + '%'}"></div>
        </div>
        <p><small>{{ progressValue + '%' }}</small></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        amountOfCheckedTasks() {
            return this.$store.getters.amountOfCheckedTasks
        },
        amountOfTasks() {
            return this.$store.getters.amountOfTasks
        },
        progressValue() {
            let value = 0
            if(this.amountOfTasks) {
                value = this.amountOfCheckedTasks / this.amountOfTasks * 100
                return Math.round(value)
            } else {
                return Math.round(value)
            }
        }
    },
    components: {
    }
}
</script>

<style scoped lang="scss">

p{
    margin: 0;
}
.progress {
    min-width: 100px;
    height: 8px;
    margin-bottom: -3px;

    @media (max-width: 575px) {
        display: none;
    }
}

</style>