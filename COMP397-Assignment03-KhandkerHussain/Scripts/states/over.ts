//MENU STATE
module states
{
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    export class Over extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label; //(example of: composition - classes share objects)
        _backButton: objects.Button;

        //CONSTRUCTOR
        constructor()
        {
            super();
        }

        //PUBLIC METHODS
        //OVERRIDING THE FOLLOWING FUNCTIONS (from scene.ts)
        public start(): void
        {
            //LEVEL LABEL
            this._levelLabel = new objects.Label("Game Over!", "60px Verdana", "#000000", 320, 220, true);
            this.addChild(this._levelLabel); //adds "helloLabel" to the stage as a "child"

            //BACK BUTTON
            this._backButton = new objects.Button("BackButton", 220, 340);
            //event listener
            this._backButton.on("click", this._clickBackButton, this);
            this.addChild(this._backButton);

            stage.addChild(this); //use: scene?
        }

        public update(): void
        {
            //rotates label
            this._levelLabel.rotation += 5; //number = degrees
        }

        //PRIVATE METHODS
        //CALLBACK FUNCTIONS/EVENT HANDLER FOR BACK BUTTON "click"
        private _clickBackButton(event: createjs.MouseEvent): void
        {
            changeState(config.GAME_STATE); //transferring between states
        }
    }
}