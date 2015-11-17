/// <reference path="../config/config.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../managers/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />
/// <reference path="../states/menu.ts" />
//GLOBAL GAME FRAMEWORK VARIABLES
var assets;
var canvas;
var stage;
var stats;
var state;
var currentState; //alias for our current state
var atlas; //texture/sprite atlas
//GAME OBJECTS
var menu;
var game;
var over;
//MANAGERS
var scoreboard;
//TEXTURE ATLAS - ALL JSON FILES
var data = {
    "images": [
        "../../Assets/images/atlas.png"
    ],
    "frames": [
        [1, 1, 241, 168, 0, 0, 0],
        [244, 1, 136, 111, 0, 0, 0],
        [244, 114, 91, 91, 0, 0, 0],
        [337, 114, 75, 99, 0, 0, -1],
        [382, 1, 20, 52, 0, 0, 0],
        [382, 55, 20, 52, 0, 0, 0],
        [1, 171, 80, 55, 0, 0, 0],
        [83, 171, 44, 42, 0, 0, 0],
        [129, 171, 32, 31, 0, 0, 0],
        [163, 171, 30, 29, 0, -1, -1],
        [195, 171, 20, 52, 0, 0, 0]
    ],
    "animations": {
        "nebula": [0],
        "meteorBig": [1],
        "enemyUFO": [2],
        "enemy": [3],
        "BlueCrystal": [4],
        "GreenCrystal": [5],
        "player": [6],
        "meteorSmall": [7],
        "ship1": [8],
        "enemyship": [9],
        "PurpleCrystal": [10]
    }
};
//MANIFEST OF ALL ASSETS (ARRAY)
var manifest = [
    { id: "startButton", src: "../../Assets/images/startButton.png" },
    { id: "menuButton", src: "../../Assets/images/menuButton.png" },
    { id: "background", src: "../../Assets/images/background.png" },
    { id: "backgroundMusic", src: "../../Assets/audio/backgroundMusic.mp3" },
    { id: "gameOver", src: "../../Assets/audio/gameOver.mp3" },
    { id: "explode", src: "../../Assets/audio/explode.wav" },
    { id: "pickup", src: "../../Assets/audio/pickup.wav" }
];
//PRELOAD METHOD
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //SPRITE SHEET IS CONFIGIRUED
    atlas = new createjs.SpriteSheet(data);
}
//INITIALZING METHOD
function init() {
    canvas = document.getElementById("canvas"); //canvas reference
    stage = new createjs.Stage(canvas); //passing canvas to stage
    stage.enableMouseOver(20); //enables mouse events
    createjs.Ticker.setFPS(60); //framerate set to 60fps
    //note: parameter("enum", function/callback);
    createjs.Ticker.on("tick", gameLoop); //updates game's loop every frame
    setUpStats(); //sets up the stats counting
    scoreboard = new managers.ScoreBoard();
    state = config.MENU_STATE; //of index of "0"
    changeState(state);
}
// MAIN GAME LOOP
function gameLoop(event) {
    stats.begin(); //start counting
    currentState.update(); //calling State's update method(s)
    stage.update(); //redraws stage every frame
    stats.end(); //stop counting
}
//SET UP GAME STATS
function setUpStats() {
    stats = new Stats();
    stats.setMode(0); //shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement); //adding stats to html document
}
//STATE MACHINE PREP
function changeState(state) {
    //launch many scenes
    switch (state) {
        case config.MENU_STATE:
            //SHOW THE MENU SCENE
            stage.removeAllChildren(); //removes every object before going to another state
            menu = new states.Start();
            currentState = menu; //referring to menu.ts
            break;
        case config.GAME_STATE:
            //SHOW THE PLAY SCENE
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game; //referring to game.ts (the state folder..not the core folder)
            break;
        case config.OVER_STATE:
            //SHOW THE OVER SCENE
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over; //referring to game.ts (the state folder..not the core folder)
            break;
    }
    currentState.start(); //calls start() from menu.ts
    //DEBUGGING PURPOSES (BELOW):
    //console.log(stage.numChildren); //checks the number of children in the stage (ie. states: menu/game/over) - ANSWER: 1 CHILD
    console.log(currentState.numChildren); //checks the number of children in current state (ie. objects: label + button) - ANSWER: 2 CHILDREN
}
//# sourceMappingURL=game.js.map