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

var snakeObj = function(x, y, breed) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 35;
    this.speed = 2.05;
    this.enemy = 1;
    this.phase = 0;
    this.breed = breed;
    this.frame = 0;
    this.angle = 0;
    this.slope = 0;
    this.health = 2;
    this.seen = 0;
}; //enemy 1 object (snake)

var beetleObj = function(x, y, randX, randY) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.speedX = randX / 1.5;
    this.speedY = randY / 1.5;
    this.enemy = 2;
    this.phase = 0;
    this.breed = 0;
    this.frame = 0;
    this.angle = 0;
    this.slope = 0;
    this.health = 6;
    this.seen = 0;
    this.mouseAngle = 0;
}; //enemy 2 object (beetle)

var skullObj = function(x, y) {
    this.x = x;
    this.y = y;
    this.w = 35;
    this.h = 35;
    this.speed = 2;
    this.enemy = 3;
    this.phase = 0;
    this.breed = 0;
    this.frame = 0;
    this.angle = 0;
    this.slope = 0;
    this.health = 4;
    this.seen = 0;
    this.mouseAngle = 0;
    this.fire = 0;
    this.xReal = x + 20;
    this.yReal = y + 20;
}; //enemy 3 object (skull)

var fireballObj = function() {
    this.x = 0;
    this.y = 0;
    this.fire = 0;
    this.w = 8;
    this.h = 8;
    this.slope = 0;
    this.angle = 0;
    this.firstDraw = 0;
    this.speed = 4;
    this.enemy = 3;
};

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
    this.xReal = 0;
    this.yReal = 0;
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
    this.w = 8;
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

var noticeBoardObj = function(x, y) {
    this.x = x;
    this.y = y;
};

var paperObj = function(x, y) {
    this.x = x;
    this.y = y;
};

var nailObj = function(x, y) {
    this.x = x;
    this.y = y;
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

snakeObj.prototype.draw = function(object) {
    push();
    translate(this.x + 20, this.y + 20);

    if (this.frame < (frameCount - 20)) {
        this.frame = frameCount;
        this.phase++;
    }

    if (object.x + 20 - (this.x + 20) === 0 && (object.y + 20 - (this.y + 20) <= 0)) {
        this.angle = 0;
    }
    else if (object.x + 20 - (this.x + 20) === 0 && (object.y + 20 - (this.y + 20) > 0)) {
        this.angle = PI;
    }
    else {
        this.slope = (object.y + 20 - (this.y + 20)) / (object.x + 20 - (this.x + 20));
        this.angle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));
        if (object.x + 20 - (this.x + 20) > 0) {
            this.angle = this.angle + PI;
        }

        if (this.angle < 0) {
            this.angle = this.angle + 2 * PI;
        }
    }
    this.angle = this.angle + PI;
    rotate(this.angle);

    strokeWeight(8);

    if (this.breed === 0) {
        fill(0,128,0);
        stroke(0,128,0);
    }
    else if (this.breed === 1) {
        fill(128,0,0);
        stroke(128,0,0);
    }
    else {
        fill(0,0,128);
        stroke(0,0,128);
    }

    if (this.phase % 4 === 0 || this.phase % 4 === 2) {
        curve(0, 0, 0, 10, 0, -10, 0, 0);
        noStroke();
        triangle(-8, 10, 8, 10, 0, 20);

        if (this.breed === 0) {
            fill(154,205,50);
        }
        else if (this.breed === 1) {
            fill(255,165,0);
        }
        else {
            fill(186,85,211);
        }
        
        quad(0, -13, 5, -8, 0, -3, -5, -8);
        quad(0, 0, 5, 5, 0, 10, -5, 5);
    }
    else if (this.phase % 4 === 1) {
        curve(30, 5, 0, 10, 0, -10, 25, -10);
        noStroke();
        triangle(-8, 10, 8, 10, 0, 20);

        if (this.breed === 0) {
            fill(154,205,50);
        }
        else if (this.breed === 1) {
            fill(255,165,0);
        }
        else {
            fill(186,85,211);
        }

        quad(-2, -13, 3, -8, -2, -3, -7, -8);
        quad(-3, 0, 2, 5, -3, 10, -8, 5);
    }
    else {
        curve(-45, 5, 0, 10, 0, -10, -35, -10);
        noStroke();
        triangle(-8, 10, 8, 10, 0, 20);

        if (this.breed === 0) {
            fill(154,205,50);
        }
        else if (this.breed === 1) {
            fill(255,165,0);
        }
        else {
            fill(186,85,211);
        }

        quad(2, -13, 7, -8, 2, -3, -3, -8);
        quad(3, 0, 8, 5, 3, 10, -2, 5);
    }

    fill(255,255,255);
    ellipse(-3, 13, 5, 5);
    ellipse(2, 13, 5, 5);

    fill(0,0,0);
    ellipse(-3, 13, 2, 2);
    ellipse(2, 13, 2, 2);

    fill(200,0,0);
    rect(-1, 20, 2, 5);

    pop();
}; //snake drawing

