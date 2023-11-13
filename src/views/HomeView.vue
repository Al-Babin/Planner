<template>
  <div class="container"> 
    <div class="header">
      <div class="header_nav">
        <h1 v-show="false">Planner</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="d-flex gap-2 justify-content-end content col-sm-10">
        <manageCategories />
        <managePeriods />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="content col-sm-10 justify-self-center">
        <toDoList />
        <spinner />
      </div>
    </div>
  </div>
</template>

<script>
import toDoList from '@/components/toDoList.vue';
import spinner from '@/components/spinner.vue';
import manageCategories from '@/components/manageCategories.vue';
import dateInput from '@/components/dateInput.vue';
import managePeriods from '@/components/managePeriods.vue';

export default {
  computed: {

  },
  components: {
    toDoList, 
    spinner,
    manageCategories,
    dateInput,
    managePeriods
  },
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 20px;
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

.bi {
  width: 1em;
  height: 1em;
}
</style>
