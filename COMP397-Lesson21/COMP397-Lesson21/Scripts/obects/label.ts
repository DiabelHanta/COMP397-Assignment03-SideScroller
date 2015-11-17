module objects
{
    // Label Class
    export class Label extends createjs.Text
    {
        // Constructor Method
        constructor(labelString: string, labelFont: string, labelColour: string, x:number, y:number)
        {
            super(labelString, labelFont, labelColour);
            this.regX = helloLabel.getBounds().width * 0.5;
            this.regY = helloLabel.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
        }
    }
}