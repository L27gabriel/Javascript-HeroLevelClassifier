const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome do herói: ", (heroName) => {
  rl.question("Digite a quantidade (XP): ", (heroXpInput) => {
    const heroXp = parseInt(heroXpInput);
    let heroLevel;

    if (heroXp < 1000) {
      heroLevel = "Ferro";
    } else if (heroXp >= 1001 && heroXp <= 2000) {
      heroLevel = "Bronze";
    } else if (heroXp >= 2001 && heroXp <= 5000) {
      heroLevel = "Prata";
    } else if (heroXp >= 6001 && heroXp <= 7000) {
      heroLevel = "Ouro";
    } else if (heroXp >= 7001 && heroXp <= 8000) {
      heroLevel = "Platina";
    } else if (heroXp >= 8001 && heroXp <= 9000) {
      heroLevel = "Ascendente";
    } else if (heroXp >= 9001 && heroXp <= 10000) {
      heroLevel = "Imortal";
    } else {
      heroLevel = "Radiante";
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
    rl.close();
  });
});
