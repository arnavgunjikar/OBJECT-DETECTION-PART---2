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
    text("Bowl", 55, 65);
    noFill();
    stroke("#FF0000");
    rect(50, 50, 550, 350);

    fill("#FF0000");
    text("Orange", 335, 135);
    noFill();
    stroke("#FF0000");
    rect(330, 120, 250, 130);

    fill("#FF0000");
    text("banana", 50, 115);
    noFill();
    stroke("#FF0000");
    rect(40, 100, 200, 150);
}

function preload()
{
    img = loadImage("Fruit Basket.png");
}

function back_5()
{
    window.location = "index.html";
}