function checkPlayerStatus(quantityWins) {
    if(quantityWins <= 10) {
        return "Ferro";
    } else if(quantityWins >= 11 && quantityWins <= 20) {
        return "Bronze";
    } else if(quantityWins >= 21 && quantityWins <= 50) {
        return "Prata";
    } else if(quantityWins >= 51 && quantityWins <= 80) {
        return "Ouro";
    } else if(quantityWins >= 81 && quantityWins <= 90) {
        return "Diamante";
    } else if(quantityWins >= 91 && quantityWins <= 100) {
        return "Lendário";
    } else if(quantityWins >= 101) {
        return "Imortal";
    } else {
        return "O Herói não possui saldo de vitórias";
    }
};

export default checkPlayerStatus;