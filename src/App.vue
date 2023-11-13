<template>
  <main>
    <modal_categories />
    <warningBeforeRemoveCategory />
    <modal_periods />
    <navbar></navbar>
    <div class="container">
      <RouterView></RouterView>
    </div>
  </main>

</template>

<script>
import { createStore } from '@/store/store.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.js';
import navbar from '@/components/navbar.vue';
import modal_categories from '@/components/modal_categories.vue';
import warningBeforeRemoveCategory from '@/components/warningBeforeRemoveCategory.vue';
import modal_periods from './components/modal_periods.vue';

export default {
  store: createStore,
  components: {
    navbar,
    modal_categories,
    warningBeforeRemoveCategory,
    modal_periods
  },
  mounted() {
    this.$store.dispatch('updateData', 1)
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
</style>
