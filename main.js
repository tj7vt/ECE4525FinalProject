var cloudObj = function(x, y) {
    this.x = x;
    this.y = y;
    this.type = round(random(0, 2));
};

var playerObj = function(x, y) {
    this.x = x;
    this.y = y;
};

playerObj.prototype.draw = function() {
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
};

var enemyObj = function(x, y) {
    this.x = x;
    this.y = y;
};

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
};

var pearObj = function(x, y, stop) {
    this.x = x;
    this.y = y;
}; //pear object

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
}; //pear dimensions and drawing

var gameStart = 0;
var player = new playerObj(210, 180);
var enemy = new enemyObj(550, 650);
var pear = new pearObj(150, 450);
var clouds = [];

function mouseClicked() {
    if ((mouseX >= 320 && mouseX <= 445 && mouseY >= 412 && mouseY <= 430) && gameStart === 0) {
        gameStart = 2;
    }
    else if ((mouseX >= 35 && mouseX <= 90 && mouseY >= 755 && mouseY <= 775) && gameStart === 2) {
        gameStart = 0;
    }
};

cloudObj.prototype.move = function() {
    this.x += 1;
    
    if (this.x > 880) {
        this.type = round(random(0, 2));
        this.x = -80;
        this.y = random(50, 750);
    }
};

function setup() {
    createCanvas(800, 800);
    frameRate(60);

    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
    clouds.push(new cloudObj(random(-50, 850), random(-50, 850)));
  }
  
function draw() {
    background(135,206,235);

    for(var i = 0; i < clouds.length; i++) {
        clouds[i].draw();
        clouds[i].move();
    }

    if (gameStart === 0) {
        fill(0, 0, 0);
        textSize(40);
        text("Tomb Traverser", 280, 200);
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
    if (gameStart === 2) {
        fill(0, 0, 0);
        textSize(15);
        text("You are tasked with exploring this tomb and getting untold RICHES.\nGo through this tomb by defeating ENEMIES and getting new WEAPONS.\nAfter beating the BOSS on each floor, you may venture deeper into the tomb or return to the surface.\nUse WASD or ARROW keys to move, your bullets will fire where you aim after CLICKING.\nSome enemies are tough and require more shots, while others are weak to certain kinds of weapons.\nYou have 6 hits which can be replinished by finding hearts that drop after clearing a floor.", 0, 15);

        textSize(25);
        text("Back", 35, 775);
        if (mouseX >= 35 && mouseX <= 90 && mouseY >= 755 && mouseY <= 775) {
            fill(0, 0, 0);
            triangle(5, 755, 30, 765, 5, 775);
        }

        player.draw();
        enemy.draw();
        pear.draw();
    }

        // s = mouseX;
        // sStr = str(s);
        // t = mouseY;
        // tStr = str(t)
        // text(sStr, 350, 600);
        // text(tStr, 350, 620);
  }