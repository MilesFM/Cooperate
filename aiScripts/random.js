/**
 * Money is the AI's money
 * opMoney is the player's money
 * @param {boolean} playerState 
 * @param {number} money 
 * @param {number} opMoney 
 */
function ai(playerState, money, opMoney) {
    return (Math.round(Math.random() * 1) == true ? true : false);
}