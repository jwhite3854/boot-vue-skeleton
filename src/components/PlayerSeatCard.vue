<template>
    <div class="col-4">
        <div class="card card-seat">
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <div class="icon-big text-center">
                            <i :class="`bi-person-circle plr-${playerName}`"></i>
                        </div>
                    </div> 
                    <div class="col-8">
                        <div class="table-seat" :id="`seat${idx}`"></div>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlayerSeatCard',
    props: {
        'playerName': {
            type: String,
            required: true,
            default: ''
        },
        'idx': {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>
<style>
</style>