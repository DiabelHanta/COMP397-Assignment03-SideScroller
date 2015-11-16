module objects
{
    //PLANE CLASS
    export class Plane extends objects.GameObject
    {
        //CONSTRUCTOR
        constructor()
        {
            super("plane");
            
            this.y = 430;
            //play engine sound
            createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
        }

        //NOTE: COMMENT TYPE USED FOR METHOD DEFINITION
        /**
         * update method for plane class
         */
        public update():void
        {
            //finding mouse position (follows mouse)
            this.x = stage.mouseX;
        }
    }
}