beetleObj.prototype.draw = function(object) {
    push();
    translate(this.x + 20, this.y + 20);

    if (this.frame < (frameCount - 20)) {
        this.frame = frameCount;
        this.phase++;
    }

    if (this.speedX === 0 && ( -this.speedY <= 0)) {
        this.angle = 0;
    }
    else if (this.speedX === 0 && ( -this.speedY > 0)) {
        this.angle = PI;
    }
    else {
        this.slope = ( -this.speedY) / (this.speedX);
        this.angle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));

        if (this.speedX > 0) {
            this.angle = this.angle + PI;
        }

        if (this.angle < 0) {
            this.angle = this.angle + 2 * PI;
        }
    }
    this.angle += PI;
    rotate(this.angle);

    if (object.x + 20 - (this.x + 20) === 0 && (object.y + 20 - (this.y + 20) <= 0)) {
        this.mouseAngle = 0;
    }
    else if (object.x + 20 - (this.x + 20) === 0 && (object.y + 20 - (this.y + 20) > 0)) {
        this.mouseAngle = PI;
    }
    else {
        this.slope = (object.y + 20 - (this.y + 20)) / (object.x + 20 - (this.x + 20));
        this.mouseAngle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));
        if (object.x + 20 - (this.x + 20) < 0) {
            this.mouseAngle -= PI;
        }

        if (this.mouseAngle < 0) {
            this.mouseAngle = this.mouseAngle + 2 * PI;
        }
    }

    if (abs(this.mouseAngle - object.angle) < 0.2) {
        this.seen = 1;
    }
    else {
        this.seen = 0;
    }

    strokeWeight(3);
        stroke(0,0,0);
        noFill();

    if ((this.phase % 4 === 0 || this.phase % 4 === 2) && this.seen === 0) {
        line(-20,0,-27,0);
        line(20,0,27,0);
        line(-20,11,-27,11);
        line(20,11,27,11);
        line(-20,-11,-27,-11);
        line(20,-11,27,-11);
    }
    else if (this.phase % 4 === 1 && this.seen === 0) {
        line(-20,0,-27,-5);
        line(20,0,27,-5);
        line(-20,11,-27,6);
        line(20,11,27,6);
        line(-20,-11,-27,-16);
        line(20,-11,27,-16);
    }
    else if (this.phase % 4 === 3 && this.seen === 0) {
        line(-20,0,-27,5);
        line(20,0,27,5);
        line(-20,11,-27,16);
        line(20,11,27,16);
        line(-20,-11,-27,-6);
        line(20,-11,27,-6);
    }

    noStroke();

    if (this.seen === 0) {
        fill(138,43,226);
        ellipse(0,0,45,40);

        fill(0,0,0);
        arc(0,12,32,17,0,PI);

        fill(220,0,0);
        ellipse(-10,15,5,5);
        ellipse(10,15,5,5);

        stroke(0,0,0);
        strokeWeight(3);
        line(0,15,0,-19);
    }
    else {
        fill(138,43,226);
        ellipse(0,0,45,40);

        fill(0,0,0);
        arc(0,12,32,17,0,PI);

        fill(220,0,0);
        ellipse(-10,15,5,5);
        ellipse(10,15,5,5);

        fill(138,43,226);
        arc(0,14,32,17,PI,2*PI);
        arc(0,16,26,14,0,PI);

        stroke(0,0,0);
        strokeWeight(3);
        line(0,15,0,-19);
    }

    if (this.health <= 4) {
        strokeWeight(1);

        line(0, 0, 10, 5);
        line(10, 5, 15, 8);
        line(15, 8, 20, 8);
        line(12, 6, 17, 3);

        line(-10, -2, -16, -8);
        line(-10, -2, -4, -15);
        line(-4, -15, 0, -8);
        line(-4, -15, -9, -18);

        if (this.health <= 2) {
            line(0, -10, 7, -3);
            line(7, -3, 10, -8);
            line(10, -8, 7, -15);
            line(10, -8, 16, -13);

            line(0, 12, -22, 0);
            line(-10, 6, -10, -2);
        }
    }
    noStroke();
    pop();
}; //beetle drawing

