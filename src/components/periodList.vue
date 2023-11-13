<template>
<ul class="list-group">
    <periodItem class="list-group-item" v-for="period in periods" :type="2" :item-in="period" :fns="functions" :key="period.id">
    </periodItem>
</ul>

</template>

<script>
import { mapState } from 'vuex'
import periodItem from './periodItem.vue';

export default {
    data() {
        return {
            functions: {
                update: 'updateCategory',
                remove:  'removeCategory'
            }
        }
    },
    methods: {
    },
    computed: {
        ...mapState({
            periods: 'periods'
        }),
    },
    components: {
        periodItem
    }
}
</script>

<style scoped lang="scss">
p {
   margin: 0; 
}

</style>