module objects
{
    //CLOUD CLASS
    export class Cloud extends objects.GameObject
    {
        //PRIVATE INSTANCE VARIABLES
        private _dx: number; //change to: speed?
        private _dy: number; //"drift"

        //CONSTRUCTOR
        constructor() 
        {
            super("enemy");

            this._reset(); //resets y position of ocean
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        public update(): void
        {
            this.x -= this._dx;
            this.y -= this._dy;
            this._checkBounds();
        }

        //PRIVATE METHODS
        /**
         * Resetes Ocean to y= -960
         */
        private _reset(): void
        {
            this._dx = Math.floor(Math.random() * 5) + 5; //horizontal speed
            this._dy = Math.floor(Math.random() * 4) - 2; //"vertical drift"

            //random location on x-axis. (note: + 1 shifts the initial position from canvas to right
            this.x = 640 + this._width;
            this.y = Math.floor(Math.random() * (480 - this._height)) + (this._height * 0.5);
        }

        /**
         * Checks to see when ocean needs to "reset"
         */
        private _checkBounds(): void
        {
            //conditional to call reset() to reposition the y-axis
            if (this.x >= -this._width)
            {
                this._reset();
            }
        }
    }
}