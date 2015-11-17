module objects
{
    //PLANE CLASS
    export class Player extends objects.GameObject
    {
        //CONSTRUCTOR
        constructor()
        {
            super("player");

            //position
            this.x = 100;
<<<<<<< HEAD
            //play background music sound
=======
            //play engine sound
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
            createjs.Sound.play("backgroundMusic", 0, 0, 0, -1, 1, 0);
        }

        //NOTE: COMMENT TYPE USED FOR METHOD DEFINITION
        /**
<<<<<<< HEAD
         * update method for player class
         */
        public update(): void
        {
            //finding mouse position on y-axis (follows mouse)
=======
         * update method for plane class
         */
        public update(): void
        {
            //finding mouse position on x-axis (follows mouse)
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
            this.y = stage.mouseY;
        }
    }
}