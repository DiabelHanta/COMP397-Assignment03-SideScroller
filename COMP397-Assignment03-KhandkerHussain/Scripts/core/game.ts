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
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/scene.ts" />

/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />
/// <reference path="../states/menu.ts" />

//GLOBAL GAME FRAMEWORK VARIABLES
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var currentState: objects.Scene; //alias for our current state
var atlasPlayer: createjs.SpriteSheet; //texture/sprite atlas

//GAME OBJECTS
var menu: states.Start;
var game: states.Game;
var over: states.Over;

//MANAGERS
var scoreboard: managers.ScoreBoard;

//TEXTURE ATLAS - ALL JSON FILES
var dataPlayer =
    {
        "images":
        [
            "atlas.png"
        ],

        "frames":
        [
            [1, 1, 104, 70, 0, 0, 0],
            [107, 1, 80, 55, 0, 0, 0]
        ],

        "animations":
        {
            "ship.fw": [0],
            "player": [1]
        }
    };

var dataEnemy =
    {

        "images":
        [
            "atlasEnemy.png"
        ],

        "frames":
        [
            [1, 1, 91, 91, 0, 0, 0],
            [94, 1, 99, 75, 0, 0, 0]
        ],

        "animations":
        {
            "enemyUFO": [0],
            "enemy": [1]
        }
    };

var dataPickup =
    {

        "images":
        [
            "atlasPickup.png"
        ],

        "frames":
        [
            [1, 1, 20, 52, 0, 0, 0],
            [1, 55, 20, 52, 0, 0, 0],
            [1, 109, 20, 52, 0, 0, 0]
        ],

        "animations":
        {
            "BlueCrystal": [0],
            "GreenCrystal": [1],
            "PurpleCrystal": [2]
        }
    }



//MANIFEST OF ALL ASSETS (ARRAY)
var manifest =
    [
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "background", src: "../../Assets/images/background.png" },
        { id: "backgroundMusic", src: "../../Assets/audio/backgroundMusic.mp3" },
        { id: "explode", src: "../../Assets/audio/explode.wav" },
        { id: "pickup", src: "../../Assets/audio/pickup.wav" }
    ];

//PRELOAD METHOD
function preload():void
{
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);

    //SPRITE SHEET IS CONFIGIRUED
    atlasPlayer = new createjs.SpriteSheet(dataPlayer);
}

//INITIALZING METHOD
function init():void //refactor to: start?
{
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
function gameLoop(event: createjs.Event): void
{
    stats.begin(); //start counting

    currentState.update(); //calling State's update method(s)
    stage.update(); //redraws stage every frame

    stats.end(); //stop counting
}

//SET UP GAME STATS
function setUpStats() :void
{
    stats = new Stats();
    stats.setMode(0); //shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);//adding stats to html document
}

//STATE MACHINE PREP
function changeState(state):void
{
    //launch many scenes
    switch (state)
    {
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