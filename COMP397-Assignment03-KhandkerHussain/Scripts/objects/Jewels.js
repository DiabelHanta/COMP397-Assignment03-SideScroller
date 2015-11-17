var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Jewels = (function (_super) {
        __extends(Jewels, _super);
        //CONSTRUCTOR
        function Jewels() {
            _super.call(this, "island");
            this._dy = 5;
            this._reset(); //resets y position of ocean
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        Jewels.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        //PRIVATE METHODS
        /**
         * Resetes Ocean to y= -960
         */
        Jewels.prototype._reset = function () {
            //random location on x-axis. (note: + 1 shifts the initial position from canvas to right
            this.x = Math.floor(Math.random() * 640) + 1;
            this.y = -this._height;
        };
        /**
         * Checks to see when ocean needs to "reset"
         */
        Jewels.prototype._checkBounds = function () {
            //conditional to call reset() to reposition the y-axis
            if (this.y >= (480 + this._height)) {
                this._reset();
            }
        };
        return Jewels;
    })(objects.GameObject);
    objects.Jewels = Jewels;
})(objects || (objects = {}));
//# sourceMappingURL=Jewels.js.map