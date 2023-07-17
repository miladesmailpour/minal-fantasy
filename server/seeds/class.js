const knightClassData = {
  name: "Knight",
  lvl: 1,
  hp: 120,
  mp: 75,
  str: 10,
  int: 6,
  def: 9,
  mdef: 5,
  agi: 6,
  sprite: "../assets/sprites/knight/Knight-Sprite64.gif",
};

const wizardClassData = {
  name: "Wizard",
  lvl: 1,
  hp: 100,
  mp: 125,
  str: 7,
  int: 10,
  def: 7,
  mdef: 9,
  agi: 7,
  sprite: "../assets/sprites/wizard/Wizard-Sprite64.gif",
};

const classData = [knightClassData, wizardClassData];

module.exports = classData;
