var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//MENU STATE
var states;
(function (states) {
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    var Start = (function (_super) {
        __extends(Start, _super);
        //CONSTRUCTOR
        function Start() {
            _super.call(this);
        }
        //PUBLIC METHODS
        //OVERRIDING THE FOLLOWING FUNCTIONS (from scene.ts)
        Start.prototype.start = function () {
            //BACKGROUND OBJECT
            this._background = new objects.Background(); //referring background type object to background's sprite w/i "background.ts"
            this.addChild(this._background); //adding background sprite
            //HELLO LABEL
            this._gameLabel = new objects.Label("Space Jewels! (not balls...)", "35px Papyrus", "#FFFFFF", 320, 70, true);
            this.addChild(this._gameLabel); //adds "helloLabel" to the stage as a "child"
            //INSTRUCTIONS LABEL
            this._instructions = new objects.Label("Instructions:\n1. Avoid enemy space ships\n2. Pickup jewels\n3. Profit...\n4. You Win!", "25px Papyrus", "#FFFFFF", 360, 225, true);
            this.addChild(this._instructions);
            //START BUTTON
            this._startButton = new objects.Button("startButton", 320, 380);
            //event listener
            this._startButton.on("click", this._clickStartButton, this);
            this.addChild(this._startButton);
            stage.addChild(this); //use: scene?
        };
        Start.prototype.update = function () {
            this._background.update(); //calling background's update() from "background.ts"
        };
        //PRIVATE METHODS
        //CALLBACK FUNCTIONS/EVENT HANDLER FOR START BUTTON "click"
        Start.prototype._clickStartButton = function (event) {
            changeState(config.GAME_STATE);
        };
        return Start;
    })(objects.Scene);
    states.Start = Start;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map