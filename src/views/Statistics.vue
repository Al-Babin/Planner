<template>
  <div class="container"> 
    <div class="header">
      <div class="header_nav">
        <h1 v-show="true">Статистика</h1>
      </div>
    </div>
    <div class="content">
      <spinner />
    </div>
  </div>
</template>

<script>
import spinner from '@/components/spinner.vue';

export default {
  computed: {

  },
  components: {
    spinner,
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 20px;
  padding-top: 45px;
  padding-bottom: 20px;
}
.header_nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

h1 {
  margin: 0;
}
</style>
