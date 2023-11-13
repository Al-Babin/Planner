<template>
    <div class="d-flex justify-content-center" v-if="!appIsReady">
        <div class="spinner-border" role="status" >
            <span class="visually-hidden">Загрузка...</span>
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
    },
    computed: {
        appIsReady() {
           return this.$store.state.appIsReady
        }
    },
    components: {
    },
}
</script>

<style scoped lang="scss">

</style>