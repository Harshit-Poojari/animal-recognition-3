function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/cX1cMpp_E/model.json",modelReady);   
}

function modelReady() {
    classifier.classify(gotResults);

}

function  gotResults(error,results) {
  if (error) {
      console.error(error);    
  } else {
    console.log(results);
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML = 'I can hear-'+results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy-'+ (results[0].confidence *100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
    
    img1 = document.getElementById("dog");
    img2 = document.getElementById("cat");
    img3 = document.getElementById("tiger");
    img4 = document.getElementById("cow");

    if (results[0].label =="barking") {
        img1.src = "doggy.PNG";
        img2.src = "cat.PNG";
        img3.src = "tinku.PNG";
        img4.src = "cow.PNG";
        
    } else if(results[0].label == "meow") {
        img2.src = "cat.PNG";
        img1.src = "doggy.PNG";
        img3.src = "tinku.PNG";
        img4.src = "cow.PNG";
          
    }
    else if(results[0].label == "roar") {
        img3.src = "tinku.PNG";
        img1.src = "doggy.PNG";
        img2.src = "cat.PNG";
        img4.src = "cow.PNG";
  }
  else{
    img4.src = "cow.png";
    img1.src = "doggy.PNG";
    img2.src = "cat.PNG";
    img3.src = "tinku.PNG";
  }
}
}