require('prototype.spawn')();

var utils = require('utils');

var roleWorker = require('role.worker');

var updateCreeps = function () {
    for (let creepName in Game.creeps) {
        roleWorker.run(Game.creeps[creepName]);
    }
}

var updateSpawns = function () {
    for (let spawnName in Game.spawns) {
        updateSpawn(Game.spawns[spawnName]);
    }
}

var updateSpawn = function (spawn) {

    var minimumTransfererCount = 6;

    var transfererCount = _.filter(Game.creeps, (c) => c.memory.role == 'transferer').length;
    var creepName = undefined;

    if (transfererCount < minimumTransfererCount) {
        creepName = spawn.createTransferer();
    } else {
        creepName = spawn.createUpgrader();
    }

    if (!(creepName < 0)) {
        console.log(spawn.name + ": Spawning creep " + creepName);
        console.log("role: " + Game.creeps[creepName].memory.role);
    }
}

module.exports.loop = function () {
    utils.cleanupUnusedMemory();
    updateCreeps();
    updateSpawns();
}