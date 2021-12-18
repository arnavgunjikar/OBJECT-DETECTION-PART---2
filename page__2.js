img = "";

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
    text("TV", 155, 165,);
    noFill();
    stroke("#FF0000");
    rect(150, 150, 350, 250);

    fill("#FF0000");
    text("AC", 255, 45,);
    noFill();
    stroke("#FF0000");
    rect(250, 30, 250, 100);
}

function preload()
{
    img = loadImage("TV AND AC.png");
}


function back_2()
{
    window.location = "index.html";
}