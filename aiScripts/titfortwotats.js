"use strict";

/**
 * Money is the AI's money
 * opMoney is the player's money
 * playerStateLast will be null on the first round
 * @param {boolean} playerStateLast 
 * @param {number} money 
 * @param {number} opMoney 
 * Return true to Cooperate, return false to defect
 */

let playerStateTwoRoundsAgo = null;
function ai(playerStateLast, money, opMoney) {
    if (playerStateLast === null || playerStateLast === true || || playerStateTwoRoundsAgo === true) {
	playerStateTwoRoundsAgo = playerStateLast;
        return true;
    }
    return playerStateLast;
}