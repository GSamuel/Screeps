var creepActions = require('creep.actions');
var roleTransferer = require('role.transferer')
var roleUpgrader = require('role.upgrader')

var roleWorker = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(!creep.memory.harvesting && creep.carry.energy == 0) {
            creep.memory.harvesting = true;
            creep.say('harvesting');
        }
        if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
            creep.memory.harvesting = false;
            creep.say(creep.memory.role);
        }

        if (creep.memory.harvesting) {
            creepActions.harvest(creep);
        }
        else {
            if (creep.memory.role == 'transferer') {
                roleTransferer.run(creep);
            } else if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
        }
    }
};

module.exports = roleWorker;