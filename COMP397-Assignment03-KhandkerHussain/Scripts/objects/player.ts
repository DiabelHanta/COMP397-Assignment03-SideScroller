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
            //play engine sound
            createjs.Sound.play("backgroundMusic", 0, 0, 0, -1, 1, 0);
        }

        //NOTE: COMMENT TYPE USED FOR METHOD DEFINITION
        /**
         * update method for plane class
         */
        public update(): void
        {
            //finding mouse position on x-axis (follows mouse)
            this.y = stage.mouseY;
        }
    }
}