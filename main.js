var cloudObj = function(x, y) {
    this.x = x;
    this.y = y;
    this.type = round(random(0, 2));
}; //cloud object

var wallObj = function(x , y) {
    this.x = x;
    this.y = y;
    this.impass = 10;
    this.w = 40;
    this.h = 40;
}; //wall object

new p5(); //used to have random movement of enemeies until algorithms for chasing implemented

var snakeObj = function(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.dead = 0;
    this.enemy = 1;
}; //enemy 1 object (snake)

var pearObj = function(x, y, stop) {
    this.x = x;
    this.y = y;
}; //enemy 2 object (beetle)

var enemyObj = function(x, y) {
    this.x = x;
    this.y = y;
}; //enemy 3 object (skull)

var groundObj = function(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
}; //ground object

var pillarObj = function(x, y) {
    this.x = x;
    this.y = y;
    this.impass = 10;
}; //pillar object

var pitObj = function(x, y, tilemapX, tilemapY) {
    this.x = x;
    this.y = y;
    this.pit = 10;
    this.type = 13;
    this.tilemapX = tilemapX;
    this.tilemapY = tilemapY;
    this.corner = 0;
    this.cornerTopRight = 0;
    this.cornerBotRight = 0;
    this.cornerBotRight = 0;
    this.cornerTopLeft = 0;
    this.w = 40;
    this.h = 40;
} //pit object

var doorObj = function(x, y, type, tilemapX, tilemapY) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.opening = 0;
    this.tilemapX = tilemapX;
    this.tilemapY = tilemapY;
    this.w = 40;
    this.h = 80;
}; //door obeject

var playerObj = function(x, y) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.speed = 2;
    this.angle = 0;
    this.slope = 0;
    this.health = 6;
    this.invul = 0;
    this.frame = 0;
}; //player object

var pistolObj = function(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.w = 40;
    this.h = 40;
    this.angle = 0;
    this.slope = 0;
}; //pistol object

var bulletObj = function() {
    this.x = 0;
    this.y = 0;
    this.fire = 0;
    this.w = 4;
    this.h = 8;
    this.slope = 0;
    this.angle = 0;
    this.firstDraw = 0;
    this.speed = 4;
}; //bullet object

var healthObj = function() {
    this.x = 12;
    this.y = 23;
    this.health = 6;
};

var ammoObj = function() {
    this.x = 652;
    this.y = 23;
    this.ammo = 12;
    this.w = 144;
};

cloudObj.prototype.draw = function() {
    noStroke();
    fill(255, 255, 255);
    if (this.type === 0) {
        ellipse(this.x, this.y, 60, 25);
        ellipse(this.x + 20, this.y - 10, 40, 20);
    }
    else if (this.type === 1) {
        ellipse(this.x, this.y, 100, 20);
        ellipse(this.x - 40, this.y + 10, 60, 20);
        ellipse(this.x + 30, this.y + 5, 60, 20);
        ellipse(this.x + 30, this.y - 10, 80, 20);
    }
    else {
        ellipse(this.x, this.y, 150, 30);
        ellipse(this.x, this.y - 10, 100, 30);
        ellipse(this.x, this.y + 10, 100, 30);
        ellipse(this.x, this.y - 20, 50, 30);
        ellipse(this.x, this.y + 20, 50, 30);
    }
}; //cloud drawings

wallObj.prototype.draw = function() {
    fill(47,65,79);
    rect(this.x, this.y, 40, 40);
    fill(0, 0, 0);
    rect(this.x + 8, this.y, 2, 40);
    rect(this.x + 19, this.y, 2, 40);
    rect(this.x + 30, this.y, 2, 40);
    rect(this.x, this.y, 8, 2);
    rect(this.x + 19, this.y, 11, 2);
    rect(this.x, this.y + 19, 8, 2);
    rect(this.x + 19, this.y + 19, 11, 2);
    rect(this.x + 9, this.y + 9, 11, 2);
    rect(this.x + 30, this.y + 9, 10, 2);
    rect(this.x + 9, this.y + 28, 11, 2);
    rect(this.x + 30, this.y + 28, 10, 2);
    rect(this.x, this.y, 1, 40);
    rect(this.x + 39, this.y, 1, 40);
}; //wall drawing

snakeObj.prototype.draw = function() {
    stroke(43, 0, 255);
    fill(43, 0, 255);

    ellipse(this.x + 10.5, this.y + 5, 12, 8);
    if (this.jump === 0) {
        line(this.x  + 12.5, this.y + 7, this.x + 12.5, this.y + 20);
        line(this.x + 6.5, this.y + 7, this.x + 6.5, this.y + 20);
    }
    else {
        line(this.x + 6.5, this.y+ 7, this.x + 3.5, this.y + 10);
        line(this.x + 3.5, this.y + 10, this.x + 8.5, this.y + 16);
        line(this.x + 9.5, this.y + 7, this.x + 16.5, this.y + 10);
        line(this.x + 16.5, this.y + 10, this.x + 11.5, this.y + 16);
    }
    fill(255, 255, 255);
    noStroke();
    rect(this.x + 6, this.y + 3, 3, 3);
    rect(this.x + 12, this.y + 3, 3, 3);
    fill(0, 0, 0);
    rect(this.x + 7, this.y + 4, 1, 1);
    rect(this.x + 13, this.y + 4, 1, 1);
}; //snake drawing

