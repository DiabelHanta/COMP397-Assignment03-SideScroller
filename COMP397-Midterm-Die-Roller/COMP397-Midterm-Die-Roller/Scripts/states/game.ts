module states
{
    // GAME CLASS
    export class Game extends objects.Scene
    {
        // PRIVATE INSTANCE VARIABLES
        private _levelLabel: objects.Label;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;
        

        // CONSTRUCTOR
        constructor()
        {
            super();
        }

        // PUBLIC METHODS
        public start(): void
        {

            // level label
            this._levelLabel = new objects.Label("Roll the die!", "60px Consolas", "#000000", 320, 240);
            this.addChild(this._levelLabel); // add label to the stage

            // back button
            this._backButton = new objects.Button("BackButton", 220, 340);
            this._backButton.on("click", this._clickBackButton, this); // event listener
            this.addChild(this._backButton);

            // next button
            this._nextButton = new objects.Button("NextButton", 420, 340);
            this._nextButton.on("click", this._clickNextButton, this); // event listener
            this.addChild(this._nextButton);

            

            stage.addChild(this);
        }

        public update(): void
        {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        private _clickBackButton(event: createjs.MouseEvent): void
        {
            changeState(config.MENU_STATE);
        }

        // Callback function / Event Handler for Next Button Click
        private _clickNextButton(event: createjs.MouseEvent): void
        {
            changeState(config.OVER_STATE);
        }

        // Callback function / Event Handler for roll Button Click
        private _clickRollDice(event: createjs.MouseEvent): void
        {
            changeState(config.OVER_STATE);
        }
    }
}