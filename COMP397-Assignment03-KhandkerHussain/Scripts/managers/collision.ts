module managers
{
    export class Collision
    {
<<<<<<< HEAD
=======

>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
        /**
         * Empyty Constructor - no parameters
         */
        constructor()
        {
<<<<<<< HEAD
=======
            
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
        }

        /**
         * Update method
         */
        public update(object1: objects.GameObject, object2: objects.GameObject): void
        {
            this._checkCollision(object1, object2);
        }

        //PRIVATE METHODS
        /**
         * PRIVATE UTILITY METHOD - DISTANCE - RETURNS DISTANCE BETWEEN TWO POINTS IN PIXELS
         */
<<<<<<< HEAD
        private _distance(p1: createjs.Point, p2: createjs.Point): number
        {
=======
        private _distance(p1: createjs.Point, p2: createjs.Point): number {
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        /**
         * PRIVATE UTILITY METHOD that checks collision between the plans object and other objects
         */
        private _checkCollision(object1: objects.GameObject, object2: objects.GameObject): void
        {
            //COLLISION METHOD - check the distance b/w the plane and the other objects
<<<<<<< HEAD
            if (this._distance(object1.getPosition(), object2.getPosition()) < (object1.getHalfHeight() + object2.getHalfHeight()))
            {
=======
            if (this._distance(object1.getPosition(), object2.getPosition()) < (object1.getHalfHeight() + object2.getHalfHeight())) {
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
                //CHECKS IF PLANE IS NOT ALREADY COLLIDING
                if (!object2.getIsColliding())
                {
                    //DISTINGUISHES WHAT THE OBJECT (IN THIS CASE: PLANE) HITS (EITHER CLOUD/ISLAND)
                    switch (object2.getName())
                    {
<<<<<<< HEAD
                        case "BlueCrystal":
                            scoreboard.addScore(10);    
                            createjs.Sound.play("pickup");
                            break;
                        case "enemy":
                            scoreboard.removeLives(1);
                            createjs.Sound.play("explode");
                            //HELP: INSERT FUNCTION TO REMOVE CRYSTAL ONCE CONTACTED!
                            break;
=======
                        case "island":
                            scoreboard.addScore(100);
                            createjs.Sound.play("yay");
                            break;
                        case "cloud":
                            scoreboard.removeLives(1);
                            createjs.Sound.play("thunder");
                            break;

>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
                    }
                    object2.setIsColliding(true);
                }
            }
            else
            {
                object2.setIsColliding(false);
            }
        } 
    }
}