pearObj.prototype.draw = function() {
    fill(249, 166, 2);

    noStroke();
    ellipse(this.x, this.y, 16, 16);
    ellipse(this.x, this.y - 7, 10, 10);
    stroke(139,69,19);
    line(this.x, this.y - 12, this.x + 3, this.y - 15); 
    
    if (this.hit !== 0) {
        angleMode = "radians";
        fill(255, 0, 0);
        triangle(this.x - 4, this.y - 7, this.x - 1, this.y - 7, this.x - 1, this.y - 5);
        triangle(this.x + 4, this.y - 7, this.x + 1, this.y - 7, this.x + 1, this.y - 5);
        fill(249, 166, 2);
        stroke(0, 0, 0);
        arc(this.x, this.y + 2, 12, 6, 3.14, 2*3.14);
    }
}; //beetle drawing

enemyObj.prototype.draw = function() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x + 10.5, this.y + 8, 20, 15);
    rect(this.x+ 3.5, this.y + 13, 14, 7);
    fill(0, 0, 0);
    ellipse(this.x+ 7.5, this.y + 6, 6, 5);
    ellipse(this.x + 14.5, this.y + 6, 6, 5);
    rect(this.x + 10, this.y + 10, 4, 4);
    rect(this.x + 6, this.y + 16, 2, 4);
    rect(this.x + 10, this.y + 16, 2, 4);
    rect(this.x + 14, this.y + 16, 2, 4);
}; //skull

groundObj.prototype.draw = function() {
    if (this.type === 0) {
        fill(169,169,169);
        rect(this.x, this.y, 40, 40);

        fill(105, 105, 105);
        rect(this.x, this.y + 19, 40, 2);
        rect(this.x + 19, this.y, 2, 40);
    }
    else if (this.type === 1) {
        fill(169,169,169);
        rect(this.x, this.y, 40, 40);

        fill(105, 105, 105);
    }
    else if (this.type === 2) {
        fill(128,128,128);
        rect(this.x, this.y, 40, 40);

        fill(105, 105, 105);
        rect(this.x, this.y + 19, 40, 2);
        rect(this.x + 19, this.y, 2, 40);
    }
    else if (this.type === 3) {
        fill(128,128,128);
        rect(this.x, this.y, 40, 40);
        fill(105, 105, 105);
    }

    rect(this.x, this.y, 1, 40);
    rect(this.x, this.y, 40, 1);
    rect(this.x + 39, this.y, 1, 40);
    rect(this.x, this.y + 39, 40, 1);
}; //ground drawings

pillarObj.prototype.draw = function() {
    fill(0,0,0);
    rect(this.x + 10, this.x + 10, 60, 60);

    rect(this.x + 22, this.y + 4, 19, 13);
    rect(this.x + 40, this.y + 4, 19, 13);
    rect(this.x + 22, this.y + 64, 19, 13);
    rect(this.x + 40, this.y + 64, 19, 13);

    rect(this.x + 4, this.y + 22, 13, 19);
    rect(this.x + 4, this.y + 40, 13, 19);
    rect(this.x + 64, this.y + 22, 13, 19);
    rect(this.x + 64, this.y + 40, 13, 19);

    rect(this.x + 58, this.y + 4, 19, 19);
    rect(this.x + 4, this.y + 4, 19, 19);
    rect(this.x + 58, this.y + 58, 19, 19);
    rect(this.x + 4, this.y + 58, 19, 19);

    fill(119,136,153);
    rect(this.x + 23, this.y + 5, 17, 11);
    rect(this.x + 41, this.y + 5, 17, 11);
    rect(this.x + 23, this.y + 65, 17, 11);
    rect(this.x + 41, this.y + 65, 17, 11);

    rect(this.x + 5, this.y + 23, 11, 17);
    rect(this.x + 5, this.y + 41, 11, 17);
    rect(this.x + 65, this.y + 23, 11, 17);
    rect(this.x + 65, this.y + 41, 11, 17);

    rect(this.x + 59, this.y + 5, 17, 17);
    rect(this.x + 5, this.y + 5, 17, 17);
    rect(this.x + 59, this.y + 59, 17, 17);
    rect(this.x + 5, this.y + 59, 17, 17);
}; //pillar drawings

