

let currentScene = 0

const scenes = [
    {
        description: "Du har gått vilse mitt ut i skogen. du kommer inte ihåg var du kom från. Du står mitt på en väg och funderar åt vilket håll du ska för att komma hem? ska du ta höger elle vänster?",
        choices: ["höger", "vänster"],
        nextScene: [1, 4]

    },
    {
        description: "Du går och går. Nu är du hungrig, törstig och du fryser, helt plöstligt ser du en liten stuga gömd bakom träden. på dörren står de välkommen! vad gör du? knackar på eller springer?",
        choices: ["knackar på", "springer"],
        nextScene: [2, 4]
    },

    {
        description: "En gammal kvinna öppnar dörren. Hon har en lång näsa med en stor vårta på. Det står två tallikar serverade med mat på bordet. kvinnan drar ut stolen för dig och ber dig att sitta. vad gör du? sitter eller springer?",
        choices: ["sitter", "springer"],
        nextScene: [3, 4]
    },
    {
        description: "Du sätter dig på stolen och börjar äta, men stolen viker sig ner under golvet och du blir inlåst i en källare. där nere finns inget förutom en stol och ett bord, du märker att de finns en ventelations öppning högt upp på väggen. vad gör du nu? sätter du stolen på bordet och kryper ur ventelationen? ja eller nej",
        choices: ["ja", "nej"],
        nextScene: [4,6]
    },
    {
        description: "Du går på en smal väg mellan träden, du kan höra att det knastrar i grenarna. du vänder dig om för att se om någon är där men du ser ingen. du fortsätter att gå, helt plöstligt hamnar du i en fälla upp i ett träd. du kollar i dina fickor där hittar du en nagelknipsare och en nagelfil. vilken använder du",
        choices: ["nagelknipsare", "nagelfil"],
        nextScene: [5,5]
    },
    
    {
        description: "Du springer raka vägen därifrån de snabbaste du bara kan och snart är du hemma safe and sound. VILL DU SPELA IGEN? ja eller nej",
        choices: ["ja", "nej"],
        nextScene: [0,0]
    },
    {
        description: "du sitter kvar i källaren ett tag och vågar inte rymma ifall hexan kommer på dig. nu hör du henne slippa sina knivar och mummla med en gäll och pipig röst idag ska de bli kalas yiiiiii. du blir så rädd att sätter stole på borden och kryper ut väntilen och springer därifrån så snabbt de bara går. VILL DU SPELA IGEN? ja eller nej",
        choices: ["ja", "nej"],
        nextScene: [0,0]
    }

];

// Define Actions

function presentScene() {
    const answer = prompt(scenes[currentScene].description);
    handelUserChoice(answer)
}

function handelUserChoice(answer) {
    console.log(answer)
    
    

    if (answer === scenes[currentScene].choices[0]) {
        currentScene = scenes[currentScene].nextScene[0]
    }
    if (answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene[1]
    }
    if (answer === scenes[currentScene].choices[2]) {
        currentScene = scenes[currentScene].nextScene[2]
    }
    if (answer === scenes[currentScene].choices[3]) {
        currentScene = scenes[currentScene].nextScene[3]
    }
    if (answer === scenes[currentScene].choices[4]) {
        currentScene = scenes[currentScene].nextScene[4]
    }
    if (answer === scenes[currentScene].choices[5]) {
        currentScene = scenes[currentScene].nextScene[5]
    }
    if (answer === scenes[currentScene].choices[6]) {
        currentScene = scenes[currentScene].nextScene[6]
    }
    

    // present scene

    presentScene()
}

















