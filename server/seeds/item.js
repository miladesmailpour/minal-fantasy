const healthPotionData = {
  name: "Health Potion",
  description:
    "A standard health potion, never leave home without it. Restores 20 HP.",
  effect: {
    stat: "hp",
    value: 20,
  },
};

const manaPotionData = {
  name: "Mana Potion",
  description: "A standard mana potion, tastes like blue.  Restores 20 MP.",
  effect: {
    stat: "mp",
    value: 20,
  },
};

const itemData = [healthPotionData, manaPotionData];

module.exports = itemData;