pitObj.prototype.draw = function() {
    fill(155,28,49);
    rect(this.x, this.y, 40, 40);
    fill(0,0,0);

    if (this.type === 0) { // surrounded by pit objects
        rect(this.x, this.y, 40, 40);

        fill(155,28,49);
        if (this.cornerTopLeft !== 10) {
            rect(this.x, this.y, 5, 5);
        }
        if (this.cornerTopRight !== 10) {
            rect(this.x + 35, this.y, 5, 5);
        }
        if (this.cornerBotRight !== 10) {
            rect(this.x + 35, this.y + 35, 5, 5);
        }
        if (this.cornerBotLeft !== 10) {
            rect(this.x, this.y + 35, 5, 5);
        }
    }
    else if (this.type === 1) { //pit object to top only
        rect(this.x + 5, this.y, 30, 35);
    }
    else if (this.type === 2) { //pit object to right only
        rect(this.x + 5, this.y + 5, 35, 30);
    }
    else if (this.type === 3) { //pit object to bot only
        rect(this.x + 5, this.y + 5, 30, 35);
    }
    else if (this.type === 4) { //pit object to left only
        rect(this.x, this.y + 5, 35, 30);
    }
    else if (this.type === 5) { //pit object to left and top only
        rect(this.x, this.y, 35, 35);

        if (this.corner !== 10) {
            fill(155,28,49);
            rect(this.x, this.y, 5, 5);
        }
    }
    else if (this.type === 6) { //pit object to top and right only
        fill(0,0,0);
        rect(this.x + 5, this.y, 35, 35);


        if (this.corner !== 10) {
            fill(155,28,49);
            rect(this.x + 35, this.y, 5, 5);
        }
    }
    else if (this.type === 7) { //pit object to right and bot only
        fill(0,0,0);
        rect(this.x + 5, this.y + 5, 35, 35);


        if (this.corner !== 10) {
            fill(155,28,49);
            rect(this.x + 35, this.y + 35, 5, 5);
        }
    }
    else if (this.type === 8) { //pit object to left and bot only
        rect(this.x, this.y + 5, 35, 35);

        if (this.corner !== 10) {
            fill(155,28,49);
            rect(this.x, this.y + 35, 5, 5);
        }
    }
    else if (this.type === 9) { //pit object to left and right only
        rect(this.x, this.y + 5, 40, 30);
    }
    else if (this.type === 10) { //pit object to top and bot only
        rect(this.x + 5, this.y, 30, 40);
    }
    else if (this.type === 11) { //pit object to left, bot, and top
        rect(this.x, this.y, 35, 40);

        fill(155,28,49);
        if (this.cornerTopLeft !== 10) {
            rect(this.x, this.y, 5, 5);
        }
        if (this.cornerBotLeft !== 10) {
            rect(this.x, this.y + 35, 5, 5);
        }
    }
    else if (this.type === 12) { //pit object to left, top, and right only
        rect(this.x, this.y, 40, 35);

        fill(155,28,49);
        if (this.cornerTopLeft !== 10) {
            rect(this.x, this.y, 5, 5);
        }
        if (this.cornerTopRight !== 10) {
            rect(this.x + 35, this.y, 5, 5);
        }
    }
    else if (this.type === 13) { //pit object to top, right, and bot only
        rect(this.x + 5, this.y, 35, 40);

        fill(155,28,49);
        if (this.cornerTopRight !== 10) {
            rect(this.x + 35, this.y, 5, 5);
        }
        if (this.cornerBotRight !== 10) {
            rect(this.x + 35, this.y + 35, 5, 5);
        }
    }
    else if (this.type === 14) { //pit object to right, bot, and left only
        rect(this.x, this.y + 5, 40, 35);

        fill(155,28,49);
        if (this.cornerBotLeft !== 10) {
            rect(this.x, this.y + 35, 5, 5);
        }
        if (this.cornerBotRight !== 10) {
            rect(this.x + 35, this.y + 35, 5, 5);
        }
    }
    else { //no pits
        rect(this.x + 5, this.y + 5, 30, 30); 
    }
}; //pit drawings

doorObj.prototype.draw = function() {
    if (this.opening === 0) { //opening is top
        fill(0,0,0);
        rect(this.x - 6, this.y + 46, 47, -92);

        if (this.type === 0) {
            fill(255,215,0);
        }
        else {
            fill(224,224,224);
        }

        rect(this.x - 5, this.y + 45, 50, -90);
    }
    else if (this.opening === 1) { //opening is right
        fill(0,0,0);
        rect(this.x - 6, this.y, 92, 47);

        if (this.type === 0) {
            fill(255,215,0);
        }
        else {
            fill(224,224,224);
        }

        rect(this.x - 5, this.y, 90, 45);
    }
    else if (this.opening === 2) { //opening is bot
        fill(0,0,0);
        rect(this.x, this.y - 6, 47, 92);

        if (this.type === 0) {
            fill(255,215,0);
        }
        else {
            fill(224,224,224);
        }

        rect(this.x, this.y - 5, 45, 90);
    }
    else if (this.opening === 3) { //opening is left
        fill(0,0,0);
        rect(this.x + 45, this.y, -92, 47);

        if (this.type === 0) {
            fill(255,215,0);
        }
        else {
            fill(224,224,224);
        }

        rect(this.x + 45, this.y, -90, 45);
    }
}; //door drawings

playerObj.prototype.draw = function() {
    push();
    translate(this.x + 20, this.y + 20);

    this.slope = (mouseY - (this.y + 20)) / (mouseX - (this.x + 20));
    this.angle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));
    if (mouseX - (this.x + 20) > 0) {
        this.angle = this.angle + PI;
    }
    rotate(this.angle);

    if (this.invul === 0) {
        fill(0,0,0);
        ellipse(0, 5, 31, 31);

        fill(255,18,0);
        ellipse(0, 5, 30, 30);

        fill(0,0,0);
        ellipse(-13, -8, 14, 14);
        ellipse(13, -8, 14, 14);

        fill(255,18,0);
        ellipse(-13, -8, 13, 13);
        ellipse(13, -8, 13, 13);
    }
    pop();
}; //player drawing

pistolObj.prototype.draw = function() {
    push();
    translate(this.x + 20, this.y + 20);

    this.slope = (mouseY - (this.y + 20)) / (mouseX - (this.x + 20));
    this.angle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));
    if (mouseX - (this.x + 20) > 0) {
        this.angle = this.angle + PI;
    }
    rotate(this.angle);

    fill(0,0,0);
    rect(9, -21, 8, 14);

    fill(120,81,169);
    rect(10, -20, 6, 12);
    pop();
}; //pistol drawing

bulletObj.prototype.draw = function() {
    if (this.firstDraw === 0) {
        push();
        translate(this.x + 20, this.y + 20);

        this.slope = (mouseY - (this.y + 20)) / (mouseX - (this.x + 20));
        this.angle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));
        if (mouseX - (this.x + 20) > 0) {
            this.angle = this.angle + PI;
        }
        rotate(this.angle);

        //this.firstDraw = 1;

        fill(255,255,255);
        ellipse(-20, -20, 4, 8);
        pop();
    }
    else {
        fill(255,255,255);
        ellipse(this.x, this.y, 4, 8);

        this.x += this.speed * sin(this.angle);
        this.y -= this.speed * cos(this.angle);
    }
}; //bullet drawing and movement

