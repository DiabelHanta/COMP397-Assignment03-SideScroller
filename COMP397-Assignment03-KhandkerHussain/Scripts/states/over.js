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
            //LEVEL LABEL
            this._levelLabel = new objects.Label("Game Over!", "60px Verdana", "#000000", 320, 220, true);
            this.addChild(this._levelLabel); //adds "helloLabel" to the stage as a "child"
            //BACK BUTTON
            this._backButton = new objects.Button("BackButton", 220, 340);
            //event listener
            this._backButton.on("click", this._clickBackButton, this);
            this.addChild(this._backButton);
            stage.addChild(this); //use: scene?
        };
        Over.prototype.update = function () {
            //rotates label
            this._levelLabel.rotation += 5; //number = degrees
        };
        //PRIVATE METHODS
        //CALLBACK FUNCTIONS/EVENT HANDLER FOR BACK BUTTON "click"
        Over.prototype._clickBackButton = function (event) {
            changeState(config.GAME_STATE); //transferring between states
        };
        return Over;
    })(objects.Scene);
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map