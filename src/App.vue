<template>
    <div>
        <app-header></app-header>
        <div class="container-fluid">
            <div class="row">
                <app-nav></app-nav>
                <app-main></app-main>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './layouts/AppHeader.vue'
import AppNav from './layouts/AppNav.vue'
import AppMain from './layouts/AppMain.vue'

export default {
    name: "App",
    components: {
        "app-header": AppHeader,
        "app-nav": AppNav,
        "app-main": AppMain
    },
    data: function() {
        return {
            userType: 'ADMIN',
            adminTodoTasks: {
                'Learn Vue.js': {
                    username: 'tudor1'
                },
                'Write code': {
                    username: 'michael'
                },
                'Eat breakfast': {
                    username: 'cristina'
                },
                'Drive car': {
                    username: 'tudor1'
                }
            }
        }
    },
}
</script>
<style></style>