healthObj.prototype.draw = function() {
    stroke(255,255,255,150);
    strokeWeight(3);
    fill(35,35,35,150);
    rect(2, 2, 75, 40);

    noStroke();
    fill(255,255,255);
    textSize(10);
    text('Health:', 7, 13);

    for (var h = 0; h < this.health; h++) {
        if (h % 2 === 0) {
            fill(0,0,0);
            arc(this.x, this.y, 12, 12, PI, 2 * PI);
            triangle(this.x - 7, this.y, this.x + 5, this.y, this.x + 5, this.y + 17);

            fill(255,0,0);
            arc(this.x, this.y, 10, 10, PI, 2 * PI);
            triangle(this.x - 5, this.y, this.x + 5, this.y, this.x + 5, this.y + 15);
        }
        else {
            fill(0,0,0);
            arc(this.x + 10, this.y, 12, 12, PI, 2 * PI);
            triangle(this.x + 7, this.y, this.x + 17, this.y, this.x + 5, this.y + 17);

            fill(255,0,0);
            arc(this.x + 10, this.y, 10, 10, PI, 2 * PI);
            triangle(this.x + 5, this.y, this.x + 15, this.y, this.x + 5, this.y + 15);

            this.x += 22;
        }
    }

    this.x = 12;
};

ammoObj.prototype.draw = function() {
    stroke(255,255,255,150);
    strokeWeight(3);
    fill(35,35,35,150);
    rect(645, 2, 153, 40);

    noStroke();
    fill(255,255,255);
    textSize(10);
    text('Ammo:', 650, 13);

    if (ammo.ammo > 0) {
        for (var a = 0; a < this.ammo; a++) {
            fill(255,200,0);
            rect(this.x, this.y - 3, 8, 20, 20);
        
            fill(255,160,0);
            arc(this.x + 4, this.y - 1, 7, 10, PI, 2 * PI);
            rect(this.x - 1, this.y + 14, 10, 3, 15);   

            this.x += 12;
        }

        this.x = 652;
    }
    else {
        ammo.reloadAnim();
    }
};

var gameStart = 0;
var player = new playerObj(400, 720);
var pistol = new pistolObj(400, 720);
var snake = new snakeObj(350, 350);
var snakes = [];
var enemy = new enemyObj(550, 650);
var pear = new pearObj(150, 450);
var health = new healthObj();
var ammo = new ammoObj();
var clouds = [];
var xWalls = 0;
var yWalls = 0;
var walls = [];
var xGrounds = 40;
var yGrounds = 40;
var grounds = [];
var pillars = [];
var pits = [];
var doors = [];
var keyArray = [];
var bullets = [new bulletObj(), new bulletObj(), 
               new bulletObj(), new bulletObj(), 
               new bulletObj(), new bulletObj(), 
               new bulletObj(), new bulletObj(), 
               new bulletObj(), new bulletObj(), 
               new bulletObj(), new bulletObj()];
var tilePitsX = 0;
var tilePitsY = 0;
var tileDoorsX = 0;
var tileDoorsY = 0;
var topTile = ' ';
var rightTile = ' ';
var botTile = ' ';
var leftTile = ' ';
var topRightTile = ' ';
var botRightTile = ' ';
var botLeftTile = ' ';
var topleftTile = ' ';
var currFrameCount = 0;
var bulletIndex = 0;
var score = 0;
var invulnerable = -100;
var reloading = 0;

var level1 = 0;

var testFrame = 0;

function mouseClicked() {
    if ((mouseX >= 320 && mouseX <= 445 && mouseY >= 412 && mouseY <= 430) && gameStart === 0) { //go to instruction screen from home screen
        gameStart = 2;
    }
    else if (mouseX >= 320 && mouseX <= 370 && mouseY >= 380 && mouseY <= 400 && gameStart === 0) { //go to game screen from home screen
        gameStart = 1;
    }
    else if ((mouseX >= 35 && mouseX <= 90 && mouseY >= 755 && mouseY <= 775) && gameStart === 2) { //go to home screen from instruction screen
        gameStart = 0;
    }
};

function mousePressed() {
    if (gameStart === 1 && bulletIndex < 12) {
        checkFire();
    }
};

var keyPressed = function() {
    keyArray[keyCode] = 1;
}; // key is pressed

var keyReleased = function() {
    keyArray[keyCode] = 0;
}; //key is released

cloudObj.prototype.move = function() {
    this.x += 1;
    
    if (this.x > 880) {
        this.type = round(random(0, 2));
        this.x = -80;
        this.y = random(50, 750);
    }
}; //animation for clouds

snakeObj.prototype.move = function() {
    this.x += this.speedX;
    this.y += this.speedY;
}; //snake random movement

snakeObj.prototype.checkCollision = function(object) {
    var self = this;
    // get the vectors to check against
    var vX = (self.x + (self.w / 2)) - (object.x + (object.w / 2));
    var vY = (self.y + (self.h / 2)) - (object.y + (object.h / 2));
    
    // Half widths and half heights of the objects
    var distW = (self.w / 2) + (object.w / 2);
    var distH = (self.h / 2) + (object.h / 2);
    var colDir = "";

    // if the x and y vector are less than the half width or half height,
    // they we must be inside the object, causing a collision
    if (abs(vX) < distW && abs(vY) < distH) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = distW - abs(vX);
        var oY = distH - abs(vY);
        
        if (oX > oY) {
            if (vY > 0) {
                colDir = "TOP";
                self.y += oY;
            } else {
                colDir = "BOTTOM";
                self.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "LEFT";
                self.x += oX;
            } else {
                colDir = "RIGHT";
                self.x -= oX;
            }
        }
    }
    
    if (colDir === "TOP") {
        this.speedY = -this.speedY;
    }
    else if (colDir === "BOTTOM") {    
        this.speedY = -this.speedY;  
    }
    else if (colDir === "RIGHT") { 
        this.speedX = -this.speedX;
    }
    else if (colDir === "LEFT") {      
        this.speedX = -this.speedX; 
    }
}; //snake collisions

