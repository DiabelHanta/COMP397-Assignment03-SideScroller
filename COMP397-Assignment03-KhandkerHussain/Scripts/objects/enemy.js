var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //CLOUD CLASS
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        //CONSTRUCTOR
        function Enemy() {
            _super.call(this, "enemy");
            this._reset(); //resets y position of ocean
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        Enemy.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
            this._checkBounds();
        };
        //PRIVATE METHODS
        /**
         * Resetes Ocean to y= -960
         */
        Enemy.prototype._reset = function () {
            this._dx = Math.floor(Math.random() * 4) - 2; //"horizontal drift"
            this._dy = Math.floor(Math.random() * 5) + 5; //vertical speed
            //random location on x-axis. (note: + 1 shifts the initial position from canvas to right
            this.x = Math.floor(Math.random() * 640) + 1;
            this.y = -this._height;
        };
        /**
         * Checks to see when ocean needs to "reset"
         */
        Enemy.prototype._checkBounds = function () {
            //conditional to call reset() to reposition the y-axis
            if (this.y >= (480 + this._height)) {
                this._reset();
            }
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map