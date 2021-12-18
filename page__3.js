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
    text("Desk", 55, 115,);
    noFill();
    stroke("#FF0000");
    rect(50, 100, 570, 250);
}

function preload()
{
    img = loadImage("Desk.png");
}

function back_3()
{
    window.location = "index.html";
}