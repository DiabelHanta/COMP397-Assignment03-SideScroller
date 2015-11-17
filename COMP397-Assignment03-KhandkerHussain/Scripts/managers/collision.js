var managers;
(function (managers) {
    var Collision = (function () {
        /**
         * Empyty Constructor - no parameters
         */
        function Collision() {
        }
        /**
         * Update method
         */
        Collision.prototype.update = function (object1, object2) {
            this._checkCollision(object1, object2);
        };
        //PRIVATE METHODS
        /**
         * PRIVATE UTILITY METHOD - DISTANCE - RETURNS DISTANCE BETWEEN TWO POINTS IN PIXELS
         */
        Collision.prototype._distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        /**
         * PRIVATE UTILITY METHOD that checks collision between the plans object and other objects
         */
        Collision.prototype._checkCollision = function (object1, object2) {
            //COLLISION METHOD - check the distance b/w the plane and the other objects
            if (this._distance(object1.getPosition(), object2.getPosition()) < (object1.getHalfHeight() + object2.getHalfHeight())) {
                //CHECKS IF PLANE IS NOT ALREADY COLLIDING
                if (!object2.getIsColliding()) {
                    //DISTINGUISHES WHAT THE OBJECT (IN THIS CASE: PLANE) HITS (EITHER CLOUD/ISLAND)
                    switch (object2.getName()) {
                        case "BlueCrystal":
                            scoreboard.addScore(10);
                            createjs.Sound.play("pickup");
                            break;
                        case "enemy":
                            scoreboard.removeLives(1);
                            createjs.Sound.play("explode");
                            //HELP: INSERT FUNCTION TO REMOVE CRYSTAL ONCE CONTACTED!
                            break;
                    }
                    object2.setIsColliding(true);
                }
            }
            else {
                object2.setIsColliding(false);
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map