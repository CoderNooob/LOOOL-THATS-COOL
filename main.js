img = "";
stotus = "";
objects = [];

function preload()
{
    img = loadImage('dog_cat.jpg')
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", Pain);
    document.getElementById("status").innerHTML = "Status : Detecting 9 Year Old Idiots";
}

function Pain()
{
    console.log("Model Loadex!");
    stotus = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error,results)
{
    if(error){
         console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw()
{
    image(video, 0, 0, 380, 380);
   if(stotus != "")
   {
    r =  random(255);
    g =  random(255);
    b =  random(255);
    objectDetector.detect(video, gotResult)
       for (i = 0; i < objects.length; i++)
       {
            document.getElementById("status").innerHTML = "Status : Object AHHHH";
            document.getElementById("number_of_objects").innerHTML = "Number Of Detections : "+objects.length;
            
            fill(r,g,b);
            percent = floor(objects[i].confidence *140);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
   }
}

