<template>
    <div class="content">
        <div class="container-fluid">
            <TableSettings/>
            <div class="row">
                <PlayerSummaryCard
                    v-for="( player ) of players"
                        :key="player"
                        :playerName="player" 
                />
            </div>
            <div class="row">
                <PlayerSettingsCard
                    v-for="( player ) of players"
                        :key="player"
                        :playerName="player" 
                />
            </div>
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Table Actions</h4> 
                        </div> 
                        <div class="card-body">
                            <table id="playTable"></table>
                            <div class="ct-chart">
                                <div class="row justify-content-center">
                                    <PlayerSeatCard idx="1" playerName="andy" />
                                    <PlayerSeatCard idx="2" playerName="brad" />
                                </div>
                                <div class="row">
                                    <PlayerSeatCard idx="3" playerName="chad" />
                                    <div id="streetCards" class="col-4"></div>
                                    <PlayerSeatCard idx="4" playerName="dave" />
                                </div>
                                <div class="row justify-content-center">
                                    <PlayerSeatCard idx="5" playerName="eric" />
                                    <PlayerSeatCard idx="6" playerName="fred" />
                                </div>
                            </div>
                        </div> 
                        <div class="card-footer">
                            <div class="legend">
                                <div id="gameResults"></div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Hand Breakdown</h4> 
                        </div> 
                        <div class="card-body">
                            <div class="ct-chart" id="handBreakdown"></div>
                        </div> 
                        <div class="card-footer">
                            <div class="legend">
                                <i class="bi-record-fill plr-andy"></i> Andy
                                <i class="bi-record-fill plr-brad"></i> Brad
                                <i class="bi-record-fill plr-chad"></i> Chad
                                <i class="bi-record-fill plr-dave"></i> Dave
                                <i class="bi-record-fill plr-eric"></i> Eric
                                <i class="bi-record-fill plr-fred"></i> Fred
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Player History</h4> 
                            <p class="card-category">24 Hands Performance</p>
                        </div> 
                        <div class="card-body">
                            <div class="ct-chart"></div>
                        </div> 
                        <div class="card-footer">
                            <div class="legend">
                                <i class="bi-record-fill plr-andy"></i> Andy
                                <i class="bi-record-fill plr-brad"></i> Brad
                                <i class="bi-record-fill plr-chad"></i> Chad
                                <i class="bi-record-fill plr-dave"></i> Dave
                                <i class="bi-record-fill plr-eric"></i> Eric
                                <i class="bi-record-fill plr-fred"></i> Fred
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import TableSettings from '../../components/TableSettings.vue'
import PlayerSummaryCard from '../../components/PlayerSummaryCard.vue'
import PlayerSettingsCard from '../../components/PlayerSettingsCard.vue'
import PlayerSeatCard from '../../components/PlayerSeatCard.vue'

export default {
    name: "Content",
    components: {
        TableSettings,
        PlayerSummaryCard,
        PlayerSettingsCard,
        PlayerSeatCard
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