let canvasWidth = 400;
let canvasHeight = 400;
let points = [];
let yPos = 0;
let xPos = 0;
let numDrops = 100;

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    for(let i = 0; i < numDrops; i++){
        xPos = random(0, canvasWidth);
        yPos = random(0, -1 * canvasHeight);
        points.push({yPos: yPos, xPos: xPos});
    }
}

function draw(){
    background(0);
    fill(255);
    raindrops();
    console.log(points.length);
}

function raindrops(){
    for (let p in points){
        ellipse(points[p].xPos, points[p].yPos, 10, 14);
        points[p].yPos += 5;
        if(points[p].yPos > canvasHeight){
            points[p].yPos = 0;
            points[p].xPos = random(0, canvasWidth);
        }
    }
}