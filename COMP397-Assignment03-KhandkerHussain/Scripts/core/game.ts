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
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/ocean.ts" />
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
var atlas: createjs.SpriteSheet; //texture/sprite atlas

//GAME OBJECTS
var menu: states.Menu;
var game: states.Game;
var over: states.Over;

//MANAGERS
var scoreboard: managers.ScoreBoard;

//TEXTURE ATLAS
var data =
    {

        "images": [
            "../../Assets/images/atlas.png"
        ],

        "frames": [
            [1, 1, 226, 178, 0, 0, 0],
            [1, 181, 62, 62, 0, 0, 0],
            [65, 181, 62, 51, 0, -3, -9],
            [129, 181, 150, 50, 0, 0, 0]
        ],

        "animations": {
            "cloud": [0],
            "island": [1],
            "plane": [2],
            "StartButton": [3]
        }

    };


//MANIFEST OF ALL ASSETS (ARRAY)
var manifest =
    [
        { id: "StartButton", src: "../../Assets/images/StartButton.png" },
        { id: "ocean", src: "../../Assets/images/ocean.gif" },
        { id: "engine", src: "../../Assets/audio/engine.ogg" },
        { id: "thunder", src: "../../Assets/audio/thunder.ogg" },
        { id: "yay", src: "../../Assets/audio/yay.ogg" }
    ];

//PRELOAD METHOD
function preload():void
{
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);

    //SPRITE SHEET IS CONFIGIRUED
    atlas = new createjs.SpriteSheet(data);
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
            menu = new states.Menu();
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