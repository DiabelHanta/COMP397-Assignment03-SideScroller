var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //GAME OBJECT CLASS
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUCTOR
        function GameObject(imageString) {
            _super.call(this, atlas, imageString);
            this._name = imageString;
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this.regX = this._width * 0.5;
            this.regY = this._height * 0.5;
            this._isColliding = false;
        }
        //UTILITY METHOD TO GET CURRENT POSITION
        GameObject.prototype.getPosition = function () {
            var position = new createjs.Point(this.x, this.y);
            return position;
        };
        //UTILITY METHOD TO GET HALF HEIGHT OF OBJECT
        GameObject.prototype.getHalfHeight = function () {
            return this._height * 0.5; //returning half of the totla height
        };
        //GETTER METHOD TO CHECK COLLISION FLAG OF OBJECT
        GameObject.prototype.getIsColliding = function () {
            return this._isColliding;
        };
        //SETTER METHOD TO SET COLLISION FLAG OF OBJECT - TRUE OR FALSE
        GameObject.prototype.setIsColliding = function (isColliding) {
            this._isColliding = isColliding;
        };
        //GETTER METHOD TO CHECK NAME OF OBJECT (TAG NAME)
        GameObject.prototype.getName = function () {
            return this._name;
        };
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map