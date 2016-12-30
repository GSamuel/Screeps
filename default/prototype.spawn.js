var run = function () {

	StructureSpawn.prototype.createUpgrader = function () {
		return this.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'upgrader', harvesting: false });
	};

	StructureSpawn.prototype.createTransferer = function () {
		return this.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'transferer', harvesting: false });
	};
}


module.exports = run;