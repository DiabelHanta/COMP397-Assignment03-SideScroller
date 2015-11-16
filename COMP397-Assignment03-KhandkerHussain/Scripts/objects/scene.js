var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //DECLARED SCENE CLASS
    var Scene = (function (_super) {
        __extends(Scene, _super);
        //CONSTRUCTORS
        function Scene() {
            _super.call(this);
        } //constructor
        //PUBLIC METHODS
        Scene.prototype.start = function () {
        }; //start
        Scene.prototype.update = function () {
        }; //update
        return Scene;
    })(createjs.Container);
    objects.Scene = Scene; //exported class
})(objects || (objects = {})); //module
//# sourceMappingURL=scene.js.map