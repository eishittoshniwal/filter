function preload() {

}

function setup() {
   canvas=createCanvas(500,500)
   canvas.center() 
   //code for setting a live webcam
   video=createCapture(VIDEO)
   video.size(500,500)
   video.hide()
   //code for intializing pose net
   poseNet=ml5.poseNet(video,modelloaded)
//code for executing pose net
poseNet.on("pose",gotposes)
}

function draw() {
    image(video,0,0,500,500)
}

function snapshot() {
    save("life.png")
}

function modelloaded() {
    console.log("model is loadeddddd")
}
function gotposes(results){
    if (results.length>0) {
        console.log(results)   
        console.log("nosex= "+ results[0].pose.nose.x) 
        console.log("nosey= "+ results[0].pose.nose.y) 
    }
    
}