skullObj.prototype.draw = function(object) {
    push();
    translate(this.x + 20, this.y + 20);

    if (this.frame < (frameCount - 90)) {
        this.frame = frameCount;
        checkBall(this);
    }

    if (object.x + 20 - (this.x + 20) === 0 && (object.y + 20 - (this.y + 20) <= 0)) {
        this.angle = 0;
    }
    else if (object.x + 20 - (this.x + 20) === 0 && (object.y + 20 - (this.y + 20) > 0)) {
        this.angle = PI;
    }
    else {
        this.slope = (object.y + 20 - (this.y + 20)) / (object.x + 20 - (this.x + 20));
        this.angle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));
        if (object.x + 20 - (this.x + 20) > 0) {
            this.angle = this.angle + PI;
        }

        if (this.angle < 0) {
            this.angle = this.angle + 2 * PI;
        }
    }
    this.angle = this.angle + PI;
    rotate(this.angle);
    
    noStroke();
    fill(0,0,0);
    ellipse(0,0,36,36);
    
    fill(250,250,210);
    ellipse(0,0,35,35);

    fill(0,0,0);
    arc(-9,15,14,10,1.2*PI,2.15*PI);
    arc(9,15,14,10,2.85*PI,3.8*PI);
    
    stroke(0,0,0);
    strokeWeight(1);
    line(0,0,10,-1);
    line(10,-1,13,6);
    line(10,-1,16,-4);

    line(0,0,-7,-6);
    line(-7,-6,-3,-12);
    line(-7,-6,-12,-2);
    line(-12,-2,-8,2);

    line(0,0,-3,10);
    line(-3,10,3,6);

    pop();
}; //skull

fireballObj.prototype.draw = function(object) {
    if (this.firstDraw === 0) {
        this.angle = object.angle;

        this.firstDraw = 1;
    }
    else {
        fill(0,0,0,);
        ellipse(this.x, this.y, this.w + 1, this.h + 1);

        fill(220,20,60);
        ellipse(this.x, this.y, this.w, this.h);

        this.x -= this.speed * sin(this.angle);
        this.y += this.speed * cos(this.angle);
    }
};

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

    if (mouseX - (this.x + 20) === 0 && (mouseY - (this.y + 20) <= 0)) {
        this.angle = 0;
    }
    else if (mouseX - (this.x + 20) === 0 && (mouseY - (this.y + 20) > 0)) {
        this.angle = PI;
    }
    else {
        this.slope = (mouseY - (this.y + 20)) / (mouseX - (this.x + 20));
        this.angle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));
        if (mouseX - (this.x + 20) > 0) {
            this.angle = this.angle + PI;
        }

        if (this.angle < 0) {
            this.angle = this.angle + 2 * PI;
        }
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

    if (mouseX - (this.x + 20) === 0 && (mouseY - (this.y + 20) <= 0)) {
        this.angle = 0;
    }
    else if (mouseX - (this.x + 20) === 0 && (mouseY - (this.y + 20) > 0)) {
        this.angle = PI;
    }
    else {
        this.slope = (mouseY - (this.y + 20)) / (mouseX - (this.x + 20));
        this.angle = atan((0 + this.slope) / (1 + (0 * this.slope))) - (90 * (PI / 180));
        if (mouseX - (this.x + 20) > 0) {
            this.angle = this.angle + PI;
        }

        if (this.angle < 0) {
            this.angle = this.angle + 2 * PI;
        }
    }
    rotate(this.angle);

    var xComp = (12 * cos(-this.angle) - 17 * sin(-this.angle)) + 20;
    var yComp = -(12 * sin(-this.angle) + 17 * cos(-this.angle)) + 20;

    this.xReal = this.x + xComp;
    this.yReal = this.y + yComp;

    fill(0,0,0);
    rect(9, -21, 8, 14);

    fill(120,81,169);
    rect(10, -20, 6, 12);
    pop();
}; //pistol drawing

