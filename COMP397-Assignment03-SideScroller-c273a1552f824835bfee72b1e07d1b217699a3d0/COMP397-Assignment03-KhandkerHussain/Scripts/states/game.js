var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//MENU STATE
var states;
(function (states) {
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    var Game = (function (_super) {
        __extends(Game, _super);
        //CONSTRUCTOR
        function Game() {
            _super.call(this);
            //instantiates objects as an array of any "enemies"
            this.Enemies = []; //array of enemies
        }
        //PUBLIC METHODS
        //OVERRIDING THE FOLLOWING FUNCTIONS (from scene.ts)
        Game.prototype.start = function () {
            //########################### LAYERING HIERARCHY ###################################
            //RESETS SCOREBOARD
            scoreboard.setLives(5);
            scoreboard.setScore(0);
            console.log(scoreboard.getLives());
            console.log(scoreboard.getScore());
            //adds background to scene
            this._background = new objects.Background(); //referring ship type object to player's sprite w/i "ship.ts"
            this.addChild(this._background); //adding ship sprite
            //adds crsytal to scene
            this._crystal = new objects.Crystal();
            this.addChild(this._crystal);
            //adds player to scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //adds enemies ARRAY to scene
            for (var enemy = 0; enemy < 3; enemy++) {
                this.Enemies[enemy] = new objects.Enemy();
                this.addChild(this.Enemies[enemy]);
            }
            //adds score label to scene
            this._scoreLabel = new objects.Label("Score: ", "40px Showcard Gothic", "#FFFFFF", 100, 25, true);
            this.addChild(this._scoreLabel);
            //adds lives label to scene
            this._livesLabel = new objects.Label("Lives: ", "40px Showcard Gothic", "#FFFFFF", 400, 25, true);
            this.addChild(this._livesLabel);
            //INSTANTIATE COLLISION MANAGER
            this._collision = new managers.Collision();
            //adds stage
            stage.addChild(this); //use: scene?
        };
        //updates the scene every frame
        Game.prototype.update = function () {
            this._background.update(); //calling background's update() from "background.ts"
            this._crystal.update(); //calling Crystal's update() from "crystal.ts"
            this._player.update(); //calling player's update() from "player.ts"
            //update each enemies to scene
            for (var enemy = 0; enemy < 3; enemy++) {
                this.Enemies[enemy].update(); //calling enemy's update() from "enemy.ts"
                this._collision.update(this._player, this.Enemies[enemy]);
            }
            //COLLISION B/W player AND crystal
            this._collision.update(this._player, this._crystal);
            this._updateScore();
            this._gameOver();
        };
        //PRIVATE METHODS
        //UPDATING THE LABELS
        Game.prototype._updateScore = function () {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
        };
        //Change state/scene
        Game.prototype._gameOver = function () {
            //Conditional to call the "over" state when player has 0 lives
            if (scoreboard.getLives() == 0) {
                createjs.Sound.stop();
                changeState(config.OVER_STATE);
            }
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map