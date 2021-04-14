var status = ""
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 275, 125);
    noFill();
    stroke("#FF0000");
    rect(250, 100, 300, 300);
}
function preload() {
    img = loadImage("dog_cat.jpg");
}
function modelLoaded(){
console.log("model is loaded");
status=true;
object_detector.detect(img,gotResults);
}
function gotResults(error,results){
if (error) {
    console.error(error);
}
console.log(results);
}