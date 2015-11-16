//MENU STATE
module states
{
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    export class Menu extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _mailPilotLabel: objects.Label; //(example of: composition - classes share objects)
        private _startButton: objects.Button;

        //CONSTRUCTOR
        constructor()
        {
            super();
        }

        //PUBLIC METHODS
        //OVERRIDING THE FOLLOWING FUNCTIONS (from scene.ts)
        public start(): void
        {
            //OCEAN OBJECT
            this._ocean = new objects.Ocean(); //referring plane type object to plane's sprite w/i "plane.ts"
            this.addChild(this._ocean); //adding plane sprite

            //HELLO LABEL
            this._mailPilotLabel = new objects.Label("MAIL PILOT!", "80px Verdana", "#000000", 320, 140, true);
            this.addChild(this._mailPilotLabel); //adds "helloLabel" to the stage as a "child"

            //START BUTTON
            this._startButton = new objects.Button("StartButton", 320, 340);
            //event listener
            this._startButton.on("click", this._clickStartButton, this);
            this.addChild(this._startButton);

            stage.addChild(this); //use: scene?
        }

        public update(): void
        {
            this._ocean.update(); //calling ocean's update() from "ocean.ts"
        }

        //PRIVATE METHODS
        //CALLBACK FUNCTIONS/EVENT HANDLER FOR START BUTTON "click"
        private _clickStartButton(event: createjs.MouseEvent): void 
        {
            changeState(config.GAME_STATE);
        }
    }
}