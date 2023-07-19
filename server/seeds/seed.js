const mongoose = require("mongoose");
const Class = require("../models/Class");
const Enemy = require("../models/Enemy");
const Item = require("../models/Item");
const db = require("../config/connection");

/*mongoose
  .connect("mongodb://localhost:27017/minal-fantasy-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to the database.");*/
db.once("open", async () => {
  try {
    // Seed Classes
    const classData = require("./class");
    await seedClasses(classData);

    // Seed Enemies
    const enemyData = require("./enemy");
    await seedEnemies(enemyData);

    // Seed Items
    const itemData = require("./item");
    await seedItems(itemData);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
});

async function seedClasses(classData) {
  for (const classItem of classData) {
    const existingClass = await Class.findOne({ name: classItem.name });
    if (existingClass) {
      console.log(`Class ${classItem.name} already exists, skipping...`);
      continue;
    }

    await Class.create(classItem);
    console.log(`Class ${classItem.name} seeded.`);
  }
}

async function seedEnemies(enemyData) {
  for (const enemyItem of enemyData) {
    const existingEnemy = await Enemy.findOne({ name: enemyItem.name });
    if (existingEnemy) {
      console.log(`Enemy ${enemyItem.name} already exists, skipping...`);
      continue;
    }

    await Enemy.create(enemyItem);
    console.log(`Enemy ${enemyItem.name} seeded.`);
  }
}

async function seedItems(itemData) {
  for (const item of itemData) {
    const existingItem = await Item.findOne({ name: item.name });
    if (existingItem) {
      console.log(`Item ${item.name} already exists, skipping...`);
      continue;
    }

    await Item.create(item);
    console.log(`Item ${item.name} seeded.`);
  }
}