bulletObj.prototype.draw = function(object) {
    if (this.firstDraw === 0) {
        this.angle = object.angle;

        this.firstDraw = 1;
    }
    else {
        fill(0,0,0,);
        ellipse(this.x, this.y, this.w + 1, this.h + 1);

        fill(255,200,0);
        ellipse(this.x, this.y, this.w, this.h);

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

noticeBoardObj.prototype.draw = function() {
    fill(160,82,45);
    stroke(0,0,0);
    strokeWeight(1);
    rect(this.x, this.y, 700, 500);

    noStroke();
};

paperObj.prototype.draw = function() {
    fill(248,248,255);
    stroke(0,0,0);
    strokeWeight(1);
    rect(this.x, this.y, 60, 80);

    fill(255,0,0);
    rect(this.x + 10, this.y + 65, 3, 10);
    rect(this.x + 17, this.y + 65, 3, 10);

    noStroke();
};

nailObj.prototype.draw = function() {
    fill(169,169,169);
    stroke(0,0,0);
    strokeWeight(1);
    ellipse(this.x, this.y, 10, 10);

    noStroke();
};

var gameStart = 0;
var player = new playerObj(400, 720);
var pistol = new pistolObj(400, 720);
var playerInstr = new playerObj(400, 760);
var pistolInstr = new pistolObj(400, 760);
var snake = new snakeObj(720, 255);
var skull = new skullObj(720, 650);
var beetle = new beetleObj(150, 450);
var board = new noticeBoardObj(50, 150);
var papers = [new paperObj(710, 240)];
var nails = [new nailObj(740, 250)];
var snakes = [];
var beetles = [];
var skulls = [];
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
var fireballs = [new fireballObj(), new fireballObj(),
                 new fireballObj(), new fireballObj(),
                 new fireballObj(), new fireballObj(),
                 new fireballObj(), new fireballObj(),
                 new fireballObj(), new fireballObj(),
                 new fireballObj(), new fireballObj()];
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
var fireballIndex = 0;
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
    this.x += this.speed * sin(this.angle + PI);
    this.y -= this.speed * cos(this.angle + PI);
}; //snake random movement

snakeObj.prototype.checkCollision = function(object) {
    var self = this;
    // get the vectors to check against
    var vX = (self.x + 10 + (self.w / 2)) - (object.x + (object.w / 2));
    var vY = (self.y + 5 + (self.h / 2)) - (object.y + (object.h / 2));

    
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

    }
    else if (colDir === "BOTTOM") {    

    }
    else if (colDir === "RIGHT") { 

    }
    else if (colDir === "LEFT") {      

    }
}; //snake collisions

beetleObj.prototype.move = function() {
    if (this.seen === 0) {
        this.x += this.speedX;
        this.y -= this.speedY;
    }
}; //snake random movement

beetleObj.prototype.checkCollision = function(object) {
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
        this.speedY = -random(0.1,0.5);
    }
    else if (colDir === "BOTTOM") {    
        this.speedY = random(0.1,0.5);
    }
    else if (colDir === "RIGHT") { 
        this.speedX = -random(0.1,0.5);
    }
    else if (colDir === "LEFT") {      
        this.speedX = random(0.1,0.5);
    }
}; //snake collisions

skullObj.prototype.checkCollision = function(object) {
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
        
    }
    else if (colDir === "BOTTOM") {    
        
    }
    else if (colDir === "RIGHT") { 
        
    }
    else if (colDir === "LEFT") {      

    }
}; //snake collisions

