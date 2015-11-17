var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//MENU STATE
var states;
(function (states) {
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    var Over = (function (_super) {
        __extends(Over, _super);
        //CONSTRUCTOR
        function Over() {
            _super.call(this);
        }
        //PUBLIC METHODS
        //OVERRIDING THE FOLLOWING FUNCTIONS (from scene.ts)
        Over.prototype.start = function () {
            //Gameover music
            createjs.Sound.play("gameOver", 0, 0, 0, -1, 1, 0);
            //GAME OVER LABEL
            this._gameOverLabel = new objects.Label("Game Over!", "40px Showcard Gothic", "#000000", 320, 100, true);
            this.addChild(this._gameOverLabel);
            ////FINAL SCORE LABEL
            //this._finalScoreLabel = new objects.Label("Game Over!", "40px Showcard Gothic", "#000000", 320, 100, true);
            //this.addChild(this._finalScoreLabel);
            //BACK BUTTON
            this._menuButton = new objects.Button("menuButton", 320, 300);
            //event listener
            this._menuButton.on("click", this._clickBackButton, this);
            this.addChild(this._menuButton);
            stage.addChild(this); //use: scene?
        };
        Over.prototype.update = function () {
        };
        //PRIVATE METHODS
        //CALLBACK FUNCTIONS/EVENT HANDLER FOR BACK BUTTON "click"
        Over.prototype._clickBackButton = function (event) {
            createjs.Sound.stop();
            changeState(config.MENU_STATE); //transferring back to menu
        };
        return Over;
    })(objects.Scene);
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map