const npcName = [
  "Aldwyn",
  "Jaime",
  "Loras",
  "Tirian",
  "Gregor",
  "Arwen",
  "Sirius",
  "Theon",
  "Shasta",
  "Daario",
  "Jeoth",
  "Immaril",
  "Eriator",
  "Bronn",
  "Finn",
  "Cullen",
  "Artemis",
  "Willow",
  "Oberyn",
  "Rool"
]

const npcSpecies = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Halfling",
  "Half-Orc",
  "Human",
  "Tiefling",
  "Aarakocra",
  "Genasi",
  "Aasimar",
  "Kenku",
  "Tortle",
  "Changeling",
  "Warforged"
]

export const npcClass = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
  "Artificer"
]

const npcAlignment = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil"
]
const npcAppearance = [
  "Distinctive jewelry",
  "Piercings",
  "Flamboyant or outlandish clothes",
  "Formal, clean clothes",
  "Ragged, dirty clothes",
  "Pronounced scar",
  "Missing teeth",
  "Missing fingers",
  "Unusual eye color(s)",
  "Tattoos",
  "Birthmark",
  "Unusual skin color",
  "Bald",
  "Braided beard or hair",
  "Unusual hair color",
  "Nervous eye twitch",
  "Distinctive nose",
  "Distincitive posture",
  "Exceptionally beautiful",
  "Exceptionally ugly"
]

const npcAbility = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma"
]

const npcBehavior = [
  "Argumentative",
  "Arrogant",
  "Blustering",
  "Rude",
  "Curious",
  "Friendly",
  "Honest",
  "Hot-tempered",
  "Irritable",
  "Ponderous",
  "Quiet",
  "Suspicious"
]

const npcPlotKey = [
  "Knows the location of the players' goal",
  "Works for the BBEG",
  "Was the last to see the victim",
  "Knows the lost ingredient to a sought after recipe",
  "Wants to employ the players",
  "Wants to mislead the players",
  "Possesses a rare item",
  "Needs to be rescued",
  "Follows the players as a hanger-on",
  "Holds a piece of information about a player's background",
  "Tries to recruit the players to a faction",
  "Challenges the players to a game of skill or might"
]

export const getRandomFromArray = arr => {
  return arr[ Math.floor( Math.random() * arr.length )]
}


export const random_npcs = []

for (let i = 0; i < 50; i++) {
  const randomNpc = {
    name: getRandomFromArray( npcName ),
    species: getRandomFromArray( npcSpecies ),
    npc_class: getRandomFromArray( npcClass ),
    alignment: getRandomFromArray( npcAlignment ),
    appearance: getRandomFromArray( npcAppearance),
    strong_ability: getRandomFromArray( npcAbility ),
    weak_ability: getRandomFromArray( npcAbility ),
    behavior: getRandomFromArray( npcBehavior),
    plot_key: getRandomFromArray( npcPlotKey )
  }
  random_npcs.push(randomNpc)
}
