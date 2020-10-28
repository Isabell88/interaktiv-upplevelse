// function toggleText() {
//     var text = document.getElementById("story1"); 
//      if (text.style.display === "none"){
//          text.style.display = "block";
//       } else {
//         text.style.display = "none";
//     }
// }

function startFunction() {

// the state 

let currentScene = 0

const scenes = [
     {
         description: "Du har gått vilse mitt ut i skogen. du kommer inte ihåg var du kom från. Du står mitt på en väg och funderar åt vilket håll du ska för att komma hem? ska du ta höger elle venster?",
         choices: ["höger", "venster"],
         nextScene: [2, 5]

     },
     {
        description: "Du går och går. Nu är du hungrig, törstig och du fryser, helt plöstligt ser du en liten stuga gömd bakom träden. på dörren står de välkommen! vad gör du? knackar på eller springer?",
        choices: ["knackar på", "springer"],
        nextScene: [3, 5]
    },

    {
        description: "En gammal kvinna öppnar dörren. Hon har en lång näsa med en stor finne på. Det står två tallikar serverade med mat på bordet. kvinnan drar ut stolen för dig och ber dig att sitta. vad gör du? sitter eller springer?",
        choices: ["sitter", "springer"],
        nextScene: [4, 5]
    },
    {
        description: "Du sätter dig på stolen och börjar äta, men stolen viker sig ner under golvet och du blir inlåst i en källare. där nere finns inget förutom en stol och ett bord, du märker att de finns en ventelations öppning högt upp på väggen. vad gör du nu? sätter du stolen på bordet och kryper ur ventelationen? ja eller nej",
        choices: ["ja", "nej"],
        nextScene: [5, 0]
    },
    {
        description: "Du springer raka vägen därifrån de snabbaste du bara kan och snart är du hemma safe and sound",
        
    }

];
// run aplikation
window.onload = presentScene

// Aktions

function presentScene() {
    const answer = prompt(scenes[currentScene].description);

}
function handelUserChoice(answer) {
    console.log(answer)

    if (answer === scenes[currentScene].choices[0]){
        currentScene = scenes [currentScene].nextScene[1]
    }
    if (answer === scenes[currentScene].choices[1]){
        currentScene = scenes [currentScene].nextScene[2]
    }
    if (answer === scenes[currentScene].choices[2]){
        currentScene = scenes [currentScene].nextScene[3]
    }
    if (answer === scenes[currentScene].choices[3]){
        currentScene = scenes [currentScene].nextScene[4]
    }
    if (answer === scenes[currentScene].choices[4]){
        currentScene = scenes [currentScene].nextScene[5]
    }
    presentScene()
}
}


      











// function options() {
//     var selektValue = document.getElementById("selektOption");
//     var selektIndex = selekteValue.options[selektValue.selectedIndex].value;
//     var selektMessage = '';

//     if (selektIndex == 1)
//         selektMessage = 'story2';
//     else if (selektIndex == 2)
//         selektMessage = '';
    
//    document.getElementById("p").innerHTML = colourMessage;
// }
// function interFunction() {
//     var x = document.getElementById("optionsBox").value;
//     document.getElementById("story2").innerHTML = x;

//     var text = document.getElementById("story2"); 
//      if (text.style.display === "none"){
//          text.style.display = "block";
//       } else {
//         text.style.display = "none";
//     }
//   }
