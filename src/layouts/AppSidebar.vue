<template>
   <div class="sidebar offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasExample">
            <div class="sidebar-wrapper">
                <div class="logo">
                    <a href="#" class="simple-text">
                        <div class="logo-img"><img src="/assets/images/logo.png" alt=""></div>
                        PokerTable
                    </a>
                </div>
                <ul class="nav"> 
                    <li class="nav-item">
                        <a href="#" class="nav-link collapseAllSettings" role="button" aria-expanded="false">
                            <i class="bi bi-bank"></i> 
                            <p>Table</p>
                        </a>
                    </li> 
                    <sidebar-link playerName="Results" iconClass="graph-up" />
                    <sidebar-link iconClass="person-circle"
                        v-for="( player ) of players"
                            :key="player"
                            :playerName="player" 
                    />
                </ul>
            </div>
        </div>
</template>
<script>
import SidebarLink from '../components/SidebarLink.vue'

export default {
    name: "AppSidebar",
    components: {
        "sidebar-link": SidebarLink,
    },
    data: function() {
        return {
            players: [
                "Andy", "Brad", "Chad", "Dave", "Eric", "Fred"
            ]
        }
    },
}
</script>
<style>
</style>