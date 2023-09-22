let vitoria
let derrota

ranking(150,2)

if (ranking <= 10){
    console.log(`O Herói tem de saldo de ${ranking} e está no nível Ferro`)
} else if (ranking >= 11 && ranking <=20){
    console.log(`O Herói tem de saldo de ${ranking} e está no nível Bronze`)
} else if (ranking >= 21 && ranking <=50){
    console.log(`O Herói tem de saldo de ${ranking} e está no nível Prata`)
} else if (ranking >= 51 && ranking <=80){
    console.log(`O Herói tem de saldo de ${ranking} e está no nível Ouro`)
} else if (ranking >= 81 && ranking <=90){
    console.log(`O Herói tem de saldo de ${ranking} e está no nível Diamante`)
} else if (ranking >= 91 && ranking <=100){
    console.log(`O Herói tem de saldo de ${ranking} e está no nível Lendário`)
} else if (ranking >= 101){
    console.log(`O Herói tem de saldo de ${ranking} e está no nível Imortal`)
}


function ranking (vitoria, derrota) {
    ranking = vitoria - derrota
    return ranking
}

