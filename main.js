noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    canvas = createCanvas(550 , 580);
    canvas.position(750 , 110);

    video = createCapture(VIDEO);
    video.size(530 , 480);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    background("#ffacac");
    fill("");
    stroke("");
    textSize(difference);
    text("Lets Party!!" , noseX , noseY);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+noseX+"nose y = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = "+leftWristX+"right wrist x = "+rightWristX+"difference = "+difference);
    }
}