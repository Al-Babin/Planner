<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top ps-3 pe-3">
    <div class="d-flex container-fluid">
        <router-link class="navbar-brand" to="/">Planner</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Переключатель навигации">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <progressBar class="ms-5 me-auto" />
            <ul class="navbar-nav ms-lg-5">
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/">Главная</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/statistics" class="nav-link">Статистика</router-link>
                </li>
                <li class="nav-item dropdown-center">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Профиль
                    </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Действие</a></li>
                    <li><a class="dropdown-item" href="#">Другое действие</a></li>
                    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                </ul>
                </li>
            </ul>
        </div>
    </div>
    </nav>
</template>

<script>
import progressBar from '@/components/progressBar.vue';

export default {
    data() {
        return {
            
        }
    },
    methods: {
    },
    computed: {

    },
    components: {
        progressBar,
    }
}
</script>

<style scoped lang="scss">
.nav-item {
    align-self: center;
}


</style>