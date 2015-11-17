//MENU STATE
module states
{
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _background: objects.Background;
        private _gameLabel: objects.Label; //(example of: composition - classes share objects)
        private _startButton: objects.Button;
        private _instructions: objects.Label;

        //CONSTRUCTOR
        constructor()
        {
            super();
        }

        //PUBLIC METHODS
        //OVERRIDING THE FOLLOWING FUNCTIONS (from scene.ts)
        public start(): void
        {
            //BACKGROUND OBJECT
            this._background = new objects.Background(); //referring background type object to background's sprite w/i "background.ts"
            this.addChild(this._background); //adding background sprite

            //HELLO LABEL
            this._gameLabel = new objects.Label("Space Jewels! (not balls...)", "35px Papyrus", "#FFFFFF", 320, 70, true);
            this.addChild(this._gameLabel); //adds "helloLabel" to the stage as a "child"

            //INSTRUCTIONS LABEL
            this._instructions = new objects.Label("Instructions:\n1. Avoid enemy space ships\n2. Pickup jewels\n3. Profit...\n4. You Win!", "25px Papyrus", "#FFFFFF", 360, 225, true);
            this.addChild(this._instructions);

            //START BUTTON
            this._startButton = new objects.Button("startButton", 320, 380);
            //event listener
            this._startButton.on("click", this._clickStartButton, this);
            this.addChild(this._startButton);

            stage.addChild(this); //use: scene?
        }

        public update(): void
        {
            this._background.update(); //calling background's update() from "background.ts"
        }

        //PRIVATE METHODS
        //CALLBACK FUNCTIONS/EVENT HANDLER FOR START BUTTON "click"
        private _clickStartButton(event: createjs.MouseEvent): void 
        {
            changeState(config.GAME_STATE);
        }
    }
}