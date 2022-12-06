const equip = document.getElementById("equip");
const mainHeadLine = document.getElementById("mainHeadLine");
const draezlyrImage = document.getElementById("draezlyrImage");
const aboutdraezlyr = document.getElementById("aboutdraezlyr");
const heroIdle = document.getElementById("heroIdle");
const heroRun = document.getElementById("heroRun");
const heroAttack = document.getElementById("heroAttack");
const yourHP = document.getElementById("yourHP");
const enemy1HP = document.getElementById("enemy1HP");
const backButton = document.getElementById("backButton");
const backButton2 = document.getElementById("backButton2");
const enemy1 = document.getElementById("enemy1");
const surtur = document.getElementById("surtur");
const kingOfHeaven = document.getElementById("kingOfHeaven");
const gameover = document.getElementById("gameover");
const info = document.getElementById("info");
const merchant = document.getElementById("merchant");
const shottingRange = document.getElementById("shotRange");
const shotRangeContainer = document.getElementById("shotRangeContainer");
const portals = document.getElementById("portals");
const portalsWarning = document.getElementById("portalsWarning");
const portalsWarningContinue = document.getElementById("portalsWarningContinue");
const twoPortals = document.getElementById("twoPortals");
const thehell = document.getElementById("thehell");
const hell = document.getElementById("hell");
const theheaven = document.getElementById("theheaven");
const heaven = document.getElementById("heaven");
const backButtonProblem = document.getElementById("backButtonProblem");
const merchantOffers = document.getElementById("merchantOffers");
const practiseRound = document.getElementById("practiseRound");
const round = document.getElementById("round");
const logo = document.getElementById("logo");

const upgradeHealth = document.getElementById("upgradeHealth");
const upgradeDamage = document.getElementById("upgradeDamage");
const upgradeRegeneration = document.getElementById("upgradeRegeneration");
const xp = document.getElementById("xp");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

musicButton.onclick = () => {
    music.src = "https://www.youtube.com/embed/_k98FiylD2M?autoplay=1&loop=1";
    musicButton.style.transform = "scale(1.2)";
    musicButton.style.color = "#333";
    musicButton.style.backgroundColor = "white";
}
musicButton.onmouseover = () => {
    music.src = "";
    musicButton.style.color = "white";
    musicButton.style.backgroundColor = "#333";
    musicButton.style.transform = "none";
}


let heroMove = 30;
let heroMoveTop = 250;
let heroMoveLeft = 100;
let basicHP = 50;
let enemyBasicHP = 5;
let regeneration = 1;
let damageUP = 0;
let damage = 5;
let xpPrice = 40;
let xpPriceIncrease = 0;
let xpIncrease = 10;
let yourXP = -10;
let damageFromEnemy = 1;

let roundIncrease = -1;


if (yourXP >= 30) {
    merchant.style.display = "block";
} else {
    merchant.style.display = "none";
}
if (yourXP >= 60) {
    shottingRange.style.display = "block";
} else {
    shottingRange.style.display = "none";
}


//if(yourXP < xpPrice){
//   upgradeHealth.style.display = "none";
//  upgradeDamage.style.display = "none";
// upgradeRegeneration.style.display = "none";
//}else{
//  upgradeHealth.style.display = "block";
//  upgradeDamage.style.display = "block";
// upgradeRegeneration.style.display = "block";
//}

window.onload = () => {
    clearInterval(myInterval);
}

