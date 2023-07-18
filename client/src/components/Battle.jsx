import React, { useState } from "react";

const calculateAttackDamage = (playerAttacker, playerDefender, enemyAttacker, enemyDefender) => {

    const playerAttackerStr = playerAttacker.class.str;
    const playerDefenderDef = playerDefender.class.def;
    const enemyAttackerStr = enemyAttacker.str;
    const enemyDefenderDef = enemyDefender.def;

    if (isPlayerAttack) {
      damage = playerAttackerStr - enemyDefenderDef / 2;
    } else {
      damage = enemyAttackerStr - playerDefenderDef / 3;
    }

    if (playerAttacker.class.agi > enemyAttacker.agi) {
        const playerDamageToApply = Math.max(1, playerDamage); 
        enemyDefender.hp -= playerDamageToApply;
        const enemyDefeated = enemyDefender.hp <= 0;

    
        const playerDefeated = playerDefender.hp <= 0;

        if (playerDefeated) {
      
            gameOver();
        }
        return { firstAttacker: playerAttacker, secondAttacker: enemyAttacker, firstDamage: playerDamage, secondDamage: enemyDamage };
      } else {
        const enemyDamageToApply = Math.max(1, enemyDamage); 
        playerDefender.hp -= enemyDamageToApply;
        return { firstAttacker: enemyAttacker, secondAttacker: playerAttacker, firstDamage: enemyDamage, secondDamage: playerDamage };
      }
};