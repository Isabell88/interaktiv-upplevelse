function toggleText() {
    var text = document.getElementById("story1"); 
     if (text.style.display === "none"){
         text.style.display = "block";
      } else {
        text.style.display = "none";
    }
}
let currentScene = 0

const scenes = [
     {
         description: "Du har gott villse mitt ut i skogen. du kommer inte ihåg var du kom från. Du står mitt på en väg och funderar åt vilket håll du ska för att komma hem? ska ti ta Höger elle venster?"
         choices: ["höger", "vänster"]

     }
]

      











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
