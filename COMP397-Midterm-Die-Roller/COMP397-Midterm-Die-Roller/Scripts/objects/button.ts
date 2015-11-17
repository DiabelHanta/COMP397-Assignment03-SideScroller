module objects
{
    export class Button extends createjs.Bitmap
    {
        //PRIVATE INSTANCE VARIABLES
        _width: number;
        _height: number;
        //CONSTRUCTOR
        constructor(pathString: string, x: number, y: number)
        {
            super(assets.getResult(pathString));
            this.x = x;
            this.y = y; 

            this._width = 150;
            this._height = 50;

            this.regX = this._width * 0.5;
            this.regY = this._height * 0.5;
        }

        // PRIVATE METHODS
        // Event Handler for mouse over
        overButton(event: createjs.MouseEvent): void
        {
            event.currentTarget.alpha = 0.7;
        }

        // Event Handler for mouse out
        outButton(event: createjs.MouseEvent): void
        {
            event.currentTarget.alpha = 1.0;
        }
    }
} 