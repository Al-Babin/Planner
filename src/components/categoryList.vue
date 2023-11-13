<template>
<ul class="list-group">
    <item class="list-group-item" v-for="category in categories" :type="2" :item-in="category" :fns="functions" :considerCheck="false">
    </item>
</ul>


</template>

<script>
import item from "@/components/item.vue"

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
        categories() {
            return this.$store.state.blocks
        }
    },
    components: {
        item
    }
}
</script>

<style scoped lang="scss">
p {
   margin: 0; 
}

</style>