module objects
{
    //CLOUD CLASS
    export class Enemy extends objects.GameObject
    {
        //PRIVATE INSTANCE VARIABLES
        private _dx: number; //change to: speed?
        private _dy: number; //"drift"

        //CONSTRUCTOR
        constructor()
        {
            super("enemy");

            this._reset(); //resets x position of enemy
        }
        //PUBLIC METHODS
        /**
         * Update method for enemy
         */
        public update(): void
        {
            this.x -= this._dx;
            this.y -= this._dy;
            this._checkBounds();
        }

        //PRIVATE METHODS
        /**
         * Resetes background to y= -960
         */
        private _reset(): void
        {
            this._dx = Math.floor(Math.random() * 5) + 5; //horizontal speed
            this._dy = Math.floor(Math.random() * 4) - 2; //"vertical drift"

            //random location
            this.y = Math.floor(Math.random() * 480);
            this.x = (this._width + 640); //right side of canvas
        }

        /**
         * Checks to see when background needs to "reset"
         */
        private _checkBounds(): void
        {
            //conditional to call reset() to reposition the y-axis
            if (this.x <= -(480 + this._width)) //set to -640 (imaginary boundary on the left side past the canvas)
            {
                this._reset();
            }
        }
    }
}