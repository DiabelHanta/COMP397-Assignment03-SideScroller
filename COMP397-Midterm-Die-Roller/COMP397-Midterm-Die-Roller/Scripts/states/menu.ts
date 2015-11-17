/* 
    Khandker Faim Hussain, 
    10/30/2015, 
    Die-Roller
*/

module states
{
    // MENU CLASS
    export class Menu extends objects.Scene
    {
        // PRIVATE INSTANCE VARIABLES
        private _startButton: objects.Button;
        private _levelLabel: objects.Label;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;

        //VARIABLES FOR DICE
        private _titleLabel: objects.Label;
        private _rand: number;

        private _rollDice: objects.Button;
        private _die1: objects.Button;
        private _die2: objects.Button;
        private _die3: objects.Button;
        private _die4: objects.Button;
        private _die5: objects.Button;
        private _die6: objects.Button;

        // CONSTRUCTOR
        constructor()
        {
            super();
        }

        // PUBLIC METHODS
        public start(): void
        {

            // text label
            this._titleLabel = new objects.Label("Roll the dice", "60px Consolas", "#000000", 320, 60);
            this.addChild(this._titleLabel); // add label to the stage

            // roll button
            this._rollDice = new objects.Button("roll", 350, 340);
            this._rollDice.on("click", this._clickRollDice, this); // event listener
            //INSERT: RANDOMIZER
            this.addChild(this._rollDice);

            // first die
            this._die3 = new objects.Button("die3", 320, 230);
            this.addChild(this._die3);

            // second die
            this._die2 = new objects.Button("die2", 420, 230);
            this.addChild(this._die2);

            stage.addChild(this);
        }


        public update(): void
        {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        

        // Callback function / Event Handler for roll Button Click
        private _clickRollDice(event: createjs.MouseEvent): void
        {
            //Randomize
            Math.floor((Math.random() * 6) + 1);
        }
    }


}