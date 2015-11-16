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
            _super.call(this, assets.getResult("background"));
            this._dx = 2.5;
            this._reset(); //resets y position of Background
        }
        //PUBLIC METHODS
        /**
         * Update method for Background
         */
        Background.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        //PRIVATE METHODS
        /**
         * Resetes Background to x= 0
         */
        Background.prototype._reset = function () {
            this.x = 0;
        };
        /**
         * Checks to see when Background needs to "reset"
         */
        Background.prototype._checkBounds = function () {
            //conditional to call reset() to reposition the y-axis
            if (this.x <= -790) {
                this._reset();
            }
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map