upgradeHealth.onclick = () => {
    basicHP += 0;
    yourXP -= xpPrice;
    xpPrice += xpPriceIncrease;
    heroAttack.style.animation = "rune 1s infinite alternate linear";
    heroIdle.style.animation = "rune 1s infinite alternate linear";
    xp.innerHTML = `your current xp: ${yourXP}`;
    if (basicHP += 10) {
        upgradeHealth.style.display = "none";
    }
    if (yourXP <= 0) {
        upgradeHealth.style.display = "none";
    } else {
        upgradeHealth.style.display = "block";
    }
    equip.style.display = "block";
    merchant.style.display = "none";
    shottingRange.style.display = "none";
    
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/gif.gif)";
    merchantOffers.style.display = "none";
    yourHP.style.display = "none";
    backButtonProblem.style.opacity = "1";
    enemy1.style.display = "none";
    gameover.style.display = "none";
    info.style.display = "none";
    enemy1HP.innerText = enemyBasicHP;
    upgradeHealth.style.display = "block";
    upgradeDamage.style.display = "block";
    upgradeRegeneration.style.display = "block";
    yourHP.innerText = basicHP;
    round.style.display = "none";
    enemy1HP.style.display = "none";
    document.body.style.backgroundColor = "black";
    document.body.style.borderLeft = "5px solid rgba(137, 43, 226, 0.71)";
    document.body.style.borderRight = "5px solid rgba(137, 43, 226, 0.71)";
}
upgradeDamage.onclick = () => {
    damage = 1;
    damage = damageUP;
    damageUP += 10;
    yourXP -= xpPrice;
    heroAttack.style.animation = "rune 1s infinite alternate linear";
    heroIdle.style.animation = "rune 1s infinite alternate linear";
    xp.innerHTML = `your current xp: ${yourXP}`;

    if (damage += 10) {
        upgradeDamage.style.display = "none";
    }
    if (yourXP <= 0) {
        upgradeDamage.style.display = "none";
    } else {
        upgradeDamage.style.display = "block";
    }
    equip.style.display = "block";
    merchant.style.display = "none";
    shottingRange.style.display = "none";
   
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/gif.gif)";
    merchantOffers.style.display = "none";
    yourHP.style.display = "none";
    backButtonProblem.style.opacity = "1";
    enemy1.style.display = "none";
    gameover.style.display = "none";
    info.style.display = "none";
    enemy1HP.innerText = enemyBasicHP;
    upgradeHealth.style.display = "block";
    upgradeDamage.style.display = "block";
    upgradeRegeneration.style.display = "block";
    yourHP.innerText = basicHP;
    round.style.display = "none";
    enemy1HP.style.display = "none";
    document.body.style.backgroundColor = "black";
    document.body.style.borderLeft = "5px solid rgba(137, 43, 226, 0.71)";
    document.body.style.borderRight = "5px solid rgba(137, 43, 226, 0.71)";
}
upgradeRegeneration.onclick = () => {
    regeneration += 10;
    yourXP -= xpPrice;
    xpPrice += xpPriceIncrease;
    heroAttack.style.animation = "rune 1s infinite alternate linear";
    heroIdle.style.animation = "rune 1s infinite alternate linear";
    xp.innerHTML = `your current xp: ${yourXP}`;
    if (regeneration += 10) {
        upgradeRegeneration.style.display = "none";
    }
    if (yourXP <= 0) {
        upgradeRegeneration.style.display = "none";
    } else {
        upgradeRegeneration.style.display = "block";
    }
    equip.style.display = "block";
    merchant.style.display = "none";
    shottingRange.style.display = "none";
   
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/gif.gif)";
    merchantOffers.style.display = "none";
    yourHP.style.display = "none";
    backButtonProblem.style.opacity = "1";
    enemy1.style.display = "none";
    gameover.style.display = "none";
    info.style.display = "none";
    enemy1HP.innerText = enemyBasicHP;
    upgradeHealth.style.display = "block";
    upgradeDamage.style.display = "block";
    upgradeRegeneration.style.display = "block";
    yourHP.innerText = basicHP;
    round.style.display = "none";
    enemy1HP.style.display = "none";
    document.body.style.backgroundColor = "black";
    document.body.style.borderLeft = "5px solid rgba(137, 43, 226, 0.71)";
    document.body.style.borderRight = "5px solid rgba(137, 43, 226, 0.71)";
}

