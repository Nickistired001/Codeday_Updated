let year = 0; // 1 year = 72 minutes = 1.2 hours
let month = 12; // 1 month = 6 minutes
let day = 30; // 1 day = 12 seconds
let hour = 24; // 1 hour = 1/2 second

let money = "10000";
localStorage.setItem("moneyStored", "Money: " + money); // money is good
let billboards = 0; // Bought using money, increases advertisement
let advertisement = 0; // Formula for advertisement is 1 + 50 * billboards + 2 * spammers + 10 * internetPresence. Feel free to change it if some methods are too OP
let spammers = 0; // hired through a menu, costs monthly upkeep
let promoters = 0;
let internetPresence = 0; // increased by buying promoters, which only last for a month each
let parkingSpaces = 10; // Parking spaces increases maximum amount of customers, increased by buying more parking spaces.
let buildingUpgrades = 0;
let customers = 0;
let addictiveness = 1; // makes you get more money
    
    
function doTime() {
    hour += 1;
  if(hour > 24) {
    hour -= 24;
    day++;
  }
  if(day > 30) {
    day -= 30;
    month++;
  }
  if(month > 12) {
    month -= 12;
    year++;
  }
  // document.getElementById("timerrr").innerHTML = "Date: " + year + "/" + month + "/" + day + " " + hour + ":00";
  if(money < -10000) {
    alert("You lost the game. If you want, you can keep playing but it's probably a better idea to start over or load your latest save file.")
  }
  advertisement = 1 + 50 * billboards + 2 * spammers + 10 * internetPresence;
}

setInterval(doTime(), 500);
setInterval(jobUpkeep(), 360000);
setInterval(getMoney(), 6000);

function buyBillboard() {
    if (money >= 1000000) {
      money -= 1000000;
      billboards++;
    } else {
      alert("You do not have enough money. You need " + (1000000 - money) + " more.")
    }
}

function buySpammer() {
    if (money >= 1000) {
      money -= 1000;
      spammers++;
    } else {
      alert("You do not have enough money. You need " + (1000 - money) + " more.")
    }
}

function buyPromoter() {
    if (money >= 50000) {
      money -= 50000;
      promoters++;
    } else {
      alert("You do not have enough money. You need " + (50000 - money) + " more.")
    }
}

function buyParkingSpaces() {
    if (money >= 5000) {
      money -= 5000;
      parkingSpaces++;
    } else {
      alert("You do not have enough money. You need " + (5000 - money) + " more.")
    }
}

function upgradeGames() {
    if (money >= (addictiveness ** 3 * 500)) {
      money -= (addictiveness ** 3 * 500);
      addictiveness++;
    } else {
      alert("You do not have enough money. You need " + (addictiveness ** 3 * 500 - money) + " more.")
    }
}

function getMoney() {
  paycheck = 2 * parkingSpaces + 10 * addictiveness + 5 * advertisement;
  money += paycheck;
  // alert("You got $" + paycheck);
}

function jobUpkeep() {
  money -= (spammers * 100);
  money -= (promoters * 4000);
}

function goBack() {
  window.history.back();
}
