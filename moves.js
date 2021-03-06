exports.BattleMoves = {
/*The code for moves
It is in this order:
	- normal moves
	- terrain moves
*/
"absorbmatter":{
	accuracy: true,
	category: "Status",
	desc:"Heals a pokemon and boosts it's defense."
	shortDesc:"Heals a pokemon and boosts it's defense."
	id: "absorbmatter",
	isNonstandard: true,
	isViable: true,
	name: "Absorb Matter",
	pp: 10,
	priority: 0,
	flags: {heal: 1},
	secondary: false,
	heal: [3, 10],
	boosts: {
			def: 1
		},
	target: "self",
	type: "Normal"
},
"abyssalslash": {
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	desc: "Has a higher chance for a critical hit.",
	shortDesc: "High critical hit ratio.",
	id: "abyssalslash",
	isNonstandard: true,
	isViable: true,
	name: "Abyssal Slash",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	critRatio: 2,
	secondary: false,
	target: "normal",
	type: "Water"
},
"airblade": {
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	defensiveCategory: "Special",
	desc: "Deals damage based on the target's Special Defense instead of Defense.",
	shortDesc: "Damages target based on SpD, not Def.",
	id: "airblade",
	isNonstandard: true,
	isViable: true,
	name: "Air Blade",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Flying"
},
"arcticbeam": {
	accuracy: 100,
	basePower: 90,
	category: "Special",
	desc: "Deals damage to one adjacent target with a powerful beam of snow.",
	shortDesc: "Has no extra effects.",
	id: "arcticbeam",
	isNonstandard: true,
	isViable: true,
	name: "Arctic Beam",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Ice"
},
"brutaluppercut": {
	accuracy: 90,
	basePower: 120,
	category: "Physical",
	desc: "If the target lost HP, then the user takes recoil damage equal to 25% of the HP lost by the target, rounded half up, but not less than 1 HP.",
	shortDesc: "Has 25% recoil.",
	id: "brutaluppercut",
	isNonstandard: true,
	isViable: true,
	name: "Brutal Uppercut",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	recoil: [25, 100],
	secondary: false,
	target: "normal",
	type: "Fighting"
},
"buzzer": {
	accuracy: 100,
	basePower: 95,
	category: "Special",
	desc: "Has a 10% chance to flinch the target",
	shortDesc: "10% chance to flinch the target",
	id: "buzzer",
	isNonstandard: true,
	isViable: true,
	name: "Buzzer",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
	secondary: {
		chance: 10,
		volatileStatus: 'flinch'
	},
	target: "normal",
	type: "Bug"
},
"catclaw": {
	accuracy: 100,
	basePower: 50,
	category: "Physical",
	desc: "Claws the opponent.",
	shortDesc: "No additional effect.",
	id: "catclaw",
	isNonstandard: true,
	name: "Cat Claw",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Normal"
},
"concealedpower": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "Deals damage to one adjacent target. This move's type depends on the user's individual values (IVs). Type can be any but Normal.",
	shortDesc: "Varies in type based on the user's IVs.",
	id: "concealedpower",
	isNonstandard: true,
	isViable: true,
	name: "Concealed Power",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	onModifyMove: function (move, pokemon) {
		move.type = pokemon.hpType || 'Dark';
	},
	secondary: false,
	target: "normal",
	type: "Normal"
},
"concealedpowerbug": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Bug",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Bug"
},
"concealedpowerdark": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Dark",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Dark"
},
"concealedpowerdragon": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Dragon",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Dragon"
},
"concealedpowerelectric": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	isViable: true,
	name: "Concealed Power Electric",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Electric"
},
"concealedpowerfighting": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	isViable: true,
	name: "Concealed Power Fighting",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Fighting"
},
"concealedpowerfire": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	isViable: true,
	name: "Concealed Power Fire",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Fire"
},
"concealedpowerflying": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Flying",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Flying"
},
"concealedpowerghost": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Ghost",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Ghost"
},
"concealedpowergrass": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower"
	isViable: true,
	name: "Concealed Power Grass",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Grass"
},
"concealedpowerground": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Ground",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Ground"
},
"concealedpowerice": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	isViable: true,
	name: "Concealed Power Ice",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Ice"
},
"concealedpowerpoison": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Poison",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Poison"
},
"concealedpowerpsychic": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Psychic",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Psychic"
},
"concealedpowerrock": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Rock",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Rock"
},
"concealedpowersteel": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Steel",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Steel"
},
"concealedpowerwater": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Water",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Water"
},
"concealedpowerfairy": {
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	desc: "",
	shortDesc: "",
	id: "concealedpower",
	name: "Concealed Power Fairy",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Fairy"
},
"curingbell": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Every Pokemon in the user's party is cured of its major status problem.",
	shortDesc: "Cures the user's party of all status conditions.",
	id: "curingbell",
	isNonstandard: true,
	isViable: true,
	name: "Curing Bell",
	pp: 10,
	priority: 0,
	flags: {snatch: 1, sound: 1, distance: 1, authentic: 1},
	isSnatchable: true,
	onHit: function (pokemon, source) {
		var side = pokemon.side;
		for (var i = 0; i < side.pokemon.length; i++) {
			side.pokemon.status = '';
		}
			this.add('-cureteam', source, '[from] move: CuringBell');
		},
	target: "allyTeam",
	type: "Normal"
},
"dragonbite": {
	accuracy: 100,
	basePower: 75,
	category: "Physical",
	desc: "Crushes the foe with powerful jaws, and may flinch.",
	shortDesc: "10% chance to flinch",
	id: "dragonbite",
	isNonstandard: true,
	name: "Dragon Bite",
	pp: 10,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: {
		chance: 10,
		volatileStatus: 'flinch'
	},
	isTarget: "normal",
	type: "Dragon"
},
"detonation": {
	accuracy: 100,
	basePower: 250,
	category: "Physical",
	desc: "The user explodes and leaves a huge crater in its place. The user faints.",
	shortDesc: "Hits every Pokemon on the battlefield. The user faints.",
	id: "detonation",
	isNonstandard: true,
	name: "Detonation",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	selfdestruct: true,
	secondary: false,
	target: "allAdjacent",
	type: "Normal"
},
"divebomb": {
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	desc: "If the target lost HP, then the user takes recoil damage equal to 33% of the HP lost by the target, rounded half up, but not less than 1 HP.",
	shortDesc: "Has 33% recoil.",
	id: "divebomb",
	isNonstandard: true,
	isViable: true,
	name: "Dive Bomb",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	recoil: [33, 100],
	secondary: false,
	target: "normal",
	type: "Flying"
},
"dragonslam": {
	accuracy: 100,
	basePower: 90,
	category: "Physical",
	desc: "This move has no addition effects.",
	shortDesc: "Has no additional effects.",
	id: "dragonslam",
	isNonstandard: true,
	isViable: true,
	name: "Dragon Slam",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Dragon"
},
"dragonsmash": {
	accuracy: 90,
	basePower: 140,
	category: "Physical"
	desc: "Lowers the user's Attack by 2 stages",
	shortDesc: "Lowers the user's Atk by 2",
	id: "dragonsmash",
	isNonstandard: true,
	isViable: true,
	name: "Dragon Smash",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	self: {
		boosts: {
			atk: -2
		}
	},
	secondary: false,
	target: "normal",
	type: "Dragon"
},
"frozenfist": {
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	desc: "Deals damage to one adjacent target with a 10% chance to freeze it.",
	shortDesc: "10% chance to freeze the target.",
	id: "frozenfist",
	isNonstandard: true,
	isViable: true,
	name: "Frozen Fist",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
	isContact: true,
	secondary: {
		chance: 10,
		status: 'frz'
	},
	target: "normal",
	type: "Ice"
},
"flashfreeze": {
	accuracy: 100,
	basePower: 40,
	category: "Special",
	desc: "Uses a quick blast of cold air to chill the foe. Priority +1.",
	shortDesc: "Usually goes first.",
	id: "flashfreeze",
	isNonstandard: true,
	isViable: true,
	name: "Flash Freeze",
	pp: 20,
	priority: 1,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Ice"
},
"flingpebbles": {
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	desc: "The user hurls small rocks at the opponent.",
	shortDesc: "Does damage to one adjacent target. No secondary effect",
	id: "flingpebbles",
	isNonstandard: true,
	name: "Fling Pebbles",
	pp: 45,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Rock"
},
"flutter": {
	accuracy: 95,
	basePower: 75,
	category: "Physical",
	desc: "The user flutters around to damage the foe and increase its Speed by one stage.",
	shortDesc: "Does damage and increases Speed.",
	id: "flutter",
	isNonstandard: true,
	isViable: true,
	name: "Flutter",
	pp: 25,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	effects: {
		chance: 100,
		self: {
			boosts: {
				spe: 1
			}
		}
	},
	target: "normal",
	type: "Flying"
},
"forceofnature": {
	accuracy: 100,
	basePower: 100,
	category: "Physical",
	desc: "This move has no additional effects.",
	shortDesc: "Has no additional effects.",
	id: "forceofnature",
	isNonstandard: true,
	isViable: true,
	name: "Force Of Nature",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "allAdjacentFoes",
	type: "Ground"
},
"healthorbs": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "The user surrounds its side of the field with health-restoring orbs that heal allies switching into battle. The amount of HP healed is based upon weakness to Psychic-type attacks.",
	shortDesc: "The user surrounds their side of the field with healing orbs. Health restored depends on weakness to Psychic.",
	id: "healthorbs",
	isNonstandard: true,
	isViable: true,
	name: "Health Orbs",
	pp: 20,
	priority: 0,
	sideCondition: 'healthorbs',
	effect: {
		// this is a side condition
		onStart: function (side) {
			this.add('-sidestart', side, 'move: Health Orbs');
		},
		onSwitchIn: function (pokemon) {
			var typeMod = this.clampIntRange(this.getEffectiveness('Psychic', pokemon), -6, 6);
			this.heal(pokemon.maxhp * Math.pow(2, typeMod) / 8);
		}
	},
	secondary: false,
	target: "allySide",
	type: "Psychic"
},
"hivehum": {
	accuracy: 100,
	basePower: 60,
	category: "Special",
	desc: "Has a 70% chance to lower the targets Special Defense one stage.",
	shortDesc: "70% chance to lower the targets SpD.",
	id: "hivehum",
	isNonstandard: true,
	name: "Hive Hum",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
	secondary: {
		chance: 70,
		boosts: {
			spd: -1
		}
	},
	target: "allAdjacentFoe",
	type: "Bug"
},
"hornslam": {
	accuracy: 100,
	basePower: 100,
	category: "Physical",
	desc: "This move has no additional effects",
	shortDesc: "Has no additional effecys",
	id: "hornslam",
	isNonstandard: true,
	isViable: true,
	name: "Horn Slam",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Bug"
},
"icystalagmites": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "The user lays a trap of levitating pillars of ice around the opposing team. Factors Ice weakness.",
	shortDesc: "Hurts foes on switch-in. Factors Ice weakness.",
	id: "icystalagmites",
	isNonstandard: true,
	isViable: true,
	name: "Icy Stalagmites",
	pp: 20,
	priority: 0,
	flags: {reflectable: 1},
	isBounceable: true,
	sideCondition: 'icystalagmites',
	effect: {
	// this is a side condition
		onStart: function (side) {
		var typeMod = this.clampIntRange(this.getEffectiveness('Ice', pokemon), -6, 6);
		this.heal(pokemon.maxhp * Math.pow(2, typeMod) / 8);
	},
	secondary: false,
	target: "foeSide",
	type: "Ice"
},
"jump": {
	accuracy: 65,
	basePower: 60,
	category: "Physical",
	desc: "Deals damage to one adjacent or non-adjacent target. This attack charges on the first turn and strikes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thunder, and Twister. The user cannot make a move between turns. If the user is holding a Power Herb, the move completes in one turn. This move cannot be used while Gravity is in effect. Makes contact. (Field: Can be used to fly to a previously visited area.)",	shortDesc: "2 turn attack.",
	id: "jump",
	isNonstandard: true,
	name: "Jump",
	pp: 20,
	priority: 0,
	flags: {contact: 1, protect: 1, charge: 1, mirror: 1, gravity: 1, distance: 1},
	isContact: true,
	isTwoTurnMove: true,
	onTry: function (attacker, defender, move) {
		if (attacker.removeVolatile(move.id)) {
			return;
		}
		this.add('-prepare', attacker, move.name, defender);
		if (!this.runEvent('ChargeMove', attacker, defender, move)) {
			this.add('-anim', attacker, move.name, defender);
			return;
		}
		attacker.addVolatile('twoturnmove', defender);
		return null;
	},
	effect: {
		duration: 2,
		onAccuracy: function (accuracy, target, source, move) {
			if (move.id === 'gust' || move.id === 'twister') {
				return;
			}
			if (move.id === 'skyuppercut' || move.id === 'thunder' || move.id === 'hurricane' || move.id === 'smackdown' || move.id === 'thousandarrows' || move.id === 'helpinghand') {
				return;
			}
			if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
				return;
			}
			return 0;
		},
		onSourceBasePower: function (basePower, target, source, move) {
			if (move.id === 'gust' || move.id === 'twister') {
				return this.chainModify(2);
			}
		}
	},
	secondary: false,
	target: "any",
	type: "Flying"
},
"kineticrock": {
	accuracy: 100,
	basePower: 80,
	category: "Special",
	defensiveCategory: "Physical",
	desc: "Deals damage on the based on the targets Defense instead of Special Defense.",
	shortDesc: "Damages target based on Def, not SpD.",
	id: "kineticrock",
	isNonstandard: true,
	isViable: true,
	name: "Kinetic Rock",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Rock"
},
"kineticslap": {
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	desc: "The user slaps the opponent with a fist of concentrated matter.",
	shortDesc: "Does damage to one adjacent target. No secondary effect",
	id: "kineticslap",
	isNonstandard: true,
	name: "Kinetic Slap",
	pp: 45,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Psychic"
},
"landslide": {
	accuracy: 100,
	basePower: 100,
	category: "Physical",
	desc: "Rocks slide down on the foe with immense force.",
	shortDesc: "No additional effect.",
	id: "landslide",
	isNonstandard: true,
	name: "Landslide",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Rock"
},
"leafturn": {
	accuracy: 100,
	basePower: 80,
	category: "Special",
	desc: "If this move is successful and the user has not fainted, the user switches out even if trapped and is replaced immediately by a selected party member. The user does not switch out if there are no party members that have not fainted.",
	shortDesc: "User switches out after damaging the target.",
	id: "leafturn",
	isNonstandard: true,
	isViable: true,
	name: "Leaf Turn",
	pp: 20,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	selfSwitch: true,
	secondary: false,
	target: "normal",
	type: "Grass"
},
"leveldamage": {
	accuracy: 100,
	basePower: 0,
	damage: 'level',
	category: "Special",
	desc: "Deals damage to the target equal to the user's level.",
	shortDesc: "Deals damage equal to the user's level.",
	id: "leveldamage",
	isNonstandard: true,
	isViable: true,
	name: "Level Damage",
	pp: 20,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Normal"
},
"magnify": {
	accuracy: true,
	category: "Status",
	desc: "Raises the user's accuracy by 2 stages.",
	shortDesc: "Boosts the user's accuracy by 2.",
	id: "magnify",
	isNonstandard: true,
	isViable: true,
	name: "Magnify",
	pp: 24,
	priority: 0,
	flags: {snatch: 1},
	isSnatchable: true,
	boosts: {
		acc: 2
	},
	secondary: false,
	target: "self",
	type: "Electric"
},
"metalslam": {
	accuracy: 100,
	basePower: 100,
	category: "Physical",
	desc: "User slams themselves against the opponent.",
	shortDesc: "No secondary effects.",
	id: "metalslam",
	isNonstandard: true,
	name: "Metal Slam",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	isTarget: "normal",
	type: "Steel"
},
"mirrorstriker": {
	accuracy: 100,
	basePower: 95,
	category: "Special",
	desc: "Damage is calculated using the target's Special Attack stat, including stat stage changes. The users ability and item affect the move normally.",
	shortDesc: "Uses targets SpA stat in damage calculation.",
	id: "mirrorstriker",
	isNonstandard: true,
	isViable: true,
	name: "Mirror Striker",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	useTargetOffense: true,
	secondary: false,
	target: "normal",
	type: "Psychic"
},
"mysticwave": {
	accuracy: 100,
	basePower: 100,
	category: "Special",
	desc: "No additional effect.",
	shortDesc: "No additional effect. Hits adjacent foes",
	id: "mysticwave",
	isNonstandard: true,
	isViable: true,
	name: "Mystic Wave",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, sound: 1, authentic: 1},
	isContact: true,
	secondary: false,
	target: "allAdjacentFoes",
	type: "Fairy"
},
"meteorbarrage": {
	accuracy: 100,
	basePower: 25,
	category: "Physical",
	desc: "Hits two to five times. It has a 1/3 chance to hit two to three, and a 1/6 chance to hit four to five times.",
	shortDesc: "Hits 2-5 times in one turn.",
	id: "meteorbarrage",
	isNonstandard: true,
	isViable: true,
	name: "Meteor Barrage",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	multihit: [2, 5],
	secondary: false,
	target: "normal",
	type: "Fairy"
},
"nebulousmist": {
	accuracy: 100,
	basePower: 85,
	category: "Special",
	desc: "The user creates a dense mist that makes it hard for the target to avoid attacks.",
	shortDesc: "Does damage to adjacent target. Lowers evasion by 1 stage.",
	id: "nebulousmist",
	isNonStandard: true,
	name: "Nebulous Mist",
	pp: 10,
	priority: 0,
        flags: {protect: 1, mirror: 1},
	effects: {
		chance: 100
		boost: {
			evasion: -1
			}
	},
	target: "normal",
	type: "Flying"
},
"nymphburst": {
	accuracy: 90,
	basePower: 130,
	category: "Special",
	desc: "Lowers the user's Special Attack by two stages.",
	shortDesc: "Lowers user's SpA by 2 stages",
	id: "nymphburst",
	isNonstandard: true,
	isViable: true,
	name: "Nymph Burst",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	self: {
		boosts: {
			spa: -2
		}
	},
	secondary: false,
	target: "normal",
	type: "Fairy",
},
"pixieblast": {
	accuracy: 100,
	basePower: 80,
	category: "Special",
	desc: "Has a 30% chance to raise the user's Defense by one stage.",
	shortDesc: "30% chance to raise user's Def by 1 stage.",
	id: "pixieblast",
	isNonstandard: true,
	isViable: true,
	name: "Pixie Blast",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 30,
		self: {
			boosts: {
				spd: 1
			}
		}
	},
	target: "normal",
	type: "Fairy"
},
"pixiestorm": {
	num: -13,
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	desc: "Deals damage to one adjacent target. If the target lost HP, the user takes recoil damage equal to 33% that HP, rounded half up, but not less than 1HP. Makes contact.",
	shortDesc: "Has 33% recoil.",
	id: "pixiestorm",
	isNonstandard: true,
	isViable: true,
	name: "Pixie Storm",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	recoil: [33, 100],
	secondary: false,
	target: "normal",
	type: "Fairy"
},
"recharge": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "The user restores 1/2 of its maximum HP, rounded half up.",
	shortDesc: "Heals the user by 50% of its max HP.",
	id: "recharge",
	isNonstandard: true,
	isViable: true,
	name: "Recharge",
	pp: 10,
	priority: 0,
	flags: {snatch: 1, heal: 1},
	isSnatchable: true,
	heal: [1, 2],
	secondary: false,
	target: "self",
	type: "Electric"
},
"regulatorwave": {
	accuracy: 100,
	basePower: 80,
	category: "Special",
	desc: "The user emits a blast of energy that hits multiple foes..",
	shortDesc: "No additional effect. Hits all adjacent foes.",
	id: "regulatorwave",
	isNonstandard: true,
	isViable: true,
	name: "Regulator Wave",
	pp: 20,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "allAdjacentFoes",
	type: "Normal"
},
"rekindle": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "The user restores 1/2 of its maximum HP, rounded half up.",
	shortDesc: "Heals the user by 50% of its max HP.",
	id: "rekindle",
	isNonstandard: true,
	isViable: true,
	name: "Rekindle",
	pp: 10,
	priority: 0,
	flags: {snatch: 1, heal: 1},
	isSnatchable: true,
	heal: [1, 2],
	secondary: false,
	target: "self",
	type: "Fire"
},
"ripple": {
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	desc: "A weak physical water-type attack. This move has a 100% to raise the user's attack by one stage.",
	shortDesc: "Weak physical water-type attack. 100% chance to raise attack by 1.",
	id: "ripple",
	isNonstandard: true,
	isViable: true,
	name: "Ripple",
	pp: 24,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	effects: {
		chance: 100,
		self: {
			boosts: {
				atk: 1
			}
		}
	},
	target: "normal",
	type: "Water"
},
"rocketslam": {
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	desc: "This move will almost always go first.",
	shortDesc: "Will almost always go first.",
	id: "rocketslam",
	isNonstandard: true,
	isViable: true,
	name: "Rocket Slam",
	pp: 20
	priority: 2,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Steel"
},
"shocker": {
	accuracy: 100,
	basePower: 95,
	category: "Physical",
	desc: "The foe is shocked with a powerful thunder attack.",
	shortDesc: "Shocks the foe with a thunder attack.",
	id: "shocker",
	isNonstandard: true,
	isViable: true,
	name: "Shocker",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Electric"
},
"slidingkick": {
	accuracy: 100,
	basePower: 90,
	category: "Physical",
	desc: "Has a 20% chance to flinch the target.",
	shortDesc: "20% chance to flinch the target.",
	id: "slidingkick",
	isNonstandard: true,
	isViable: true,
	name: "Sliding Kick",
	pp: 20,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: {
		chance: 20,
		volatileStatus: 'flinch'
	},
	target: "normal",
	type: "Fighting"
},
"souldrain": {
	accuracy: 100,
	basepower: 75,
	category: "Special",
	desc: "The user recovers 1/2 of the HP lost by the target, rounded half up.",
	shortDesc: "User recovers 50% of damage dealt.",
	id: "souldrain",
	isNonstandard: true,
	isViable: true,
	name: "Soul Drain",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, heal: 1},
	drain: [1, 2],
	secondary: false,
	target: "normal",
	type: "Ghost"
},
"spectralburst": {
	accuracy: 90,
	basePower: 140,
	category: "Special",
	desc: "The user directs a fury of otherworldly energy at the opponent. Harshly lowers the user's Special-Attack.",
	shortDesc: "Lowers the user's Sp. Atk by 2.",
	id: "spectralburst",
	isNonstandard: true,
	isViable: true,
	name: "Spectral Burst",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	effects: {
		self: {
			boosts: {
				spa: -2
			}
		}
	},
	secondary: false,
	target: "normal",
	type: "Ghost"
},
"spring": {
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	desc: "If this move is successful and the user has not fainted, the user switches out even if trapped and is replaced immediately by a selected party member. The user does not switch out if there are no party members that have not fainted.",
	shortDesc: "User switches out after damaging the target.",
	id: "spring",
	isNonstandard: true,
	isViable: true,
	name: "Spring",
	pp: 20,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	selfSwitch: true,
	secondary: false,
	target: "normal",
	type: "Steel"
},
"starsmash": {
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	desc: "Has a 10% chance to raise the user's Defense by one stage.",
	shortDesc: "10% chance to raise user's Def by 1 stage.",
	id: "starsmash",
	isNonstandard: true,
	isViable: true,
	name: "Star Smash",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 10,
		self: {
			boosts: {
				def: 1
			}
		}
	},
	target: "normal",
	type: "Fairy"
},
"stronggust": {
	accuracy: 100,
	basePower: 40,
	category: "Special",
	desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally.",
	shortDesc: "Forces target to switch to a random ally.",
	id: "stronggust",
	isNonstandard: true,
	isViable: true,
	name: "Strong Gust",
	pp: 20,
	priority: -6,
	flags: {protect: 1, mirror: 1},
	forceSwitch: true,
	target: "normal",
	type: "Flying"
},
"swiftswing": {
	accuracy: 100,
	basepower: 40,
	category: "Physical",
	desc: "This move will usually go first.",
	shortDesc: "Will usually go first.",
	id: "swiftswing"
	isNonstandard: true,
	isViable: true,
	name: "Swift Swing",
	pp: 40
	priority: 1,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Bug"
},
"swordslash": {
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	desc: "Slashes with a sword against the foe.",
	shortDesc: "No additional effect.",
	id: "swordslash",
	name: "Sword Slash",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: false,
	secondary: false,
	target: "normal",
	type: "Steel"
},
"syphon": {
	accuracy: 100,
	basePower: 75,
	category: "Physical",
	desc: "The user recovers 1/2 of the HP lost by the target, rounded half up.",
	shortDesc: "The user recovers 50% of the damage dealt",
	id: "syphon",
	isNonstandard: true,
	isViable: true,
	name: "Syphon",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, heal: 1},
	drain: [1, 2],
	secondary: false,
	target: "normal",
	type: "Poison"
},
"tailslam": {
	accuracy: 100,
	basePower: 100,
	category: "Physical",
	desc: "Slams the foe using it/'s powerful tail. Deals damage to one adjacent target. Makes contact.",
	shortDesc: "No additional effect.",
	id: "tailslam",
	isNonstandard: true,
	name: "Tail Slam",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: false,
	target: "normal",
	type: "Normal"
},
"thunderwave": {
	accuracy: 70,
	basePower: 0,
	category: "Status",
	desc: " A strong pulse of light paralyses the opponent.",
	shortDesc: "Paralyzes the target.",
	id: "thunderwave",
	isNonstandard: true,
	isViable: true,
	name: "Thunder Wave",
	pp: 20,
	priority: 0,
	flags: {protect: 1, reflectable: 1, mirror: 1},
	status: 'par',
	affectedByImmunities: true,
	secondary: false,
	target: "normal",
	type: "Electric"
},
"tidalwave": {
	accuracy: 100,
	basePower: 95,
	category: "Special",
	desc: "This move has no additional effect.",
	shortDesc: "Has no additional effect.",
	id: "tidalwave",
	isNonstandard: true,
	isViable: true,
	name: "Tidal Wave",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Water"
},
"tornado": {
	accuracy: 100,
	basePower: 80,
	category: "Special",
	desc: "Has a higher chance for a critical hit.",
	shortDesc: "Has a high critical hit ratio.",
	id: "tornado",
	isNonstandard: true,
	isViable: true,
	name: "Tornado",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	critRatio: 2,
	secondary: false,
	target: "normal",
	type: "Flying"
},
"tornadokick": {
	accuracy: 95,
	basePower: 90,
	category: "Physical",
	desc: "Fires a powerful kick at the opponent that rarely causes the opponent to flinch.",
	shortDesc: "10% chance to flinch the opponent.",
	id: "tornadokick",
	isNonstandard: true,
	name: "Tornado Kick",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	secondary: {
		chance: 10,
		volatileStatus: 'flinch'
	},
	isTarget: "normal",
	type: "Fighting"
},
"tornadopunch": {
	accuracy: 95,
	basePower: 30,
	category: "Physical",
	desc: "Fires a tornado of punches at the opponent.",
	shortDesc: "Hits 2-5 times.",
	id: "tornadopunch",
	isNonstandard: true,
	name: "Tornado Punch",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect 1, mirror: 1, punch: 1},
	isContact: true,
	multiHit: [2, 5],
	secondary: false,
	isTarget: "normal",
	type: "Fighting"
},
"torrentialcrash": {
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	desc: "The user engulfs itself in water and slams the foe. This also damages the user quite a lot.",
	shortDesc: "Has 33% recoil.",
	id: "torrentialcrash",
	isNonstandard: true,
	isViable: true,
	name: "Torrential Crash",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	recoil: [33, 100],
	secondary: false,
	target: "normal",
	type: "Water"
},
"unnaturalslice": {
	accuracy: 100,
	basePower: 90,
	category: "Physical",
	desc: "Deals damage to one adjacent target with a higher chance for a critical hit. Makes contact. Hits Ghost-types for super effective damage.",
	shortDesc: "High critical hit ratio. Hits Ghost-types for super effective damage.",
	id: "unnaturalslice",
	isNonstandard: true,
	isViable: true,
	name: "Unnatural Slice",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	critRatio: 0,
	secondary: false,
	target: "normal",
	type: "Normal"
	getEffectiveness: function (source, target, pokemon) {
		var type = source.type || source;
		var totalTypeMod = 0;
		var types = target.getTypes && target.getTypes() || target.types;
		for (var i = 0; i < types.length; i++) {
			if (!this.data.TypeChart[types]) continue;
			if (types === 'Ghost') {
				totalTypeMod++;
				continue;
			}
			var typeMod = this.data.TypeChart[types].damageTaken[type];
			if (typeMod === 1) { // super-effective
				totalTypeMod++;
			}
			if (typeMod === 2) { // resist
				totalTypeMod--;
			}
		}
		return totalTypeMod;
	}
},
//may not work the way we want
"vampiresbite"{
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	desc: "Drains life from the opponent.",
	shortDesc: "Drains life from the opponent.",
	id: "vampiresbite",
	isNonstandard: true,
	isViable: true,
	name: "Vampire's Bite",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	drain: [100 , 0]
	target: "normal",
	type: "dark"
},
"venomslash": {
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	desc: "The user slashes the foe with corrosive blades, claws, etc. The user receives 25% recoil of the damage dealt.",
	shortDesc: "Has 25% recoil.",
	id: "venomslash",
	isNonstandard: true,
	isViable: true,
	name: "Venom Slash",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	recoil: [25, 100],
	secondary: false,
	target: "normal",
	type: "Poison"
},
"voidbreaker": {
	accuracy: 90,
	basePower: 120,
	category: "Physical",
	desc: "Deals damage to one adjacent or non-adjacent target. If the target lost HP, the user takes recoil damage equal to 33% that HP, rounded half up, but not less than 1HP. Makes contact.",
	shortDesc: "Has 33% recoil.",
	id: "voidbreaker",
	isNonstandard: true,
	isViable: true,
	name: "Void Breaker",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	isContact: true,
	recoil: [33, 100],
	secondary: false,
	target: "any",
	type: "Dark"
},
"weakshock": {
	accuracy: 100,
	basePower: 40,
	category: "Special",
	desc: "The opponent is struck with a weak jolt of electricity.",
	shortDesc: "Does damage to one adjacent target. No secondary effect",
	id: "weakshock",
	isNonstandard: true,
	name: "Weak Shock",
	pp: 45,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: false,
	target: "normal",
	type: "Electric"
},
"wizardfist": {
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	desc: "Deals damage to one adjacent target with a 10% chance to confuse it.",
	shortDesc: "10% chance to confuse the target.",
	id: "wizardfist",
	isNonstandard: true,
	isViable: true,
	name: "Wizard Fist",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
	isContact: true,
	secondary: {
		chance: 10,
		volatileStatus: 'confusion'
	},
	target: "normal",
	type: "Psychic"
},
"wraithfist": {
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	desc: "Deals damage to one adjacent target with a 10% chance to flinch it.",
	shortDesc: "10% chance to flinch the target.",
	id: "wraithfist",
	isNonstandard: true,
	isViable: true,
	name: "Wraith Fist",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
	isContact: true,
	secondary: {
		chance: 10,
		volatileStatus: 'flinch'
	},
	target: "normal",
	type: "Ghost"
},

