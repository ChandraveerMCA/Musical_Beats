var n= document.querySelectorAll(".drum").length;

for(var i =0;i<n;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      
    
    var buttonIneer=this.innerHTML;
    makeSound(buttonIneer);

});  

}
//detecting keyboard press

document.addEventListener("keydown",function(event){
    if(event.repeat) return 
  makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
      case "w":
        var audioC = new Audio("A.mp3");
        audioC.play();
        break;
  
      case "a":
        var audioDb = new Audio("Ab.mp3");
        audioDb.play();
        break;
  
      case "s":
        var audioD = new Audio("B.mp3");
        audioD.play();
        break;
  
      case "d":
        var audioEb = new Audio("Bb.mp3");
        audioEb.play();
        break;
  
      case "f":
        var audioE = new Audio("C.mp3");
        audioE.play();
        break;
  
      case "g":
        var audioF = new Audio("D.mp3");
        audioF.play();
        break;
  
      case "h":
        var audioGb = new Audio("Db.mp3");
        audioGb.play();
        break;
  
      case "j":
        var audioG = new Audio("E.mp3");
        audioG.play();
        break;
  
      case "k":
        var audioAb = new Audio("Eb.mp3");
        audioAb.play();
        break;
  
      case "l":
        var audioA = new Audio("F.mp3");
        audioA.play();
        break;
  
      case "o":
        var audioBb = new Audio("G.mp3");
        audioBb.play();
        break;
  
      case "p":
        var audioB = new Audio("Gb.mp3");
        audioB.play();
        break;
  
      default:
        console.log(note);
    }
  }