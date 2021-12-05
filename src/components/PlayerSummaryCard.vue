<template>
    <div class="col-xl-2 col-md-2 col-sm-6">
        <div class="card card-stats">
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-5 col-md-12">
                        <div class="icon-big text-center">
                            <i :class="`bi-person-circle plr-${ lowerName }`"></i>
                        </div>
                    </div> 
                    <div class="col-xl-7 col-md-12">
                        <div class="numbers">
                            <p class="card-category">Stack</p> 
                            <h4 class="card-title">105GB</h4>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlayerSummaryCard',
    props: {
        'playerName': {
            type: String,
            required: true,
            default: ''
        }
    },
    computed: {
        'lowerName': function() {
            return this.playerName.toLowerCase()
        }
    }
}
</script>
<style>
</style>