video = "";
status = "";
objects = [];


function preload()
{
    video = createVideo('video.mp4');
}


function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting Object";
}
function modelLoaded()
{
    console.log("Model Loaded !");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw()
{
    image(video, 0, 0, 480, 480);
    if(status != "")
    {
        objectDetector.detect(video, gotResult);
        for(i = 0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected = " +object.length;
            
            fill("#FF0000");
            percent = floor(objects[i].cofidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            nofill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}