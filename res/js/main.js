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

const upgradeHealth = document.getElementById("upgradeHealth");
const upgradeDamage = document.getElementById("upgradeDamage");
const upgradeRegeneration = document.getElementById("upgradeRegeneration");
const xp = document.getElementById("xp");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

musicButton.onclick = () =>{
    music.src = "https://www.youtube.com/embed/_k98FiylD2M?autoplay=1&loop=1";
    musicButton.style.color = "blueviolet";
    musicButton.style.backgroundColor = "white";
}
musicButton.onmouseover = () => {
    music.src = "";
    musicButton.style.color = "white";
    musicButton.style.backgroundColor = "blueviolet";
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
    portals.style.display = "block";
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "none";
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
    damageUP+=10;
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
    portals.style.display = "block";
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "none";
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
    regeneration+=10;
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
    portals.style.display = "block";
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "none";
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
        yourHP.innerText-=damageFromEnemy;
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
            heroAttack.style.display = "block";
            round.style.display = "none";
            backButton.style.display = "block";
        }
       if(enemy1HP.innerText <= 0) {
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
            yourXP+= 10;
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
    if(practiseRound.style.display = "none"){
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
    document.body.style.backgroundImage = "none";
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
  
    
    twoPortals.style.display = "block";
   // if(yourXP <= 500){
   //     portalsWarning.style.display = "block";
 //       twoPortals.style.display = "none";
  //  }else{
  //      portalsWarning.style.display = "none";
  //      twoPortals.style.display = "block";
 //   } 
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
    document.body.style.backgroundImage = "url(./res/img/)";
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
    
    enemy1.style.display = "block";
    enemy1HP.innerHTML = 500;
    info.style.display = "none";
    backButtonProblem.style.display = "none";
    twoPortals.style.display = "none";
    yourHP.style.color = "red";
    enemy1HP.style.color = "red";
    backButton.style.backgroundColor = "red";
    backButton.style.display = "none";
    xp.style.color = "red";


  
    const myInterval = setInterval(() => {
        damageFromEnemy++;
        yourHP.innerText-=damageFromEnemy;
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
            heroAttack.style.display = "block";
            round.style.display = "none";
            backButton.style.display = "block";
        }
       if(enemy1HP.innerText <= 0) {
            info.innerText = `information: Surtur has died and you earned + 10 xp`;
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
            yourXP+= 510; 
            xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
            backButton.style.display = "block";
            heroAttack.src = "./res/img/helll.hero.attack.png";
            heroIdle.src = "./res/img/hell.hero.idle.png";
            thehell.style.display = "none";
            hell.style.display = "block";
            hell.innerText = `THE HELL IS COMPLETED`;
            draezlyrImage.src = `./res/img/hell.draezlyr.png`;
            equip.style.backgroundColor = "red";
            
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
    if(practiseRound.style.display = "none"){
        equip.style.marginTop += "30px";
        aboutdraezlyr.style.height = "550px";
    }
}
portalsWarningContinue.onclick = () => {
    portalsWarning.style.display = "none";
    equip.style.display = "block";
    portalsWarning.style.display = "none";
    portals.style.display = "block";
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "none";
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
    portals.style.display = "block";
    aboutdraezlyr.style.display = "block";
    mainHeadLine.style.display = "block";
    draezlyrImage.style.display = "block";
    backButton.style.display = "none";
    backButtonProblem.style.display = "block";
    heroAttack.style.display = "none";
    heroIdle.style.display = "none";
    document.body.style.backgroundImage = "none";
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
        case "7","7","7","8": //regeneration
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
  squares.forEach(square => {;
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
      result+=10;
      score.innerHTML = result;
      hitPosition = 0;
      yourXP+=10;
      xp.innerHTML = `your current xp: ${yourXP}`;
    }
  })
})

function movetarget() {
  timerId = setInterval(randomSquare, 500);
}

movetarget();