//Alphabetized Terrain Moves:

"desert": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field a desert. Ground-, Rock-, and Steel-types gain 10% in Defense and Special Defense. Ground-types gain 10% Attack. Flying lose 10% in Speed. Water-type moves become Water/Ground Type. Lasts for 8 turns.",
	shortDesc: "Field becomes a desert. Ground, Rock, and Steel gain 10% in Def and Sp. Def. Ground-types get 10% Atk boosts. Flying-types lose 10% speed. Water moves become Water/Ground. Lasts 8 turns.",
	id: "desert",
	isNonstandard: true,
	isViable: true,
	name: "Desert",
	pp: 8,
	priority: 0,
	flags: {},
	weather: 'Desert',
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Desert', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onTypings: function (pokemon, move, type, typeMod) {
		if (pokemon.type === 'Ground' || pokemon.type === 'Rock' || pokemon.type === 'Steel') {
			boosts: {
				def: 1,
				spd: 1
			}
		} else if (pokemon.type === 'Ground') {
			boosts: {
				atk: 1
			}
		} else if (pokemon.type === 'Flying') {
			boosts: {
				spe: -1
			}
		} else if (move.type === 'Water') {
			return typeMod + this.getEffectiveness('Ground', type);
		}
	},
	secondary: false,
	target: "all",
	type: "Ground"
},
"glacier": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field a glacier. Ice types gain 20% to both defense stats. Water-type moves become Water/Ice-type moves. Lasts for 8 turns.",
	shortDesc: "Field becomes glacier. Ice types get 20% to defense stats. Water moves become Water/Ice. Lasts 8 turns.",
	id: "glacier",
	isNonstandard: true,
	isViable: true,
	name: "Glacier",
	pp: 8,
	priority: 0,
	flags: {},
	weather: 'Glacier',
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Desert', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onEffectiveness: function (typeMod, type, move, pokemon) {
		if (pokemon.type === 'Ice') {
			boosts: {
				def: 2,
				spd: 2
			}
		} else if (move.type === 'Water') {
			return typeMod + this.getEffectiveness('Ice', type);
		}
	},
	secondary: false,
	target: "all",
	type: "Ice"
},
"meadow": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field a meadow. Bug-types gain 10% in Defense and Special Defense. Grass-types gain 25% Attack. Flying gain 10% in Speed. Water-type moves become Water/Grass Type. Lasts for 8 turns.",
	shortDesc: "Field becomes meadow. Bug gain 10% in Def and Sp. Def. Grass-types get 25% Atk. Flying-types gain 10% speed. Water moves become Water/Grass. Lasts 8 turns.",
	id: "meadow",
	isNonstandard: true,
	isViable: true,
	name: "Meadow",
	pp: 8,
	priority: 0,
	flags: {},
	weather: 'Meadow',
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Meadow', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onTypings: function (pokemon, move, type, typeMod) {
		if (pokemon.type === 'Bug') {
			boosts: {
				def: 1,
				spd: 1
			}
		} else if (pokemon.type === 'Grass') {
			boosts: {
				atk: 3
			}
		} else if (pokemon.type === 'Flying') {
			boosts: {
				spe: 1
			}
		} else if (move.type === 'Water') {
			return typeMod + this.getEffectiveness('Grass', type);
		}
	},
	secondary: false,
	target: "all",
	type: "Grass"
},
"ocean": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field an ocean. Water-types gain 10% in Defense and Special Defense. Fire lose 20% in Defense. Lasts for 8 turns.",
	shortDesc: "Field becomes ocean. Water gain 10% in Def and Sp. Def. Fire-types lose 20% Defense. Lasts 8 turns.",
	id: "ocean",
	isNonstandard: true,
	isViable: true,
	name: "Ocean",
	pp: 8,
	priority: 0,
	flags: {},
	weather: 'Ocean',
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Ocean', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onTypings: function (pokemon, move) {
		if (pokemon.type === 'Water') {
			boosts: {
				def: 1,
				spd: 1
			}
		} else if (pokemon.type === 'Fire') {
			boosts: {
				def: -2
			}
		}
	},
	secondary: false,
	target: "all",
	type: "Water"
},
"pollutedlandscape": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field a polluted landscape. Dark-types gain 10% in Defense and Special Defense. Poison-types gain 25% in Special Attack. Water-type moves become Water/Poison Type. Lasts for 8 turns.",
	shortDesc: "Field becomes polluted landscape. Dark gain 10% in Def and Sp. Def. Poison-types get 25% Sp. Atk. Water moves become Water/Poison. Lasts 8 turns.",
	id: "pollutedlandscape",
	isNonstandard: true,
	isViable: true,
	name: "Polluted Landscape",
	pp: 8,
	priority: 0,
	flags: {},
	weather: 'PollutedLandscape',
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Polluted Landscape', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onTypings: function (pokemon, move, type, typeMod) {
		if (pokemon.type === 'Dark') {
			boosts: {
				def: 1,
				spd: 1
			}
		} else if (pokemon.type === 'Poison') {
			boosts: {
				spa: 3
			}
		} else if (move.type === 'Water') {
			return typeMod + this.getEffectiveness('Poison', type);
		}
	},
	secondary: false,
	target: "all",
	type: "Poison"
}
};
