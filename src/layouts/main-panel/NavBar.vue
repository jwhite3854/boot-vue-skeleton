<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-expanded="false" aria-controls="offcanvasExample" class="navbar-toggler navbar-toggler-right toggled">
                <span class="navbar-toggler-bar burger-lines"></span> 
                <span class="navbar-toggler-bar burger-lines"></span> 
                <span class="navbar-toggler-bar burger-lines"></span>
            </button> 
            <ul class="nav navbar-nav mr-auto">
                <li class="nav-item">
                    <div class="input-group" style="width: 180px">
                        <button class="btn btn-primary" type="button" id="button-addon2"><i class="bi-play-fill"></i> Play</button>
                        <input type="text" class="form-control" value="1000">
                    </div>
                </li>
            </ul>
            <div class="collapse navbar-collapse justify-content-end">
                <ul class="nav navbar-nav ml-auto">
                    <sidebar-link playerName="TableSettings" iconClass="gear" />
                    <li class="nav-item">
                        <a href="#" class="nav-link resetTable"><i class="bi bi-arrow-clockwise"></i> Reset</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import SidebarLink from '../../components/SidebarLink.vue'

export default {
    name: "AppSidebar",
    components: {
        "sidebar-link": SidebarLink,
    }
}
</script>
<style>
</style>