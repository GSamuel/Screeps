var creepActions = require('creep.actions');

var roleTransferer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var targets = creep.room.find(FIND_MY_SPAWNS);
        if (targets.length > 0) {
            if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }
};

module.exports = roleTransferer;