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
            //play background music sound
            createjs.Sound.play("backgroundMusic", 0, 0, 0, -1, 1, 0);
        }
        //NOTE: COMMENT TYPE USED FOR METHOD DEFINITION
        /**
         * update method for player class
         */
        Player.prototype.update = function () {
            //finding mouse position on y-axis (follows mouse)
            this.y = stage.mouseY;
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map