pitObj.prototype.checkPits = function(tileTop, tileRight, tileBot, tileLeft, tileTopLeft, tileTopRight, tileBotRight, tileBotLeft) {
    if (tileTop === 'f' && tileRight === 'f' && tileBot === 'f' && tileLeft === 'f') { //all pits
        if (tileTopLeft === 'f') {
            this.cornerTopLeft = 10;
        }
        if (tileTopRight === 'f') {
            this.cornerTopRight = 10;
        }
        if (tileBotRight === 'f') {
            this.cornerBotRight = 10;
        }
        if (tileBotLeft === 'f') {
            this.cornerBotLeft = 10;
        }

        this.type = 0;
    }
    else if (tileLeft === 'f' && tileRight === 'f' && tileBot === 'f') { //left, right, and bot only pits
        if (tileBotLeft === 'f') {
            this.cornerBotLeft = 10;
        }
        if (tileBotRight === 'f') {
            this.cornerBotRight = 10;
        }

        this.type = 14;
    }
    else if (tileTop === 'f' && tileRight === 'f' && tileBot === 'f') { //top, right, and bot only pits
        if (tileTopRight === 'f') {
            this.cornerTopRight = 10;
        }
        if (tileBotRight === 'f') {
            this.cornerBotRight = 10;
        }

        this.type = 13;
    }
    else if (tileTop === 'f' && tileRight === 'f' && tileLeft === 'f') { //top, right, and left only pits
        if (tileTopLeft === 'f') {
            this.cornerTopLeft = 10;
        }
        if (tileTopRight === 'f') {
            this.cornerTopRight = 10;
        }

        this.type = 12;
    }
    else if (tileTop === 'f' && tileLeft === 'f' && tileBot === 'f') { //top, left, and bot only pits
        if (tileTopLeft === 'f') {
            this.cornerTopLeft = 10;
        }
        if (tileBotLeft === 'f') {
            this.cornerBotLeft = 10;
        }

        this.type = 11;
    }
    else if (tileBot === 'f' && tileTop === 'f') { //top and bot only pits
        this.type = 10;
    }
    else if (tileRight === 'f' && tileLeft === 'f') { //right and left only pits
        this.type = 9;
    }
    else if (tileBot === 'f' && tileLeft === 'f') { //left and bot only pits
        if (tileBotLeft === 'f') {
            this.corner = 10;
        }

        this.type = 8;
    }
    else if (tileBot === 'f' && tileRight === 'f') { //right and bot only pits
        if (tileBotRight === 'f') {
            this.corner = 10;
        }

        this.type = 7;
    }
    else if (tileTop === 'f' && tileRight === 'f') { //top and right only pits
        if (tileTopRight === 'f') {
            this.corner = 10;
        }

        this.type = 6;
    }
    else if (tileTop === 'f' && tileLeft === 'f') { //top and left only pits
        if (tileTopLeft === 'f') {
            this.corner = 10;
        }

        this.type = 5;
    }
    else if (tileLeft === 'f') { //left pit
        this.type = 4;
    }
    else if (tileBot === 'f') { //bot pit
        this.type = 3;
    }
    else if (tileRight === 'f') { //right pit
        this.type = 2;
    }
    else if (tileTop === 'f') { //top pit
        this.type = 1;
    }
    else { //no pits
        this.type = 15;
    }
}; //logic for having pits fit together and cleaning up corner connections

doorObj.prototype.checkOpening = function(tileTop, tileRight, tileBot, tileLeft) {
    if (tileTop === 'w' || tileTop === 'v') {
        this.opening = 0;
    }
    else if (tileRight === 'w' || tileRight === 'v') {
        this.opening = 1;
    }
    else if (tileBot === 'w' || tileBot === 'v') {
        this.opening = 2;
    }
    else if (tileLeft === 'w' || tileLeft === 'v') {
        this.opening = 3;
    }
}; //logic for drawing doors in correct places

playerObj.prototype.move = function() {
    if ((keyArray[83] === 1 || keyArray[40] === 1) && (keyArray[65] === 1 || keyArray[37] === 1) && this.y < 760 && this.x > 0) {
        this.y += this.speed/1.5;
        this.x -= this.speed/1.5;
    }
    else if ((keyArray[83] === 1 || keyArray[40] === 1) && (keyArray[68] === 1 || keyArray[39] === 1) && this.x < 760 && this.y < 760) {
        this.y += this.speed/1.5;
        this.x += this.speed/1.5;
    }
    else if ((keyArray[87] === 1 || keyArray[38] === 1) && (keyArray[68] === 1 || keyArray[39] === 1) && this.x < 760 && this.y > 0) {
        this.y -= this.speed/1.5;
        this.x += this.speed/1.5;
    }
    else if ((keyArray[87] === 1 || keyArray[38] === 1) && (keyArray[65] === 1 || keyArray[37] === 1) && this.y > 0 && this.x > 0) {
        this.y -= this.speed/1.5;
        this.x -= this.speed/1.5;
    }
    else if ((keyArray[65] === 1 || keyArray[37] === 1) && this.x > 0) {
        this.x -= this.speed;
    }
    else if ((keyArray[83] === 1 || keyArray[40] === 1) && this.y < 760) {
        this.y += this.speed;
    }
    else if ((keyArray[68] === 1 || keyArray[39] === 1) && this.x < 760) {
        this.x += this.speed;
    }
    else if ((keyArray[87] === 1 || keyArray[38] === 1) && this.y > 0) {
        this.y -= this.speed;
    }
}; //player movements

