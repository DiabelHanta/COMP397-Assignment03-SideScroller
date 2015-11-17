//MENU STATE
module states
{
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    export class Over extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        _gameOverLabel: objects.Label; //(example of: composition - classes share objects)
        _finalScoreLabel: objects.Label
        _menuButton: objects.Button;

        //CONSTRUCTOR
        constructor()
        {
            super();
        }

        //PUBLIC METHODS
        //OVERRIDING THE FOLLOWING FUNCTIONS (from scene.ts)
        public start(): void
        {
            //Gameover music
            createjs.Sound.play("gameOver", 0, 0, 0, -1, 1, 0);

            //GAME OVER LABEL
            this._gameOverLabel = new objects.Label("Game Over!", "40px Showcard Gothic", "#000000", 320, 100, true);
            this.addChild(this._gameOverLabel);

            ////FINAL SCORE LABEL
            //this._finalScoreLabel = new objects.Label("Game Over!", "40px Showcard Gothic", "#000000", 320, 100, true);
            //this.addChild(this._finalScoreLabel);

            //BACK BUTTON
            this._menuButton = new objects.Button("menuButton", 320, 300);
            //event listener
            this._menuButton.on("click", this._clickBackButton, this);
            this.addChild(this._menuButton);

            stage.addChild(this); //use: scene?
        }

        public update(): void
        {
        }

        //PRIVATE METHODS
        //CALLBACK FUNCTIONS/EVENT HANDLER FOR BACK BUTTON "click"
        private _clickBackButton(event: createjs.MouseEvent): void
        {
            createjs.Sound.stop();
            changeState(config.MENU_STATE); //transferring back to menu
        }
    }
}