var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //CONSTRUCTOR
        function Button(pathstring, x, y) {
            //Calling this address and .png file ALWAYS
            _super.call(this, assets.getResult(pathstring));
            //POSITION
            this.x = x;
            this.y = y;
            //DIMENSIONS FOR IMAGE
            this.width = 100;
            this.height = 100;
            //OFFSETS
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //MOUSE ON EVENTS
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }
        //PRIVATE METHODS
        //CALLBACK FUNCTIONSEVENT HANDLER FOR START BUTTON "mouseover"
        Button.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        //CALLBACK FUNCTIONSEVENT HANDLER FOR START BUTTON "mouseout"
        Button.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map