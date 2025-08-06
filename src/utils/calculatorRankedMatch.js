import checkPlayerStatus from "./checkPlayerStatus.js";

function calculatorRankedMatch(numberOfWins, numberOfDefeats) {
    let result = numberOfWins - numberOfDefeats;
    let levelOfPlayer = checkPlayerStatus(result);
    return { result, levelOfPlayer };
};

export default calculatorRankedMatch;