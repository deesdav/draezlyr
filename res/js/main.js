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
const aboutYou = document.getElementById("aboutYou");
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
const aboutYouContainer = document.getElementById("aboutYouContainer");

const coral = document.getElementById("coral");

const idk = document.getElementById("idk");
const textForIDK = document.getElementById("textForIDK");
const paragraph = document.getElementById("paragraph");


const all = setInterval( () => {
    document.body.style.opacity = "1";
},300);


idk.onclick = () => {
    music.src = "https://www.youtube.com/embed/_qWB60haIkM?autoplay=1&loop=1";
    document.body.style.backgroundImage = "url(./res/img/multi.gif)"; 
    aboutdraezlyr.style.display = "none";
    merchantOffers.style.display = "none"
    mainHeadLine.style.display = "none";
    draezlyrImage.style.display = "none";
    document.body.style.borderRight = "0px solid transparent";
    document.body.style.borderLeft = "0px solid transparent";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundColor = "black";
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
    textForIDK.style.display = "flex";
    
}
const quotes = setInterval(() => {
    
    const randomQuotes = Math.floor(Math.random() * 219);
    if(randomQuotes > 0 && randomQuotes < 9){
        paragraph.innerText = `Scorpion : "Get over here!"`;
    }
    if(randomQuotes > 10 && randomQuotes < 19){
        paragraph.innerText = `Various : "Would You Kindly…"`;
    }
    if(randomQuotes > 20 && randomQuotes < 29){
        paragraph.innerText = `Roman Bellic : "Niko, It’s Roman! Let’s Go Bowling!"`;
    }
    if(randomQuotes > 30 && randomQuotes < 39){
        paragraph.innerText = `Various : "Snake? SNAAAAAAAKE!!!"`;
    }
    if(randomQuotes > 40 && randomQuotes < 49){
        paragraph.innerText = `Ezio Auditore : "Requiescat In Pace"`;
    }
    if(randomQuotes > 50 && randomQuotes < 59){
        paragraph.innerText = `Various Guards : "I Used To Be An Adventurer Like You. Then I Took An Arrow To The Knee."`;
    }
    if(randomQuotes > 60 && randomQuotes < 69){
        paragraph.innerText = `Barry Burton : "You Were Almost A Jill Sandwich!"`;
    }
    if(randomQuotes > 70 && randomQuotes < 79){
        paragraph.innerText = `Vaas : "Did I Ever Tell You The Definition Of Insanity?"`;
    }
    if(randomQuotes > 80 && randomQuotes < 89){
        paragraph.innerText = `Narrator : "War… War Never Changes"`;
    }
    if(randomQuotes > 90 && randomQuotes < 99){
        paragraph.innerText = `Snake : "Kept You Waiting, Huh?"`;
    }
    if(randomQuotes > 100 && randomQuotes < 109){
        paragraph.innerText = `Toad : "Thank You Mario! But Our Princess Is In Another Castle!"`;
    }
    if(randomQuotes > 110 && randomQuotes < 119){
        paragraph.innerText = `Big Smoke : "All We Had To Do, Was Follow The Damn Train, CJ!"`;
    }
    if(randomQuotes > 120 && randomQuotes < 129){
        paragraph.innerText = `Dark Souls : "You Died"`;
    }
    if(randomQuotes > 130 && randomQuotes < 139){
        paragraph.innerText = `G-Man : "The Right Man In The Wrong Place Can Make All The Difference In The World. So Wake Up Mr. Freeman, Wake Up And Smell The Ashes."`;
    } 
    if(randomQuotes > 140 && randomQuotes < 149){
        paragraph.innerText = `Joshua Graham : "I Survived Because The Fire Inside Me Burned Brighter Than The Fire Around Me."`;
    } 
    if(randomQuotes > 150 && randomQuotes < 159){
        paragraph.innerText = `Navi : "Hey! Listen!"`;
    }
    if(randomQuotes > 160 && randomQuotes < 169){
        paragraph.innerText = `Sora : "I Don't Need A Weapon; My Friends Are My Power!"`;
    }
    if(randomQuotes > 170 && randomQuotes < 179){
        paragraph.innerText = `Conrad Roth : "No, You Know About Loss. Sacrifice Is A Choice You Make. Loss Is A Choice Made For You."`;
    }
    if(randomQuotes > 180 && randomQuotes < 189){
        paragraph.innerText = `Javik : "Stand Amongst The Ashes Of A Trillion Dead Souls And Ask The Ghosts If Honor Matters. The Silence Is Your Answer."`;
    }
    if(randomQuotes > 190 && randomQuotes < 199){
        paragraph.innerText = `Announcer : "Finish Him!"`;
    }
    if(randomQuotes > 200 && randomQuotes < 209){
        paragraph.innerText = `Old Man : "It's Dangerous To Go Alone! Take This."`;
    }
    if(randomQuotes > 210 && randomQuotes < 219){
        paragraph.innerText = `Master Chief : "Sir. Finishing This Fight"`;
    }

    
},2000);


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
    all();
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
        heroAttack.style.left = "870px";
        enemy1HP.innerText -= damage;

    }

    heroIdle.style.display = "none";
    heroAttack.style.display = "block";
}
enemy1.onmouseup = () => {
    heroIdle.style.left = "250px";
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
        document.body.style.backgroundImage = "url(./res/img/gif.gif)";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";


    } else if (yourHP.innerText > 0 && enemy1HP.innerText > 0) {
        heroAttack.style.left = "870px";
        enemy1HP.innerText -= damage;

    }

    heroIdle.style.display = "none";
    heroAttack.style.display = "block";
}
surtur.onmouseup = () => {
    heroIdle.style.left = "250px";
    heroIdle.style.display = "block";
    heroAttack.style.display = "none";
    surtur.style.right = "275px";
}
kingOfHeaven.onmousedown = () => {
    kingOfHeaven.style.bottom = "385px";
    kingOfHeaven.style.left = "885px";
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
        document.body.style.backgroundImage = "url(./res/img/gif.gif)";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";


    } else if (yourHP.innerText > 0 && enemy1HP.innerText > 0) {
        heroAttack.style.left = "870px";
        enemy1HP.innerText -= damage;

    }

    heroIdle.style.display = "none";
    heroAttack.style.display = "none";
}
kingOfHeaven.onmouseup = () => {
    heroIdle.style.left = "250px";
    heroIdle.style.display = "none";
    heroAttack.style.display = "none";
    kingOfHeaven.style.bottom = "400px";
    kingOfHeaven.style.left = "870px";

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
            document.body.style.backgroundImage = "url(./res/img/dead.gif)";
            document.body.style.backgroundColor = "black";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
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
            heroAttack.style.display = "none";
            round.style.display = "none";

            
            backButton.style.display = "block";
            document.body.style.backgroundImage = "url(./res/img/dead.gif)";
            document.body.style.backgroundColor = "black";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";

            if (random >= 0 && random <= 49){
                enemy1.src = "./res/img/enemy1.png";
                info.innerText = `information: The Impegnir has died and you earned + 10 xp`;
                yourXP += 10;
                xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
               
            }
            if(random >= 50 && random <= 100) {
                enemy1.src = "./res/img/monster.png";
                info.innerText = `information: The Demongnir has died and you earned + 20 xp`;
                yourXP += 20;
                xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
           
            }
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
//random try
const random = Math.floor(Math.random() * 100);

if (random >= 0 && random <= 49){
    enemy1.src = "./res/img/enemy1.png";
    info.innerText = `information: The Impegnir has died and you earned + 10 xp`;
   
}
if(random >= 50 && random <= 100) {
    enemy1.src = "./res/img/monster.png";
    yourHP.innerText -= damageFromEnemy;
    damageFromEnemy = 5;
    info.innerText = `information: The Demongnir has died and you earned + 20 xp`;
  
    
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
aboutYou.onclick = () => {
    aboutdraezlyr.style.display = "none";
    backButton.style.display = "block";
    backButtonProblem.style.display = "none";
    merchantOffers.style.display = "none"
    mainHeadLine.style.display = "none";
    draezlyrImage.style.display = "none";
    document.body.style.borderRight = "0px solid transparent";
    document.body.style.borderLeft = "0px solid transparent";
    aboutYouContainer.style.display = "block";
    document.body.style.backgroundImage = "url(./res/img/medi.gif)";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    heroIdle.style.display = "none";
    heroAttack.style.display = "none";
    yourHP.style.display = "none";
    enemy1HP.style.display = "none";
    backButtonProblem.style.opacity = "0";
    
    enemy1.style.display = "none";
    info.style.display = "none";
    clearInterval(myInterval);


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


    if (yourXP <= 500) {
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
    thehell.style.transform = "scale(0.5)";
}
theheaven.onmouseover = () => {
    heaven.style.color = "#bdb643";
    heaven.style.transform = "scale(2)";
    heaven.style.transition = "0.5s";
    theheaven.style.transform = "scale(0.5)";
}
thehell.onmouseout = () => {
    hell.style.color = "white";
    hell.style.transform = "none";
    hell.style.transition = "0.5s";
    thehell.style.transform = "scale(0.4)";
}
theheaven.onmouseout = () => {
    heaven.style.color = "white";
    heaven.style.transform = "none";
    heaven.style.transition = "0.5s";
    theheaven.style.transform = "scale(0.4)";
}
thehell.onclick = () => {
    music.src = "https://www.youtube.com/embed/EQmIBHObtCs?autoplay=1&loop=1";
    musicButton.style.transform = "scale(1.2)";
    musicButton.style.color = "#333";
    musicButton.style.backgroundColor = "white";
    yourXP -= 10;
    xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
    aboutdraezlyr.style.display = "none";
    enemyBasicHP += 10;
    mainHeadLine.style.display = "none";
    document.body.style.borderRight = "0px solid transparent";
    document.body.style.borderLeft = "0px solid transparent";
    document.body.style.backgroundImage = "url(./res/img/hellBackground.gif)";
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundSize = "cover";
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
    heroAttack.style.top = "570px";
    heroIdle.style.top = "570px";
    surtur.style.top = "540px";



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
            document.body.style.backgroundImage = "url(./res/img/dead.gif)";
            document.body.style.backgroundColor = "black";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            music.src = "";
            musicButton.style.color = "white";
            musicButton.style.backgroundColor = "#333";
            musicButton.style.transform = "none";
            heroAttack.style.top = "400px";
            heroIdle.style.top = "400px";
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
            heroAttack.style.display = "none";
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
            upgradeHealth.style.backgroundColor = "#F11514";
            upgradeDamage.style.backgroundColor = "#F11514";
            upgradeRegeneration.style.backgroundColor = "#F11514";



            heroAttack.style.top = "400px";
            heroIdle.style.top = "400px";
            document.body.style.backgroundImage = "url(./res/img/dead.gif)";
            document.body.style.backgroundColor = "black";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            draezlyrImage.style.transform = "scale(0.5)";
            draezlyrImage.style.display = "block";
           

            heroAttack.style.animation = "hellRune 1s infinite alternate linear";
            heroIdle.style.animation = "hellRune 1s infinite alternate linear";
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
    if (yourXP >= 150) {
        yourXP -= 10;
        xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
        aboutdraezlyr.style.display = "none";
        enemyBasicHP += 10;
        mainHeadLine.style.display = "none";

        music.src = "https://www.youtube.com/embed/rPZWNfevhpk?autoplay=1&loop=1";
        musicButton.style.transform = "scale(1.2)";
        musicButton.style.color = "#333";
        musicButton.style.backgroundColor = "white";

        document.body.style.borderRight = "0px solid transparent";
        document.body.style.borderLeft = "0px solid transparent";
        document.body.style.backgroundImage = "url(./res/img/heavenBackground.gif)";
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
                document.body.style.backgroundImage = "url(./res/img/dead.gif)";
                document.body.style.backgroundColor = "black";
                document.body.style.backgroundPosition = "center";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                music.src = "";
                musicButton.style.color = "white";
                musicButton.style.backgroundColor = "#333";
                musicButton.style.transform = "none";
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
                heroAttack.style.display = "none";
                round.style.display = "none";
                yourXP += 1000;
                damage += 100;
                basicHP += 100;
                xp.innerHTML = `YOUR CURRENT XP: ${yourXP}`;
                backButton.style.display = "block";
                heroAttack.src = "./res/img/heaven.hero.attack.png";
                heroIdle.src = "./res/img/heaven.hero.idle.png";
                thehell.style.left = "-1000px";
                theheaven.style.right = "-2000px";
                heaven.style.transform = "scale(1.5)";
                heaven.style.right = "300px";
                heaven.style.position = "absolute";
                heaven.style.display = "block";
                heaven.style.color = "white";



                hell.style.display = "none";
                heaven.innerText = `THE HEAVEN IS COMPLETED`;
                draezlyrImage.src = `./res/img/heaven.draezlyr.png`;
                draezlyrImage.style.animation = "powerOfHeavenDraezlyr 1s infinite alternate linear";
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

                upgradeHealth.style.backgroundColor = "#bdb643";
                upgradeDamage.style.backgroundColor = "#bdb643";
                upgradeRegeneration.style.backgroundColor = "#bdb643";

                logo.style.textShadow = "1px 1px 2px rgb(255, 255, 255), 0 0 1em #bdb643, 0 0 0.2em #bdb643";
                musicButton.style.backgroundColor = "#bdb643";
                twoPortals.style.display = "none";
                portals.style.display = "none";
                theheaven.style.display = "none";
                thehell.style.display = "none";
                document.body.style.backgroundImage = "url(./res/img/dead.gif)";
                document.body.style.backgroundColor = "black";
                document.body.style.backgroundPosition = "center";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";

                draezlyrImage.style.transform = "scale(0.5)";
                draezlyrImage.style.display = "block";
                heroAttack.style.animation = "heavenRune 1s infinite alternate linear";
                heroIdle.style.animation = "heavenRune 1s infinite alternate linear";

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
    gameover.style.display = "none";
    info.style.display = "none";
    shotRangeContainer.style.display = "none";
    twoPortals.style.display = "none";
}

backButton.onclick = () => {
    document.body.style.animation = "none";
    textForIDK.style.display = "none";
    aboutYouContainer.style.display = "none";
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
    draezlyrImage.style.transform = "none";
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
    document.body.style.backgroundAttachment = "none";
    document.body.style.backgroundPosition = "bottom";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";

}

coral.onclick = () => {
    backButton.style.display = "block";
    aboutYouContainer.style.display = "none";
 
    musicButton.style.display = "block";
    document.body.style.backgroundImage = "url(./res/img/coralos.png)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundColor = "hotpink";
    music.src = "https://www.youtube.com/embed/zqLEO5tIuYs?autoplay=1&loop=1";
    
 
}

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
    square.addEventListener("click", (k) => {
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





