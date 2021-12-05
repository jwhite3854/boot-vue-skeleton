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
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="collapse" href="#collapseTableSettings" role="button" aria-expanded="false" aria-controls="collapseTableSettings">
                            <i class="bi bi-gear"></i> Settings
                        </a>
                    </li> 
                    <li class="nav-item">
                        <a href="#" class="nav-link resetTable"><i class="bi bi-arrow-clockwise"></i> Reset</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {}
</script>
<style>
</style>