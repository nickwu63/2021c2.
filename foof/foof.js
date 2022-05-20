
function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0x04, 0x87, 0xDB));
    fill(color(0xED, 0x90, 0x02));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    if(choice == 3)
        rect(50,200,150,2);
    if(choice == 4)
        rect(50,250,150,2);
    text("Choice 1", 50, 50);
    text("Choice 2", 50, 100);
    text("Choice 3", 50, 150);
    text("中餐吃牛排",50,200);
    text("中餐吃大餐",50,250);
}

function mousePressed() {
    choice = int(random(5));
}

function initializeFields() {
    choice = -1;
}
