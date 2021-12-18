status = "";

objects = [];

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bottle", 40, 45,);
    noFill();
    stroke("#FF0000");
    rect(35, 30, 100, 350);

    fill("#FF0000");
    text("Bottle", 165, 45,);
    noFill();
    stroke("#FF0000");
    rect(160, 30, 100, 350);

    fill("#FF0000");
    text("Bottle", 295, 45,);
    noFill();
    stroke("#FF0000");
    rect(290, 30, 100, 350);

    fill("#FF0000");
    text("Bottle", 415, 60,);
    noFill();
    stroke("#FF0000");
    rect(410, 30, 100, 350);

    fill("#FF0000");
    text("Bottle", 530, 45,);
    noFill();
    stroke("#FF0000");
    rect(525, 30, 100, 350);
}

function preload()
{
    img = loadImage("Bottles.jpeg");
}

function back_4()
{
    window.location = "index.html";
}