playerObj.prototype.checkCollision = function(object) {
    var self = this;
    // get the vectors to check against
    var vX = (self.x + (self.w / 2)) - (object.x + (object.w / 2));
    var vY = (self.y + (self.h / 2)) - (object.y + (object.h / 2));
    
    // Half widths and half heights of the objects
    var distW = 0;
    var distH = 0;

    if (object.pit === 10) {
        distW = (self.w / 2) + (object.w / 20);
        distH = (self.h / 2) + (object.h / 20);
    }
    else {
        distW = (self.w / 2) + (object.w / 2);
        distH = (self.h / 2) + (object.h / 2);
    }
    var colDir = "";

    // if the x and y vector are less than the half width or half height,
    // they we must be inside the object, causing a collision
    if (abs(vX) < distW && abs(vY) < distH) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = distW - abs(vX);
        var oY = distH - abs(vY);
        
        if (oX > oY) {
            if (vY > 0) {
                colDir = "TOP";
                self.y += oY;
            } else {
                colDir = "BOTTOM";
                self.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "LEFT";
                self.x += oX;
            } else {
                colDir = "RIGHT";
                self.x -= oX;
            }
        }
    }
    
    if (colDir === "TOP") {
        if ((object.enemy === 1 || object.pit === 10) && (invulnerable < frameCount - 60)) {
            this.health--;
            invulnerable = frameCount;
        }
    }
    else if (colDir === "BOTTOM") {
        if ((object.enemy === 1 || object.pit === 10) && (invulnerable < frameCount - 60)) {
            this.health--;
            invulnerable = frameCount;
            this.hit = 1;
        }
    }
    else if (colDir === "RIGHT") {
        if ((object.enemy === 1 || object.pit === 10) && (invulnerable < frameCount - 60)) {
            this.health--;
            invulnerable = frameCount;
        }    
    }
    else if (colDir === "LEFT") {
        if ((object.enemy === 1 || object.pit === 10) && (invulnerable < frameCount - 60)) {
            this.health--;
            invulnerable = frameCount;
        }    
    }

    if (this.health <= 0) {
        gameStart = 3;
    }
}; //player collisions

playerObj.prototype.pulse = function() {
    if (this.invul === 0) {
        this.invul = 1;
    }
    else {
        this.invul = 0;
    }
};

pistolObj.prototype.move = function() {
    if ((keyArray[83] === 1 || keyArray[40] === 1) && (keyArray[65] === 1 || keyArray[37] === 1) && this.y < 760 && this.x > 0) {
        this.y += this.speed/1.5;
        this.x -= this.speed/1.5;
    }
    else if ((keyArray[83] === 1 || keyArray[40] === 1) && (keyArray[68] === 1 || keyArray[39] === 1) && this.x < 760 && this.y < 760) {
        this.y += this.speed/1.5;
        this.x += this.speed/1.5;
    }
    else if ((keyArray[87] === 1 || keyArray[38] === 1) && (keyArray[68] === 1 || keyArray[39] === 1) && this.x < 760 && this.y > 0) {
        this.y -= this.speed/1.5;
        this.x += this.speed/1.5;
    }
    else if ((keyArray[87] === 1 || keyArray[38] === 1) && (keyArray[65] === 1 || keyArray[37] === 1) && this.y > 0 && this.x > 0) {
        this.y -= this.speed/1.5;
        this.x -= this.speed/1.5;
    }
    else if ((keyArray[65] === 1 || keyArray[37] === 1) && this.x > 0) {
        this.x -= this.speed;
    }
    else if ((keyArray[83] === 1 || keyArray[40] === 1) && this.y < 760) {
        this.y += this.speed;
    }
    else if ((keyArray[68] === 1 || keyArray[39] === 1) && this.x < 760) {
        this.x += this.speed;
    }
    else if ((keyArray[87] === 1 || keyArray[38] === 1) && this.y > 0) {
        this.y -= this.speed;
    }
}; //move pistol with player

pistolObj.prototype.checkCollision = function(object) {
    var self = this;
    // get the vectors to check against
    var vX = (self.x + (self.w / 2)) - (object.x + (object.w / 2));
    var vY = (self.y + (self.h / 2)) - (object.y + (object.h / 2));
    
    // Half widths and half heights of the objects
    var distW = 0;
    var distH = 0;

    if (object.pit === 10) {
        distW = (self.w / 2) + (object.w / 20);
        distH = (self.h / 2) + (object.h / 20);
    }
    else {
        distW = (self.w / 2) + (object.w / 2);
        distH = (self.h / 2) + (object.h / 2);
    }
    var colDir = "";

    // if the x and y vector are less than the half width or half height,
    // they we must be inside the object, causing a collision
    if (abs(vX) < distW && abs(vY) < distH) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = distW - abs(vX);
        var oY = distH - abs(vY);
        
        if (oX > oY) {
            if (vY > 0) {
                colDir = "TOP";
                self.y += oY;
            } else {
                colDir = "BOTTOM";
                self.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "LEFT";
                self.x += oX;
            } else {
                colDir = "RIGHT";
                self.x -= oX;
            }
        }
    }
}; //pistol collisions to prevent leaving player's hand