fireballObj.prototype.checkCollision = function(object) {
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
        this.fire = 0;
        this.firstDraw = 0;
    }
    else if (colDir === "BOTTOM") {
        this.fire = 0;  
        this.firstDraw = 0;  
    }
    else if (colDir === "RIGHT") {
        this.fire = 0;  
        this.firstDraw = 0;  
    }
    else if (colDir === "LEFT") {
        this.fire = 0;  
        this.firstDraw = 0;  
    }
}; //bullet collions

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
        if ((object.enemy === 1 || object.pit === 10 || object.enemy === 2 || object.enemy === 3) && (invulnerable < frameCount - 60)) {
            this.health--;
            invulnerable = frameCount;
        }
        object.fire = 0;
    }
    else if (colDir === "BOTTOM") {
        if ((object.enemy === 1 || object.pit === 10 || object.enemy === 2 || object.enemy === 3) && (invulnerable < frameCount - 60)) {
            this.health--;
            invulnerable = frameCount;
            this.hit = 1;
        }
        object.fire = 0;
    }
    else if (colDir === "RIGHT") {
        if ((object.enemy === 1 || object.pit === 10 || object.enemy === 2 || object.enemy === 3) && (invulnerable < frameCount - 60)) {
            this.health--;
            invulnerable = frameCount;
        }  
        object.fire = 0;  
    }
    else if (colDir === "LEFT") {
        if ((object.enemy === 1 || object.pit === 10 || object.enemy === 2 || object.enemy === 3) && (invulnerable < frameCount - 60)) {
            this.health--;
            invulnerable = frameCount;
        }    
        object.fire = 0;
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
    var vX = (self.x - 4 + (self.w / 2)) - (object.x + (object.w / 2));
    var vY = (self.y - 4 + (self.h / 2)) - (object.y + (object.h / 2));

    if (object.enemy === 1) {
        vX -= 10;
        vY -= 5;
    }
    
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
        if (object.seen === 0) {
            object.health--;
        }
        this.firstDraw = 0;
    }
    else if (colDir === "BOTTOM") {
        this.fire = 0;  
        if (object.seen === 0) {
            object.health--;
        }   
        this.firstDraw = 0;  
    }
    else if (colDir === "RIGHT") {
        this.fire = 0;  
        if (object.seen === 0) {
            object.health--;
        } 
        this.firstDraw = 0;  
    }
    else if (colDir === "LEFT") {
        this.fire = 0;  
        if (object.seen === 0) {
            object.health--;
        }   
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
    bullets[bulletIndex].x = pistol.xReal;
    bullets[bulletIndex].y = pistol.yReal;
    bulletIndex++;
    ammo.ammo -= 1;
}; //reused fire code from enchanted fruit project

var checkBall = function(object) {
    fireballs[fireballIndex].fire = 1;
    fireballs[fireballIndex].firstDraw = 0;
    fireballs[fireballIndex].x = object.xReal;
    fireballs[fireballIndex].y = object.yReal;
    fireballIndex++;

    if (fireballIndex > 5) {
        fireballIndex = 0;
    }
}; //reused fire code from enchanted fruit project

