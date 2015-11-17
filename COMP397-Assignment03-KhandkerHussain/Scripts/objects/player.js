var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //PLANE CLASS
    var Player = (function (_super) {
        __extends(Player, _super);
        //CONSTRUCTOR
        function Player() {
            _super.call(this, "player");
            //position
            this.x = 100;
<<<<<<< HEAD
            //play background music sound
=======
            //play engine sound
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
            createjs.Sound.play("backgroundMusic", 0, 0, 0, -1, 1, 0);
        }
        //NOTE: COMMENT TYPE USED FOR METHOD DEFINITION
        /**
<<<<<<< HEAD
         * update method for player class
         */
        Player.prototype.update = function () {
            //finding mouse position on y-axis (follows mouse)
=======
         * update method for plane class
         */
        Player.prototype.update = function () {
            //finding mouse position on x-axis (follows mouse)
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
            this.y = stage.mouseY;
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map