bulletObj.prototype.checkCollision = function(object) {
    var self = this;
    // get the vectors to check against
    var vX = (self.x - 2 + (self.w / 2)) - (object.x + (object.w / 2));
    var vY = (self.y - 4 + (self.h / 2)) - (object.y + (object.h / 2));
    
    // Half widths and half heights of the objects
    var distW = (self.w / 2) + (object.w / 2);
    var distH = (self.h / 2) + (object.h / 2);
    var colDir = "";

    // if the x and y vector are less than the half width or half height,
    // they we must be inside the object, causing a collision
    if (abs(vX) < distW && abs(vY) < distH) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = distW - abs(vX);
        var oY = distH - abs(vY);
        
        if (oX > oY) {
            if (vY > 0) {
                colDir = "TOP";
                self.y += oY;
            } else {
                colDir = "BOTTOM";
                self.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "LEFT";
                self.x += oX;
            } else {
                colDir = "RIGHT";
                self.x -= oX;
            }
        }
    }
    
    if (colDir === "TOP") {
        this.fire = 0;
        object.dead = 1;
        this.firstDraw = 0;
    }
    else if (colDir === "BOTTOM") {
        this.fire = 0;  
        object.dead = 1;   
        this.firstDraw = 0;  
    }
    else if (colDir === "RIGHT") {
        this.fire = 0;  
        object.dead = 1;   
        this.firstDraw = 0;  
    }
    else if (colDir === "LEFT") {
        this.fire = 0;  
        object.dead = 1;   
        this.firstDraw = 0;  
    }
}; //bullet collions

healthObj.prototype.updateHealth = function(object) {
    this.health = object.health;
};

ammoObj.prototype.reloadAnim = function() {
    ammo.ammo = 0;
    bulletIndex = 12;
    fill(255,255,255);
    rect(this.x - 2, this.y - 1, this.w, 17);

    this.w -= 6;

    if (this.w <= 0) {
        bulletIndex = 0;
        ammo.ammo = 12;
        this.w = 144;
        reloading = 0;
    }
};

var checkFire = function() {
    bullets[bulletIndex].fire = 1;
    bullets[bulletIndex].firstDraw = 0;
    bullets[bulletIndex].x = pistol.x + 32;
    bullets[bulletIndex].y = pistol.y;
    bulletIndex++;
    ammo.ammo -= 1;
}; //reused fire code from enchanted fruit project

var tileMapLv1 = [
    "bbbbbbbbbbbbbbbbbbbb",
    "b                  b",
    "b       h     ffff b",
    "b  ff       f   hf b",
    "b  ff       f    f b",
    "b           f    f b",
    "b           ffff   b",
    "b  h               b",
    "b              h   b",
    "w     ffff         v",
    "w     ffff         v",
    "b     ffff         b",
    "b     ffff         b",
    "b             h    b",
    "b                  b",
    "bf             fff b",
    "bf               f b",
    "bf             f ffb",
    "bf          ffff  fb",
    "bbbbbbbbbbbbbbbbbbbb",
    ]; //tilemap generated from bitmap using custom python script

var initTilemapLv1 = function() {
    for (var i = 0; i< tileMapLv1.length; i++) {
        for (var j =0; j < tileMapLv1[i].length; j++) {
            switch (tileMapLv1[i][j]) {
                case 'b': walls.push(new wallObj(j*40, i*40));
                    break;
                case 'f': pits.push(new pitObj(j*40, i*40, i, j));
                    break;
                case ' ': grounds.push(new groundObj(j*40, i*40, round(random(0, 3))));
                    break;
                case 'w': doors.push(new doorObj(j*40, i*40, 0, i, j));
                    break;
                case 'v': doors.push(new doorObj(j*40, i*40, 1, i, j));
                    break;
                case 'h': snakes.push(new snakeObj(j*40, i*40));
                    grounds.push(new groundObj(j*40, i*40, round(random(0, 3))));
                    break;
            }
        }
    }
    level1 = 1;
}; //game tilemap initialization

function preload() {
    myFont = loadFont('assets/SuperLegendBoy-4w8Y.ttf');
}

function setup() {
    createCanvas(800, 800);
    frameRate(60);
    angleMode(RADIANS);
    textFont(myFont);

    for (var i = 0; i < 22; i ++) {
        clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    }

    for (var j = 0; j < snakes.length; j++) {
        snakes[j].speedX = random(-2, 2);
        snakes[j].speedY = random(-2, 2);
    }
}
  
