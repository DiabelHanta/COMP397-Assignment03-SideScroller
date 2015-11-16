module objects
{
    export class Ocean extends createjs.Bitmap
    {
        //PRIVATE INSTANCE VARIABLES
        private _dy: number; //change to: speed?


        //CONSTRUCTOR
        constructor()
        {
            super(assets.getResult("ocean"));

            this._dy = 5;
            this._reset(); //resets y position of ocean
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        public update():void
        {
            this.y += this._dy;
            this._checkBounds();
        }

        //PRIVATE METHODS
        /**
         * Resetes Ocean to y= -960
         */
        private _reset(): void
        { 
            this.y = -960;
        }

        /**
         * Checks to see when ocean needs to "reset"
         */
        private _checkBounds(): void
        {
            //conditional to call reset() to reposition the y-axis
            if (this.y >= 0)
            {
                this._reset();
            }
        }
    }
}