module objects
{
    //LABEL CLASS ##############################################################
    export class Label extends createjs.Text
    {
        constructor(labelString: string, labelFont: string, labelColour: string, x:number, y:number, centered:boolean )
        {
            if (centered)
            {
                super(labelString, labelFont, labelColour);
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
        }
    }
}