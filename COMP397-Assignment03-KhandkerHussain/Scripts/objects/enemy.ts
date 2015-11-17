module objects
{
    //CLOUD CLASS
    export class Enemy extends objects.GameObject
    {
        //PRIVATE INSTANCE VARIABLES
<<<<<<< HEAD
        private _dx: number; //change to: speed?
        private _dy: number; //"drift"
=======
        private _dy: number; //"drift"
        private _dx: number; //change to: speed?
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b

        //CONSTRUCTOR
        constructor()
        {
            super("enemy");

<<<<<<< HEAD
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
=======
            this._reset(); //resets y position of ocean
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        public update(): void
        {
            this.x += this._dx;
            this.y += this._dy;
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
            this._checkBounds();
        }

        //PRIVATE METHODS
        /**
<<<<<<< HEAD
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
=======
         * Resetes Ocean to y= -960
         */
        private _reset(): void
        {
            this._dx = Math.floor(Math.random() * 4) - 2; //"horizontal drift"
            this._dy = Math.floor(Math.random() * 5) + 5; //vertical speed

            //random location on x-axis. (note: + 1 shifts the initial position from canvas to right
            this.x = Math.floor(Math.random() * 640) + 1;
            this.y = -this._height;
        }

        /**
         * Checks to see when ocean needs to "reset"
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
         */
        private _checkBounds(): void
        {
            //conditional to call reset() to reposition the y-axis
<<<<<<< HEAD
            if (this.x <= -(480 + this._width)) //set to -640 (imaginary boundary on the left side past the canvas)
=======
            if (this.y >= (480 + this._height))
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
            {
                this._reset();
            }
        }
    }
}