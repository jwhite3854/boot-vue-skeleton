<template>
    
    <div class="content">
                <div class="container-fluid">
                    <div class="row collapse" id="collapseTableSettings">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title"><i class="bi bi-sliders"></i> Table Settings</h4> 
                                    <p class="card-category">Last Campaign Performance</p>
                                </div> 
                                <div class="card-body">
                                    <button id="playButton" onclick="playGame()" class="uk-button uk-button-primary">Play</button>
                <input id="playCt" class="uk-input uk-form-width-small" type="text" value="1000">
                <span id="gameCt" class="uk-badge">0</span>
                <div id="tableReset" class="uk-align-right">
                    <label><input id="checkboxToggle" onclick="toggleCards()" class="uk-checkbox" type="checkbox"> Hide Cards</label>
                    <div class="uk-inline uk-margin-left">
                        <span class="uk-form-icon uk-icon">BB:</span>
                        <input id="bbInput" class="uk-input uk-form-width-small" type="text" placeholder="2" value="2">
                    </div>
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-icon">SB:</span>
                        <input id="sbInput" class="uk-input uk-form-width-small" type="text" placeholder="1" value="1">
                    </div>
                    <button id="playReset" onclick="resetTable()" class="uk-button uk-button-default">Reset</button>
                </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="row">


                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                                <i class="bi-person-circle plr-andy"></i>
                                            </div>
                                        </div> 
                                        <div class="col-7">
                                            <div class="numbers">
                                                <div>
                                                    <p class="card-category">Capacity</p> 
                                                    <h4 class="card-title">105GB</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                                <i class="bi-person-circle plr-brad"></i>
                                            </div>
                                        </div> 
                                        <div class="col-7">
                                            <div class="numbers">
                                                <div>
                                                    <p class="card-category">Capacity</p> 
                                                    <h4 class="card-title">105GB</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                                <i class="bi-person-circle plr-chad"></i>
                                            </div>
                                        </div> 
                                        <div class="col-7">
                                            <div class="numbers">
                                                <div>
                                                    <p class="card-category">Capacity</p> 
                                                    <h4 class="card-title">105GB</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                                <i class="bi-person-circle plr-dave"></i>
                                            </div>
                                        </div> 
                                        <div class="col-7">
                                            <div class="numbers">
                                                <div>
                                                    <p class="card-category">Capacity</p> 
                                                    <h4 class="card-title">105GB</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                                <i class="bi-person-circle plr-eric"></i>
                                            </div>
                                        </div> 
                                        <div class="col-7">
                                            <div class="numbers">
                                                <div>
                                                    <p class="card-category">Capacity</p> 
                                                    <h4 class="card-title">105GB</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                                <i class="bi-person-circle plr-fred"></i>
                                            </div>
                                        </div> 
                                        <div class="col-7">
                                            <div class="numbers">
                                                <div>
                                                    <p class="card-category">Capacity</p> 
                                                    <h4 class="card-title">105GB</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>


                    </div>

                    <div class="row collapse" id="collapseAndy">
                        <div class="col-md-6 col-xs-12">
                            <div class="card">
                                <div class="card-header plr-bg-andy pb-3">
                                    <h4 class="card-title text-white"><i class="bi bi-sliders"></i> Andy Settings</h4> 
                                </div> 
                                <div class="card-body">
                                    <fieldset class="player-settings">
                                        <div class="mb-3">
                                            <label for="andyRAC" class="form-label">Risk Acceptance</label>
                                            <input type="range" name="ra" class="form-range" value="3" min="1" max="5" step="1" id="andyRAC">
                                        </div>
                                        <div class="mb-3">
                                            <label for="andyAGG" class="form-label">Aggression</label>
                                            <input type="range" name="ag" class="form-range" value="3" min="1" max="5" step="1" id="andyAGG">
                                        </div>
                                        <div class="mb-3">
                                            <label for="andyPAT" class="form-label">Patience</label>
                                            <input type="range" name="pa" class="form-range" value="3" min="1" max="5" step="1" id="andyPAT">
                                        </div>
                                        <div class="mb-3">
                                            <label for="andyPET" class="form-label">Pettiness</label>
                                            <input type="range" name="pe" class="form-range" value="3" min="1" max="5" step="1" id="andyPET">
                                        </div>
                                    </fieldset>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div class="row collapse" id="collapseBrad">
                        <div class="col-md-6 col-xs-12">
                            <div class="card">
                                <div class="card-header plr-bg-brad pb-3">
                                    <h4 class="card-title text-white"><i class="bi bi-sliders"></i> Brad Settings</h4> 
                                </div> 
                                <div class="card-body">
                                    <fieldset class="player-settings">
                                        <div class="mb-3">
                                            <label for="bradRAC" class="form-label">Risk Acceptance</label>
                                            <input type="range" name="ra" class="form-range" value="3" min="1" max="5" step="1" id="bradRAC">
                                        </div>
                                        <div class="mb-3">
                                            <label for="bradAGG" class="form-label">Aggression</label>
                                            <input type="range" name="ag" class="form-range" value="3" min="1" max="5" step="1" id="bradAGG">
                                        </div>
                                        <div class="mb-3">
                                            <label for="bradPAT" class="form-label">Patience</label>
                                            <input type="range" name="pa" class="form-range" value="3" min="1" max="5" step="1" id="bradPAT">
                                        </div>
                                        <div class="mb-3">
                                            <label for="bradPET" class="form-label">Pettiness</label>
                                            <input type="range" name="pe" class="form-range" value="3" min="1" max="5" step="1" id="bradPET">
                                        </div>
                                    </fieldset>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div class="row collapse" id="collapseChad">
                        <div class="col-md-6 col-xs-12">
                            <div class="card">
                                <div class="card-header plr-bg-chad pb-3">
                                    <h4 class="card-title text-white"><i class="bi bi-sliders"></i> Chad Settings</h4> 
                                </div> 
                                <div class="card-body">
                                    <fieldset class="player-settings">
                                        <div class="mb-3">
                                            <label for="chadRAC" class="form-label">Risk Acceptance</label>
                                            <input type="range" name="ra" class="form-range" value="3" min="1" max="5" step="1" id="chadRAC">
                                        </div>
                                        <div class="mb-3">
                                            <label for="chadAGG" class="form-label">Aggression</label>
                                            <input type="range" name="ag" class="form-range" value="3" min="1" max="5" step="1" id="chadAGG">
                                        </div>
                                        <div class="mb-3">
                                            <label for="chadPAT" class="form-label">Patience</label>
                                            <input type="range" name="pa" class="form-range" value="3" min="1" max="5" step="1" id="chadPAT">
                                        </div>
                                        <div class="mb-3">
                                            <label for="chadPET" class="form-label">Pettiness</label>
                                            <input type="range" name="pe" class="form-range" value="3" min="1" max="5" step="1" id="chadPET">
                                        </div>
                                    </fieldset>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div class="row collapse" id="collapseDave">
                        <div class="col-md-6 col-xs-12">
                            <div class="card">
                                <div class="card-header plr-bg-dave pb-3">
                                    <h4 class="card-title text-white"><i class="bi bi-sliders"></i> Dave Settings</h4> 
                                </div> 
                                <div class="card-body">
                                    <fieldset class="player-settings">
                                        <div class="mb-3">
                                            <label for="daveRAC" class="form-label">Risk Acceptance</label>
                                            <input type="range" name="ra" class="form-range" value="3" min="1" max="5" step="1" id="daveRAC">
                                        </div>
                                        <div class="mb-3">
                                            <label for="daveAGG" class="form-label">Aggression</label>
                                            <input type="range" name="ag" class="form-range" value="3" min="1" max="5" step="1" id="daveAGG">
                                        </div>
                                        <div class="mb-3">
                                            <label for="davePAT" class="form-label">Patience</label>
                                            <input type="range" name="pa" class="form-range" value="3" min="1" max="5" step="1" id="davePAT">
                                        </div>
                                        <div class="mb-3">
                                            <label for="davePET" class="form-label">Pettiness</label>
                                            <input type="range" name="pe" class="form-range" value="3" min="1" max="5" step="1" id="davePET">
                                        </div>
                                    </fieldset>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div class="row collapse" id="collapseEric">
                        <div class="col-md-6 col-xs-12">
                            <div class="card">
                                <div class="card-header plr-bg-eric pb-3">
                                    <h4 class="card-title text-white"><i class="bi bi-sliders"></i> Eric Settings</h4> 
                                </div> 
                                <div class="card-body">
                                    <fieldset class="player-settings">
                                        <div class="mb-3">
                                            <label for="ericRAC" class="form-label">Risk Acceptance</label>
                                            <input type="range" name="ra" class="form-range" value="3" min="1" max="5" step="1" id="ericRAC">
                                        </div>
                                        <div class="mb-3">
                                            <label for="ericAGG" class="form-label">Aggression</label>
                                            <input type="range" name="ag" class="form-range" value="3" min="1" max="5" step="1" id="ericAGG">
                                        </div>
                                        <div class="mb-3">
                                            <label for="ericPAT" class="form-label">Patience</label>
                                            <input type="range" name="pa" class="form-range" value="3" min="1" max="5" step="1" id="ericPAT">
                                        </div>
                                        <div class="mb-3">
                                            <label for="ericPET" class="form-label">Pettiness</label>
                                            <input type="range" name="pe" class="form-range" value="3" min="1" max="5" step="1" id="ericPET">
                                        </div>
                                    </fieldset>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div class="row collapse" id="collapseFred">
                        <div class="col-md-6 col-xs-12">
                            <div class="card">
                                <div class="card-header plr-bg-fred pb-3">
                                    <h4 class="card-title text-white"><i class="bi bi-sliders"></i> Fred Settings</h4> 
                                </div> 
                                <div class="card-body">
                                    <fieldset class="player-settings">
                                        <div class="mb-3">
                                            <label for="fredRAC" class="form-label">Risk Acceptance</label>
                                            <input type="range" name="ra" class="form-range" value="3" min="1" max="5" step="1" id="fredRAC">
                                        </div>
                                        <div class="mb-3">
                                            <label for="fredAGG" class="form-label">Aggression</label>
                                            <input type="range" name="ag" class="form-range" value="3" min="1" max="5" step="1" id="fredAGG">
                                        </div>
                                        <div class="mb-3">
                                            <label for="fredPAT" class="form-label">Patience</label>
                                            <input type="range" name="pa" class="form-range" value="3" min="1" max="5" step="1" id="fredPAT">
                                        </div>
                                        <div class="mb-3">
                                            <label for="fredPET" class="form-label">Pettiness</label>
                                            <input type="range" name="pe" class="form-range" value="3" min="1" max="5" step="1" id="fredPET">
                                        </div>
                                    </fieldset>
                                </div> 
                            
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Table Actions</h4> 
                                    <p class="card-category">Last Campaign Performance</p>
                                </div> 
                                <div class="card-body">
                                    <table id="playTable"></table>
                                    <div class="ct-chart">
                                        <div class="row justify-content-center">
                                            <div class="col-4">
                                                <div class="card card-seat">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="icon-big text-center">
                                                                    <i class="bi-person-circle plr-andy"></i>
                                                                </div>
                                                            </div> 
                                                            <div class="col-8">
                                                                <div class="table-seat" id="seat1"></div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="card card-seat">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="icon-big text-center">
                                                                    <i class="bi-person-circle plr-brad"></i>
                                                                </div>
                                                            </div> 
                                                            <div class="col-8">
                                                                <div class="table-seat" id="seat2"></div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="card card-seat">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="icon-big text-center">
                                                                    <i class="bi-person-circle plr-chad"></i>
                                                                </div>
                                                            </div> 
                                                            <div class="col-8">
                                                                <div class="table-seat" id="seat3"></div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                
                                            </div>
                                            <div class="col-4">
                                                <div class="card card-seat">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="icon-big text-center">
                                                                    <i class="bi-person-circle plr-dave"></i>
                                                                </div>
                                                            </div> 
                                                            <div class="col-8">
                                                                <div class="table-seat" id="seat4"></div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center">
                                            <div class="col-4">
                                                <div class="card card-seat">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="icon-big text-center">
                                                                    <i class="bi-person-circle plr-eric"></i>
                                                                </div>
                                                            </div> 
                                                            <div class="col-8">
                                                                <div class="table-seat" id="seat5"></div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="card card-seat">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="icon-big text-center">
                                                                    <i class="bi-person-circle plr-fred"></i>
                                                                </div>
                                                            </div> 
                                                            <div class="col-8">
                                                                <div class="table-seat" id="seat6"></div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                </div>
                                            </div>
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
                                    <p class="card-category">24 Hours performance</p>
                                </div> 
                                <div class="card-body">
                                    <div class="ct-chart">
                                        
                                    </div>
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
                                    <p class="card-category">24 Hours performance</p>
                                </div> 
                                <div class="card-body">
                                    <div class="ct-chart">
                                        
                                    </div>
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
export default {}
</script>
<style>
</style>