var creepActions = require('creep.actions');

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var controller = creep.room.controller;
        if (creep.upgradeController(controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(controller);
        }
    }
};

module.exports = roleUpgrader;