enemy1.onmousedown = () => {
    enemy1.style.right = "525px";
    if (enemy1HP.innerText <= 0) {
        info.innerText = `information: the enemy has been defeated and you earned + 10 xp`;
        clearInterval(myInterval);
        gameover.style.display = "block";
        heroIdle.style.display = "none";
        yourHP.style.display = "none";
        enemy1HP.style.display = "none";
        enemy1.style.display = "none";
        info.style.fontSize = "50px";
        heroAttack.style.display = "none";
        xp.style.display = "block";
        xp.innerHTML = `your current xp: ${yourXP}`;
        yourXP += xpIncrease;
        info.style.display = "block";
        round.style.display = "none";


    } else if (yourHP.innerText > 0 && enemy1HP.innerText > 0) {
        heroAttack.style.left = "600px";
        enemy1HP.innerText -= damage;

    }

    heroIdle.style.display = "none";
    heroAttack.style.display = "block";
}
enemy1.onmouseup = () => {
    heroIdle.style.left = "0px";
    heroIdle.style.display = "block";
    heroAttack.style.display = "none";
    enemy1.style.right = "550px";
}
surtur.onmousedown = () => {
    surtur.style.right = "250px";
    if (enemy1HP.innerText <= 0) {
        info.innerText = `information: the enemy has been defeated and you earned + 10 xp`;
        clearInterval(myInterval);
        gameover.style.display = "block";
        heroIdle.style.display = "none";
        yourHP.style.display = "none";
        enemy1HP.style.display = "none";
        surtur.style.display = "none";
        info.style.fontSize = "50px";
        heroAttack.style.display = "none";
        xp.style.display = "block";
        xp.innerHTML = `your current xp: ${yourXP}`;
        yourXP += xpIncrease;
        info.style.display = "block";
        round.style.display = "none";


    } else if (yourHP.innerText > 0 && enemy1HP.innerText > 0) {
        heroAttack.style.left = "600px";
        enemy1HP.innerText -= damage;

    }

    heroIdle.style.display = "none";
    heroAttack.style.display = "block";
}
surtur.onmouseup = () => {
    heroIdle.style.left = "0px";
    heroIdle.style.display = "block";
    heroAttack.style.display = "none";
    surtur.style.right = "275px";
}
kingOfHeaven.onmousedown = () => {

    if (enemy1HP.innerText <= 0) {
        info.innerText = `information: the enemy has been defeated and you earned + 10 xp`;
        clearInterval(myInterval);
        gameover.style.display = "block";
        heroIdle.style.display = "none";
        yourHP.style.display = "none";
        enemy1HP.style.display = "none";
        kingOfHeaven.style.display = "none";
        info.style.fontSize = "50px";
        heroAttack.style.display = "none";
        xp.style.display = "block";
        xp.innerHTML = `your current xp: ${yourXP}`;
        yourXP += xpIncrease;
        info.style.display = "block";
        round.style.display = "none";


    } else if (yourHP.innerText > 0 && enemy1HP.innerText > 0) {
        heroAttack.style.left = "600px";
        enemy1HP.innerText -= damage;

    }

    heroIdle.style.display = "none";
    heroAttack.style.display = "none";
}
kingOfHeaven.onmouseup = () => {
    heroIdle.style.left = "0px";
    heroIdle.style.display = "none";
    heroAttack.style.display = "none";

}