var tileMapLv1 = [
    "bbbbbbbbbbbbbbbbbbbb",
    "b                  b",
    "b             ffff b",
    "b  ff       f    f b",
    "b  ff       f s  f b",
    "b           f    f b",
    "b       h   ffff   b",
    "b                  b",
    "b                  b",
    "w     ffff         v",
    "w     ffff         v",
    "b     ffff   h     b",
    "b     ffff         b",
    "b                  b",
    "b    e             b",
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
                case 'h': snakes.push(new snakeObj(j*40, i*40, round(random(0, 2))));
                    grounds.push(new groundObj(j*40, i*40, round(random(0, 3))));
                    break;
                case 'e': beetles.push(new beetleObj(j*40, i*40, random(-0.5, 0.5), random(-0.5, 0.5)));
                    grounds.push(new groundObj(j*40, i*40, round(random(0, 3))));
                    break;
                case 's': skulls.push(new skullObj(j*40, i*40));
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
                if (snakes[h].health > 0) {
                    snakes[h].checkCollision(walls[j]);
                }
            }

            for (var e = 0; e < beetles.length; e++) {
                if (beetles[e].health > 0) {
                    beetles[e].checkCollision(walls[j]);
                }
            }

            for (var s = 0; s < skulls.length; s++) {
                if (skulls[s].health > 0) {
                    skulls[s].checkCollision(walls[j]);
                }
            }

            for (var b = 0; b < bullets.length; b++) {
                if (bullets[b].fire === 1) {
                    bullets[b].checkCollision(walls[j]);
                }
            }

            for (var f = 0; f < fireballs.length; f++) {
                if (fireballs[f].fire === 1) {
                    fireballs[f].checkCollision(walls[j]);
                }
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
                if (snakes[h].health > 0) {
                    snakes[h].checkCollision(pits[m]);
                }
            }

            for (var e = 0; e < beetles.length; e++) {
                if (beetles[e].health > 0) {
                    beetles[e].checkCollision(pits[m]);
                }
            }

            for (var s = 0; s < skulls.length; s++) {
                if (skulls[s].health > 0) {
                    skulls[s].checkCollision(pits[m]);
                }
            }
        }

        for (var h = 0; h < snakes.length; h++) {
            if (snakes[h].health > 0) {
                snakes[h].draw(player);
                snakes[h].move(player);

                player.checkCollision(snakes[h]);
                pistol.checkCollision(snakes[h]);

                for (var e = 0; e < beetles.length; e++) {
                    if (beetles[e].health > 0) {
                        beetles[e].checkCollision(snakes[h]);
                    }
                }

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

        for (var e = 0; e < beetles.length; e++) {
            if (beetles[e].health > 0) {
                beetles[e].draw(player);
                beetles[e].move(player);

                player.checkCollision(beetles[e]);
                pistol.checkCollision(beetles[e]);

                for (var b = 0; b < bullets.length; b++) {
                    if (bullets[b].fire === 1) {
                        bullets[b].checkCollision(beetles[e]);
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

        for (var f = 0; f < fireballs.length; f++) {
            for (var s = 0; s < skulls.length; s++) {
                if (fireballs[f].fire === 1) {
                    fireballs[f].draw(skulls[s]);
                    player.checkCollision(fireballs[f]);
                }
            }
        }
        
        for (var s = 0; s < skulls.length; s++) {
            if (skulls[s].health > 0) {
                skulls[s].draw(player);

                player.checkCollision(skulls[s]);
                pistol.checkCollision(skulls[s]);

                for (var b = 0; b < bullets.length; b++) {
                    if (bullets[b].fire === 1) {
                        bullets[b].checkCollision(skulls[s]);
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

        for (var i = 0; i < bullets.length; i++) {
            if (bullets[i].fire === 1) {
                bullets[i].draw(pistol);
            }
        }

        player.draw();
        player.move();
        if (player.frame < (frameCount - 5) && (invulnerable > frameCount - 60)) {
            player.frame = frameCount;
            player.pulse();
        }

        pistol.draw();
        pistol.move();

        health.updateHealth(player);
        health.draw();
        ammo.draw();

        if (keyArray[82] === 1 && reloading === 0) {
            reloading = 1;
            ammo.reloadAnim();
        }

        for (var n = 0; n < doors.length; n ++) {
            doors[n].draw();
            player.checkCollision(doors[n]);
            pistol.checkCollision(doors[n]);

            for (var h = 0; h < snakes.length; h++) {
                if (snakes[h].health > 0) {
                    snakes[h].checkCollision(doors[n]);
                }
            }

            for (var e = 0; e < beetles.length; e++) {
                if (beetles[e].health > 0) {
                    beetles[e].checkCollision(doors[n]);
                }
            }

            for (var s = 0; s < skulls.length; s++) {
                if (skulls[s].health > 0) {
                    skulls[s].checkCollision(doors[n]);
                }
            }

            for (var b = 0; b < bullets.length; b++) {
                if (bullets[b].fire === 1) {
                    bullets[b].checkCollision(doors[n]);
                }
            }

            for (var f = 0; f < fireballs.length; f++) {
                if (fireballs[f].fire === 1) {
                    fireballs[f].checkCollision(doors[n]);
                }
            }
        }
    }
    else if (gameStart === 2) {
        for(var i = 0; i < clouds.length; i++) {
            clouds[i].draw();
            clouds[i].move();
        }

        board.draw();

        for (var p = 0; p < papers.length; p++) {
            papers[p].draw();
        }

        for (var n = 0; n < nails.length; n++) {
            nails[n].draw();
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

        var dummyLoc = {'x': skull.x, 'y': skull.y + 80};


        snake.draw(dummyLoc);
        skull.draw(dummyLoc);
        beetle.draw(playerInstr);

        playerInstr.draw();
        pistolInstr.draw();
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