module objects
{
    export class Crystal extends objects.GameObject
    {
        //PRIVATE INSTANCE VARIABLES
        private _dx: number; //change to: speed?


        //CONSTRUCTOR
        constructor()
        {
            super("BlueCrystal");

            this._dx = 5;
            this._reset(); //resets x position of crystal
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        public update(): void
        {
            this.x -= this._dx;
            this._checkBounds();
        }

        //PRIVATE METHODS
        /**
         * Resetes Jewel to y= -960
         */
        private _reset(): void
        {
            //random location
            this.y = Math.floor(Math.random() * 480);
            this.x = this._width + 640;
        }

        /**
         * Checks to see when ocean needs to "reset"
         */
        private _checkBounds(): void
        {
            //conditional to call reset() to reposition the y-axis
            if (this.x <= -(480 + this._width))
            {
                this._reset();
            }
        }
    }
}