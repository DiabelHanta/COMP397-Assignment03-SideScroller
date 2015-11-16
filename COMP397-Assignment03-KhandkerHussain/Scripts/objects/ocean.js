var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        //CONSTRUCTOR
        function Ocean() {
            _super.call(this, assets.getResult("ocean"));
            this._dy = 5;
            this._reset(); //resets y position of ocean
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        Ocean.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        //PRIVATE METHODS
        /**
         * Resetes Ocean to y= -960
         */
        Ocean.prototype._reset = function () {
            this.y = -960;
        };
        /**
         * Checks to see when ocean needs to "reset"
         */
        Ocean.prototype._checkBounds = function () {
            //conditional to call reset() to reposition the y-axis
            if (this.y >= 0) {
                this._reset();
            }
        };
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map