<template>
        <input
            id="checkbox"
            class="form-check-input checkbox"
            type="checkbox"
            :checked="is_checked"
            value=""
            @:click=""
        >
</template>

<script>
export default {
    data() {
        return {
            is_checked: false,
        }
    },
    methods: {
    },
    computed: {
    },
    components: {
    },
}
</script>

<style scoped lang="scss">
    .checkbox {
        flex: 0 0 1em;
    }
</style>