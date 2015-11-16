var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Background = (function (_super) {
        __extends(Background, _super);
        //CONSTRUCTOR
        function Background() {
            _super.call(this, assets.getResult("ocean"));
            this._dy = 5;
            this._reset(); //resets y position of ocean
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        Background.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        //PRIVATE METHODS
        /**
         * Resetes Ocean to y= -960
         */
        Background.prototype._reset = function () {
            this.y = -960;
        };
        /**
         * Checks to see when ocean needs to "reset"
         */
        Background.prototype._checkBounds = function () {
            //conditional to call reset() to reposition the y-axis
            if (this.y >= 0) {
                this._reset();
            }
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map