Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) { document.getElementById("results").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); 
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J-XSZ2rhu/model.json',modelLoaded);

function modelLoaded(){}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, Gotresults);
}
function Gotresults(error, results){
    if (error){
console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}