function draw() {
    background(135,206,235);

    if (gameStart === 0) {
        for(var i = 0; i < clouds.length; i++) {
            clouds[i].draw();
            clouds[i].move();
        }

        fill(0, 0, 0);
        textSize(40);
        text("Tomb Traverser", 200, 200);
        textSize(25);
        text("Start\nInstructions", 320, 400);

        textSize(15);
        text("Created by: TJ Koonce", 320, 750);

        if (mouseX >= 320 && mouseX <= 370 && mouseY >= 380 && mouseY <= 400) {
            fill(0, 0, 0);
            triangle(290, 380, 315, 390, 290, 400);
        }
        else if (mouseX >= 320 && mouseX <= 445 && mouseY >= 412 && mouseY <= 430) {
            fill(0, 0, 0);
            triangle(290, 410, 315, 420, 290, 430);
        }
    }
    else if (gameStart === 1) {
        noStroke();
        if (level1 === 0) {
            initTilemapLv1();

            for (var i = 0; i < pits.length; i++) {
                tilePitsX = pits[i].tilemapX;
                tilePitsY = pits[i].tilemapY;

                topLeftTile = tileMapLv1[ (tilePitsX - 1) ][ (tilePitsY - 1) ]; //using tilemap arrauy to determine each kind of tile around pit for correct drawing
                topTile = tileMapLv1[ (tilePitsX - 1) ][ (tilePitsY) ];
                topRightTile = tileMapLv1[ (tilePitsX - 1) ][ (tilePitsY + 1) ];

                botLeftTile = tileMapLv1[ (tilePitsX + 1) ][ (tilePitsY - 1) ];
                botTile = tileMapLv1[ (tilePitsX + 1) ][ (tilePitsY) ];
                botRightTile = tileMapLv1[ (tilePitsX + 1) ][ (tilePitsY + 1) ];

                leftTile = tileMapLv1[ (tilePitsX) ][ (tilePitsY - 1) ];
                rightTile = tileMapLv1[ (tilePitsX) ][ (tilePitsY + 1) ];

                pits[i].checkPits(topTile, rightTile, botTile, leftTile, topLeftTile, topRightTile, botRightTile, botLeftTile);
            }

            for (var i = 0; i < doors.length; i++) {
                tileDoorsX = doors[i].tilemapX;
                tileDoorsY = doors[i].tilemapY;

                if (tileDoorsX === 0) { //using logic to determine if tile we want to check is within tilemap
                    topTile = ' ';
                }
                else {
                    topTile = tileMapLv1[ (doors[i].tilemapX - 1) ][ (doors[i].tilemapY) ];
                }

                if (tileDoorsX === 19) {
                    botTile = ' ';
                }
                else {
                    botTile = tileMapLv1[ (doors[i].tilemapX + 1) ][ (doors[i].tilemapY) ];
                }

                if (tileDoorsY === 0) {
                    leftTile = ' ';
                }
                else {
                    leftTile = tileMapLv1[ (doors[i].tilemapX) ][ (doors[i].tilemapY - 1) ];
                }

                if (tileDoorsY === 19) {
                    rightTile = ' ';
                }
                else {
                    rightTile = tileMapLv1[ (doors[i].tilemapX) ][ (doors[i].tilemapY + 1) ];
                }

                doors[i].checkOpening(topTile, rightTile, botTile, leftTile);  
            }
        }

        for (var j = 0; j < walls.length; j++) {
            walls[j].draw();
            player.checkCollision(walls[j]);
            pistol.checkCollision(walls[j]);

            for (var h = 0; h < snakes.length; h++) {
                if (snakes[h].dead === 0) {
                    snakes[h].checkCollision(walls[j]);
                }
            }

            for (var b = 0; b < bullets.length; b++) {
                bullets[b].checkCollision(walls[j]);
            }
        }
        
        for (var k = 0; k < grounds.length; k++) {
            grounds[k].draw();
        }

        for (var m = 0; m < pits.length; m++) {
            pits[m].draw();
            player.checkCollision(pits[m]);
            pistol.checkCollision(pits[m]);

            for (var h = 0; h < snakes.length; h++) {
                if (snakes[h].dead === 0) {
                    snakes[h].checkCollision(pits[m]);
                }
            }
        }

        for (var n = 0; n < doors.length; n ++) {
            doors[n].draw();
            player.checkCollision(doors[n]);
            pistol.checkCollision(doors[n]);

            for (var h = 0; h < snakes.length; h++) {
                if (snakes[h].dead === 0) {
                    snakes[h].checkCollision(doors[n]);
                }
            }

            for (var b = 0; b < bullets.length; b++) {
                bullets[b].checkCollision(doors[n]);
            }
        }

        for (var h = 0; h < snakes.length; h++) {
            if (snakes[h].dead === 0) {
                snakes[h].draw();
                snakes[h].move();

                player.checkCollision(snakes[h]);
                pistol.checkCollision(snakes[h]);

                for (var b = 0; b < bullets.length; b++) {
                    if (bullets[b].fire === 1) {
                        bullets[b].checkCollision(snakes[h]);
                    }
                }
            }
            else {
                score++;

                if (score === 5) {
                    gameStart = 4;
                }
            }
        }

        score = 0;

        player.draw();
        player.move();
        if (player.frame < (frameCount - 5) && (invulnerable > frameCount - 60)) {
            player.frame = frameCount;
            player.pulse();
        }

        pistol.draw();
        pistol.move();

        for (i = 0; i < bullets.length; i++) {
            if (bullets[i].fire === 1) {
                bullets[i].draw();
            }
        }

        health.updateHealth(player);
        health.draw();
        ammo.draw();

        if (keyArray[82] === 1 && reloading === 0) {
            reloading = 1;
            ammo.reloadAnim();
        }
    }
    else if (gameStart === 2) {
        for(var i = 0; i < clouds.length; i++) {
            clouds[i].draw();
            clouds[i].move();
        }

        fill(0, 0, 0);
        textSize(15);
        text("You are tasked with exploring this tomb and getting untold RICHES.\nGo through this tomb by defeating ENEMIES and getting new WEAPONS.\nAfter beating the BOSS on each floor, you may venture deeper into the tomb or return to the surface.\nUse WASD or ARROW keys to move, your bullets will fire where you look after pressing SPACE.\nSome enemies are tough and require more shots, while others are weak to certain kinds of weapons.\nYou have 6 hits which can be replinished by finding hearts that drop after clearing a floor.", 0, 15);

        textSize(25);
        text("Back", 35, 775);
        if (mouseX >= 35 && mouseX <= 90 && mouseY >= 755 && mouseY <= 775) {
            fill(0, 0, 0);
            triangle(5, 755, 30, 765, 5, 775);
        }

        snake.draw();
        enemy.draw();
        pear.draw();
    }
    else if (gameStart === 3) {
        fill(0,0,0);
        textSize(70);
        text("GAME OVER\nYOU LOSE!!!", 200, 400);
    }
    else if (gameStart === 4) {
        fill(0,0,0);
        textSize(70);
        text("GAME OVER\nYOU WIN!!!!!!", 200, 400);
    }
        // s = mouseX;
        // sStr = str(s);
        // t = mouseY;
        // tStr = str(t)
        // text(sStr, 350, 600);
        // text(tStr, 350, 620);
  }