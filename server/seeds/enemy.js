const demonData = {
  name: "Demon",
  hp: 100,
  str: 8,
  def: 6,
  mdef: 5,
  agi: 5,
  xp: 50,
  sprite: "../assets/sprites/demon/Demon-Sprite64.gif",
};

const undeadTreeData = {
  name: "Undead Tree",
  hp: 100,
  str: 7,
  def: 7,
  mdef: 6,
  agi: 5,
  xp: 50,
  sprite: "../assets/sprites/undeadTree/Undead-Tree-Sprite64.gif",
};

const enemyData = [demonData, undeadTreeData];

module.exports = enemyData;
