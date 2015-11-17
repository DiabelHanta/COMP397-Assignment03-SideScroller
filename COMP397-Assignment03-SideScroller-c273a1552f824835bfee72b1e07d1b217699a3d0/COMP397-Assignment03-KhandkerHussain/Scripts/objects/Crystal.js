var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Crystal = (function (_super) {
        __extends(Crystal, _super);
        //CONSTRUCTOR
        function Crystal() {
            _super.call(this, "BlueCrystal");
            this._dx = 5;
            this._reset(); //resets x position of crystal
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        Crystal.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        //PRIVATE METHODS
        /**
         * Resetes Jewel to y= -960
         */
        Crystal.prototype._reset = function () {
            //random location
            this.y = Math.floor(Math.random() * 480);
            this.x = this._width + 640;
        };
        /**
         * Checks to see when ocean needs to "reset"
         */
        Crystal.prototype._checkBounds = function () {
            //conditional to call reset() to reposition the y-axis
            if (this.x <= -(480 + this._width)) {
                this._reset();
            }
        };
        return Crystal;
    })(objects.GameObject);
    objects.Crystal = Crystal;
})(objects || (objects = {}));
//# sourceMappingURL=crystal.js.map