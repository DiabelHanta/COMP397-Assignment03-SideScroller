/*
    Khandker Faim Hussain,
    10/30/2015,
    Die-Roller
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // MENU CLASS
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Menu.prototype.start = function () {
            // text label
            this._titleLabel = new objects.Label("Roll the dice", "60px Consolas", "#000000", 320, 60);
            this.addChild(this._titleLabel); // add label to the stage
            // roll button
            this._rollDice = new objects.Button("roll", 350, 340);
            this._rollDice.on("click", this._clickRollDice, this); // event listener
            //INSERT: RANDOMIZER
            this.addChild(this._rollDice);
            // first die
            this._die3 = new objects.Button("die3", 320, 230);
            this.addChild(this._die3);
            // second die
            this._die2 = new objects.Button("die2", 420, 230);
            this.addChild(this._die2);
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        // Callback function / Event Handler for roll Button Click
        Menu.prototype._clickRollDice = function (event) {
            //Randomize
            Math.floor((Math.random() * 6) + 1);
        };
        return Menu;
    })(objects.Scene);
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map