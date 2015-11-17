module objects
{
    export class Button extends createjs.Bitmap
    {
        //PRIVATE INSTANCE VARIABLES
        width: number;
        height: number;

        //CONSTRUCTOR
        constructor(pathstring:string, x:number, y:number)
        {
            //Calling this address and .png file ALWAYS
            super(assets.getResult(pathstring));

            //POSITION
            this.x = x;
            this.y = y;

            //DIMENSIONS FOR IMAGE
            this.width = 100;
            this.height = 100;

            //OFFSETS
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //MOUSE ON EVENTS
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }
        //PRIVATE METHODS
        //CALLBACK FUNCTIONSEVENT HANDLER FOR START BUTTON "mouseover"
        overButton(event: createjs.MouseEvent): void
        {
            event.currentTarget.alpha = 0.7;
        }

        //CALLBACK FUNCTIONSEVENT HANDLER FOR START BUTTON "mouseout"
        outButton(event: createjs.MouseEvent): void
        {
            event.currentTarget.alpha = 1.0;
        }
    }
}