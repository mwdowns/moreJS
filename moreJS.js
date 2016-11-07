function like() {
  this.timesLiked++;
}

function hate() {
  this.timesLiked--;
}

var pic1 = {
  url: 'lolcat.jpg',
  timesLiked: 0,
  like: like
};

var pic2 = {
  url: 'chukcnorris.jpg',
  timesLiked: 0,
  like: like
};

pic1.like();
console.log(pic1.timesLiked);
hate.apply(pic1);
console.log(pic1.timesLiked);

// function showInfo() {
//   console.log(this.firstName);
//   console.log(this.lastName);
//   console.log(this.eyeColor);
//   console.log(this.hairColor);
// }

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function showInfo() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.eyeColor);
    console.log(this.hairColor);
  }
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;

console.log(daughter);
daughter.showInfo();

function Character() {

}

Character.prototype.attack = function(enemy) {
  enemy.health -= this.power;
};

function Hero() {
  this.name = "Hiro";
  this.health = 10;
  this.power = 5;
}

Hero.prototype = Object.create(Character.prototype);

Hero.prototype.attack = function(enemy){
  var randNum = Math.floor((Math.random() * 10) + 1);
  if (randNum < 3) {
    var bigHit = (2 * this.power);
    enemy.health -= bigHit;
    console.log(hero.name + " attacks " + enemy.name + " for " + bigHit + " points!");
  } else {
    var regularHit = this.power;
    enemy.health -= regularHit;
    console.log(hero.name + " attacks " + enemy.name + " for " + regularHit + " points!");
  }
};

function Enemy() {
  this.name = "Badguy";
  this.health = 15;
}

Enemy.prototype = Object.create(Character.prototype);

var hero = new Hero();
var enemy = new Enemy();
hero.attack(enemy);

// function Person(name) {
//   this.name = name;
//   this.greet = function(other) {
//     console.log('Hello' + other.name + "! My name is " + self.name + ".");
//   };
// }
//
// function createPerson(name) {
//   var person = {
//     name: name
//   };
//
//   person.greet = function(other) {
//     console.log ("hello" + other.name + "! My name is " + self.name + ".");
//   };
// }