equip.onclick = () => {
    aboutdraezlyr.style.display = "none";
    enemyBasicHP += 10;
    mainHeadLine.style.display = "none";
    draezlyrImage.style.display = "none";
    document.body.style.borderRight = "0px solid transparent";
    document.body.style.borderLeft = "0px solid transparent";
    document.body.style.backgroundImage = "url(./res/img/background.jpg)";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    heroIdle.style.display = "block";
    gameover.style.display = "none";
    heroAttack.style.display = "none";
    yourHP.style.display = "block";
    enemy1HP.innerText = enemyBasicHP;
    yourHP.innerText = basicHP;
    enemy1HP.style.display = "block";
    practiseRound.style.display = "none";
    round.style.display = "block";
    roundIncrease++;
    round.innerText = `ROUND: ${roundIncrease}`;
    enemy1.style.display = "block";
    info.style.display = "none";
    backButtonProblem.style.display = "none";

    const myInterval = setInterval(() => {
        damageFromEnemy++;
        yourHP.innerText -= damageFromEnemy;
        if (yourHP.innerText <= 0) {
            info.innerText = `information: you have died`;
            clearInterval(myInterval);
            gameover.style.display = "block";
            heroIdle.style.display = "none";
            yourHP.style.display = "none";
            enemy1HP.style.display = "none";
            enemy1.style.display = "none";
            info.style.fontSize = "50px";
            info.style.display = "block";
            heroAttack.style.display = "none";
            round.style.display = "none";
            backButton.style.display = "block";
        }
        if (enemy1HP.innerText <= 0) {
            info.innerText = `information: The Impegnir has died and you earned + 10 xp`;
            clearInterval(myInterval);
            gameover.style.display = "block";
            heroIdle.style.display = "none";
            yourHP.style.display = "none";
            enemy1HP.style.display = "none";
            enemy1.style.display = "none";
            info.style.fontSize = "50px";
            info.style.display = "block";
            heroAttack.style.display = "block";
            round.style.display = "none";
            yourXP += 10;
            xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
            backButton.style.display = "block";
        }
    }, 1000);
    if (yourXP >= 30) {
        merchant.style.display = "block";
    } else {
        merchant.style.display = "none";
    }
    if (yourXP >= 60) {
        shottingRange.style.display = "block";
    } else {
        shottingRange.style.display = "none";
    }
    if (practiseRound.style.display = "none") {
        equip.style.marginTop += "30px";
        aboutdraezlyr.style.height = "550px";
    }

}
merchant.onclick = () => {
    aboutdraezlyr.style.display = "none";
    merchantOffers.style.display = "flex"
    mainHeadLine.style.display = "none";
    draezlyrImage.style.display = "none";
    document.body.style.borderRight = "0px solid transparent";
    document.body.style.borderLeft = "0px solid transparent";
    document.body.style.backgroundImage = "url(./res/img/merchant.jpg)";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    heroIdle.style.display = "none";
    heroAttack.style.display = "none";
    yourHP.style.display = "none";
    enemy1HP.style.display = "none";
    backButtonProblem.style.opacity = "0";
    backButton.style.display = "none";
    enemy1.style.display = "none";
    info.style.display = "none";
    clearInterval(myInterval);
}
shottingRange.onclick = () => {
    aboutdraezlyr.style.display = "none";
    merchantOffers.style.display = "none";
    mainHeadLine.style.display = "none";
    draezlyrImage.style.display = "none";
    document.body.style.borderRight = "0px solid transparent";
    document.body.style.borderLeft = "0px solid transparent";
    document.body.style.backgroundImage = "url(./res/img/gif.gif)";
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    heroIdle.style.display = "none";
    heroAttack.style.display = "none";
    yourHP.style.display = "none";
    enemy1HP.style.display = "none";
    backButton.style.display = "block";
    backButtonProblem.style.opacity = "0";
    shotRangeContainer.style.display = "block";
    enemy1.style.display = "none";
    info.style.display = "none";
}
portals.onclick = () => {
    theheaven.style.display = "block";
    heaven.style.display = "block";
    aboutdraezlyr.style.display = "none";
    merchantOffers.style.display = "none"
    mainHeadLine.style.display = "none";
    draezlyrImage.style.display = "none";
    document.body.style.borderRight = "0px solid transparent";
    document.body.style.borderLeft = "0px solid transparent";
    document.body.style.backgroundImage = "url(./res/img/portals.png)";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    heroIdle.style.display = "none";
    heroAttack.style.display = "none";
    yourHP.style.display = "none";
    enemy1HP.style.display = "none";
    backButtonProblem.style.opacity = "0";
    backButton.style.display = "block";
    enemy1.style.display = "none";
    info.style.display = "none";
    portalsWarningContinue.style.display = "block";


    if (yourXP <= 5) {
        portalsWarning.style.display = "block";
        twoPortals.style.display = "none";
    } else {
        portalsWarning.style.display = "none";
        twoPortals.style.display = "block";
    }
}
thehell.onmouseover = () => {
    hell.style.color = "#F11514";
    hell.style.transform = "scale(2)";
    hell.style.transition = "0.5s";
    thehell.style.transform = "scale(0.4)";
}
theheaven.onmouseover = () => {
    heaven.style.color = "#bdb643";
    heaven.style.transform = "scale(2)";
    heaven.style.transition = "0.5s";
    theheaven.style.transform = "scale(0.4)";
}
thehell.onmouseout = () => {
    hell.style.color = "white";
    hell.style.transform = "none";
    hell.style.transition = "0.5s";
    thehell.style.transform = "scale(0.3)";
}
theheaven.onmouseout = () => {
    heaven.style.color = "white";
    heaven.style.transform = "none";
    heaven.style.transition = "0.5s";
    theheaven.style.transform = "scale(0.3)";
}
thehell.onclick = () => {
    aboutdraezlyr.style.display = "none";
    enemyBasicHP += 10;
    mainHeadLine.style.display = "none";
    draezlyrImage.style.display = "none";
    document.body.style.borderRight = "0px solid transparent";
    document.body.style.borderLeft = "0px solid transparent";
    document.body.style.backgroundImage = "url(./res/img/hellBackground.jpg)";
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundPosition = "bottom";
    document.body.style.backgroundRepeat = "no-repeat";
    enemy1.style.display = "none";
    surtur.style.display = "block";
    heroIdle.style.display = "block";
    gameover.style.display = "none";
    heroAttack.style.display = "none";
    yourHP.style.display = "block";
    enemy1HP.innerText = enemyBasicHP;
    yourHP.innerText = basicHP;
    enemy1HP.style.display = "block";
    practiseRound.style.display = "none";
    enemy1HP.innerHTML = 500;
    info.style.display = "none";
    backButtonProblem.style.display = "none";
    twoPortals.style.display = "none";

    backButton.style.display = "none";




    const myInterval = setInterval(() => {
        damageFromEnemy++;
        yourHP.innerText -= damageFromEnemy;
        if (yourHP.innerText <= 0) {
            info.innerText = `information: you have died`;
            clearInterval(myInterval);
            gameover.style.display = "block";
            heroIdle.style.display = "none";
            yourHP.style.display = "none";
            enemy1HP.style.display = "none";
            enemy1.style.display = "none";
            surtur.style.display = "none";
            info.style.fontSize = "50px";
            info.style.display = "block";
            heroAttack.style.display = "none";
            round.style.display = "none";
            backButton.style.display = "block";
        }
        if (enemy1HP.innerText <= 0) {
            info.innerText = `information: Surtur has died and you earned + 500 xp`;
            clearInterval(myInterval);
            gameover.style.display = "block";
            heroIdle.style.display = "none";
            yourHP.style.display = "none";
            enemy1HP.style.display = "none";
            enemy1.style.display = "none";
            surtur.style.display = "none";
            info.style.fontSize = "50px";
            info.style.display = "block";
            heroAttack.style.display = "block";
            round.style.display = "none";
            yourXP += 500;
            damage += 50;
            basicHP += 50;
            xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
            backButton.style.display = "block";
            heroAttack.src = "./res/img/helll.hero.attack.png";
            heroIdle.src = "./res/img/hell.hero.idle.png";
            thehell.style.left = "-1000px";
            hell.style.transform = "scale(1.5)";
            hell.style.left = "300px";
            hell.style.position = "absolute";
            theheaven.style.display = "none";
            heaven.style.display = "none";
            hell.style.display = "block";
            hell.innerText = `THE HELL IS COMPLETED`;
            draezlyrImage.src = `./res/img/hell.draezlyr.png`;
            draezlyrImage.style.animation = "powerOfHellDraezlyr 1s infinite alternate linear";
            equip.style.backgroundColor = "#F11514";
            yourHP.style.color = "#F11514";
            enemy1HP.style.color = "#F11514";
            backButton.style.backgroundColor = "#F11514";
            xp.style.color = "#F11514";
            logo.style.color = "#F11514";
            logo.style.textShadow = "1px 1px 2px rgb(255, 255, 255), 0 0 1em #F11514, 0 0 0.2em #F11514";
            musicButton.style.backgroundColor = "#F11514";
            twoPortals.style.display = "block";
            merchant.style.backgroundColor = "#F11514";
                shottingRange.style.backgroundColor = "#F11514";
                backButtonProblem.style.border = "5px solid #F11514";
                document.body.style.borderLeft = "5px solid #F11514";
                document.body.style.borderRight = "5px solid #F11514";

        }
    }, 1000);
    if (yourXP >= 30) {
        merchant.style.display = "block";
    } else {
        merchant.style.display = "none";
    }
    if (yourXP >= 60) {
        shottingRange.style.display = "block";
    } else {
        shottingRange.style.display = "none";
    }
    if (practiseRound.style.display = "none") {
        equip.style.marginTop += "30px";
        aboutdraezlyr.style.height = "550px";
    }
}

    theheaven.onclick = () => {
        if (yourXP >= 100) {
        aboutdraezlyr.style.display = "none";
        enemyBasicHP += 10;
        mainHeadLine.style.display = "none";
        draezlyrImage.style.display = "none";
        document.body.style.borderRight = "0px solid transparent";
        document.body.style.borderLeft = "0px solid transparent";
        document.body.style.backgroundImage = "url(./res/img/heavenBackground.jpg)";
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        enemy1.style.display = "none";
        surtur.style.display = "none";
        kingOfHeaven.style.display = "block";
        heroIdle.style.display = "none";
        gameover.style.display = "none";
        heroAttack.style.display = "none";
        yourHP.style.display = "block";
        enemy1HP.innerText = enemyBasicHP;
        yourHP.innerText = basicHP;
        enemy1HP.style.display = "block";
        practiseRound.style.display = "none";
        enemy1HP.innerHTML = 2500;
        info.style.display = "none";
        backButtonProblem.style.display = "none";
        twoPortals.style.display = "none";

        backButton.style.display = "none";




        const myInterval = setInterval(() => {
            damageFromEnemy++;
            yourHP.innerText -= damageFromEnemy;
            if (yourHP.innerText <= 0) {
                info.innerText = `information: you have died`;
                clearInterval(myInterval);
                gameover.style.display = "block";
                heroIdle.style.display = "none";
                yourHP.style.display = "none";
                enemy1HP.style.display = "none";
                enemy1.style.display = "none";
                surtur.style.display = "none";
                kingOfHeaven.style.display = "none";
                info.style.fontSize = "50px";
                info.style.display = "block";
                heroAttack.style.display = "none";
                round.style.display = "none";
                backButton.style.display = "block";
            }
            if (enemy1HP.innerText <= 0) {
                info.innerText = `information: King of the Heaven has died and you earned + 1000 xp`;
                clearInterval(myInterval);
                gameover.style.display = "block";
                heroIdle.style.display = "none";
                yourHP.style.display = "none";
                enemy1HP.style.display = "none";
                enemy1.style.display = "none";
                surtur.style.display = "none";
                kingOfHeaven.style.display = "none";
                info.style.fontSize = "40px";
                info.style.display = "block";
                heroAttack.style.display = "block";
                round.style.display = "none";
                yourXP += 1000;
                damage += 100;
                basicHP += 100;
                xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
                backButton.style.display = "block";
                heroAttack.src = "./res/img/";
                heroIdle.src = "./res/img/";
                thehell.style.left = "-1000px";
                theheaven.style.right = "-2000px";
                heaven.style.transform = "scale(1.5)";
                heaven.style.right = "300px";
                heaven.style.position = "absolute";
                heaven.style.display = "block";
                heaven.style.color = "black";
                info.style.color = "black";
                hell.style.display = "none";
                heaven.innerText = `THE HEAVEN IS COMPLETED`;
                draezlyrImage.src = `./res/img/`;
                draezlyrImage.style.animation = "powerOfDraezlyr 1s infinite alternate linear";
                equip.style.backgroundColor = "#bdb643";
                yourHP.style.color = "#bdb643";
                enemy1HP.style.color = "#bdb643";
                backButton.style.backgroundColor = "#bdb643";
                xp.style.color = "#bdb643";
                logo.style.color = "#bdb643";
                merchant.style.backgroundColor = "#bdb643";
                shottingRange.style.backgroundColor = "#bdb643";
                backButtonProblem.style.border = "5px solid #bdb643";
                document.body.style.borderLeft = "5px solid #bdb643";
                document.body.style.borderRight = "5px solid #bdb643";
                logo.style.textShadow = "1px 1px 2px rgb(255, 255, 255), 0 0 1em #bdb643, 0 0 0.2em #bdb643";
                musicButton.style.backgroundColor = "#bdb643";
                twoPortals.style.display = "none";
                portals.style.display = "none";
                theheaven.style.display = "none";
                thehell.style.display = "none";
              
            }
        }, 1000);
        if (yourXP >= 30) {
            merchant.style.display = "block";
        } else {
            merchant.style.display = "none";
        }
        if (yourXP >= 60) {
            shottingRange.style.display = "block";
        } else {
            shottingRange.style.display = "none";
        }
        if (practiseRound.style.display = "none") {
            equip.style.marginTop += "30px";
            aboutdraezlyr.style.height = "550px";
        }
    }
    }



