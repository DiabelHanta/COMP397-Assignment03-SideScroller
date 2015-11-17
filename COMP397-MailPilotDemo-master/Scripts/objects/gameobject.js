var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Game Object Class
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        function GameObject(imageString) {
            _super.call(this, atlas, imageString);
            this._name = imageString;
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this.regX = this._width * 0.5;
            this.regY = this._height * 0.5;
            this._isColliding = false;
        }
        // UTILITY METHOD TO get current position
        GameObject.prototype.getPosition = function () {
            var position = new createjs.Point(this.x, this.y);
            return position;
        };
        // UTility METHOD to get half the height of the object
        GameObject.prototype.getHalfHeight = function () {
            return this._height * 0.5;
        };
        // Getter Method to check collision flag of object
        GameObject.prototype.getIsColliding = function () {
            return this._isColliding;
        };
        // Setter Method to set the collision flag of the object - true or false
        GameObject.prototype.setIsColliding = function (isColliding) {
            this._isColliding = isColliding;
        };
        //Getter Method to get the name of the object
        GameObject.prototype.getName = function () {
            return this._name;
        };
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map