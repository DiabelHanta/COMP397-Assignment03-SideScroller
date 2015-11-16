module objects
{
    export class Background extends createjs.Bitmap 
    {
        //PRIVATE INSTANCE VARIABLES
        private _dx: number; //change to: speed?


        //CONSTRUCTOR
        constructor() {
            super(assets.getResult("background"));

            this._dx = 2.5;
            this._reset(); //resets y position of Background
        }
        //PUBLIC METHODS
        /**
         * Update method for Background
         */
        public update(): void {
            this.x -= this._dx;
            this._checkBounds();
        }

        //PRIVATE METHODS
        /**
         * Resetes Background to x= 0
         */
        private _reset(): void {
            this.x = 0;
        }

        /**
         * Checks to see when Background needs to "reset"
         */
        private _checkBounds(): void {
            //conditional to call reset() to reposition the y-axis
            if (this.x <= -790) {
                this._reset();
            }
        }
    }
}