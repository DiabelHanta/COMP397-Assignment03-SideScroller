var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //PLANE CLASS
    var Plane = (function (_super) {
        __extends(Plane, _super);
        //CONSTRUCTOR
        function Plane() {
            _super.call(this, "plane");
            this.y = 430;
            //play engine sound
            createjs.Sound.play("backgroundMusic", 0, 0, 0, -1, 1, 0);
        }
        //NOTE: COMMENT TYPE USED FOR METHOD DEFINITION
        /**
         * update method for plane class
         */
        Plane.prototype.update = function () {
            //finding mouse position (follows mouse)
            this.x = stage.mouseX;
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map