portalsWarningContinue.onclick = () => {
    portalsWarning.style.display = "none";
    equip.style.display = "block";
    portalsWarning.style.display = "none";
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/heavenBackground.jpg)";
    merchantOffers.style.display = "none";
    yourHP.style.display = "none";
    backButtonProblem.style.opacity = "1";
    enemy1.style.display = "none";
    gameover.style.display = "none";
    info.style.display = "none";
    enemy1HP.innerText = enemyBasicHP;
    upgradeHealth.style.display = "block";
    upgradeDamage.style.display = "block";
    upgradeRegeneration.style.display = "block";
    yourHP.innerText = basicHP;
    round.style.display = "none";
    enemy1HP.style.display = "none";
    document.body.style.backgroundColor = "black";
    document.body.style.borderLeft = "5px solid rgba(137, 43, 226, 0.71)";
    document.body.style.borderRight = "5px solid rgba(137, 43, 226, 0.71)";
    gameover.style.display = "none";
    info.style.display = "none";
    shotRangeContainer.style.display = "none";
    twoPortals.style.display = "none";
}

backButton.onclick = () => {
    equip.style.display = "block";
    twoPortals.style.display = "none";
    portalsWarning.style.display = "none";
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/gif.gif)";
    merchantOffers.style.display = "none";
    yourHP.style.display = "none";
    backButtonProblem.style.opacity = "1";
    enemy1.style.display = "none";
    surtur.style.display = "none";
    gameover.style.display = "none";
    info.style.display = "none";
    info.style.color = "white";
    enemy1HP.innerText = enemyBasicHP;
    upgradeHealth.style.display = "block";
    upgradeDamage.style.display = "block";
    upgradeRegeneration.style.display = "block";
    yourHP.innerText = basicHP;
    round.style.display = "none";
    enemy1HP.style.display = "none";
    document.body.style.backgroundColor = "black";
    gameover.style.display = "none";
    info.style.display = "none";
    shotRangeContainer.style.display = "none";
    clearInterval(myInterval);
    if (yourXP >= 40) {
        merchant.style.display = "block";
    } else {
        merchant.style.display = "none";
    }
    if (yourXP >= 70) {
        shottingRange.style.display = "block";
    } else {
        shottingRange.style.display = "none";
    }

}
window.addEventListener("load", () => {
    heroIdle.style.position = "absolute";
    heroIdle.style.top = "250px";
    heroIdle.style.left = "100px";

});
window.addEventListener("keyup", (e) => {
    console.log(e);
    switch (e.key) {
        case "7", "7", "7", "8": //regeneration
            setInterval(() => {
                yourHP.innerText = basicHP;
                basicHP += regeneration;

            }, 1000);
            break;

    }


});




const squares = document.querySelectorAll(".square");
const target = document.querySelector(".target");

const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let timerId = 0;

//vyhledane funkce random a forEach
function randomSquare() {
    squares.forEach(square => {
        ;
        square.classList.remove("target");
    })

    const randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("target");

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener("mouseover", (k) => {
        console.log(k);

        if (square.id == hitPosition) {
            result += 10;
            score.innerHTML = result;
            hitPosition = 0;
            yourXP += 10;
            xp.innerHTML = `your current xp: ${yourXP}`;
        }
    })
})

function movetarget() {
    timerId = setInterval(randomSquare, 500);
}

movetarget();

