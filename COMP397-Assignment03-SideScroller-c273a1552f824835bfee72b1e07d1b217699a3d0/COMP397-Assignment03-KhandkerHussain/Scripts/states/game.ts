//MENU STATE
module states
{
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    export class Game extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _background: objects.Background;
        private _crystal: objects.Crystal;
        private _player: objects.Player;
        //instantiates objects as an array of any "enemies"
        private Enemies: objects.Enemy[] = []; //array of enemies
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;

        //CONSTRUCTOR
        constructor()
        {
            super();
        }

        //PUBLIC METHODS
        //OVERRIDING THE FOLLOWING FUNCTIONS (from scene.ts)
        public start(): void
        {
            //########################### LAYERING HIERARCHY ###################################

            //RESETS SCOREBOARD
            scoreboard.setLives(5);
            scoreboard.setScore(0);
            console.log(scoreboard.getLives());
            console.log(scoreboard.getScore());

            //adds background to scene
            this._background = new objects.Background(); //referring ship type object to player's sprite w/i "ship.ts"
            this.addChild(this._background); //adding ship sprite

            //adds crsytal to scene
            this._crystal = new objects.Crystal();
            this.addChild(this._crystal); 

            //adds player to scene
            this._player = new objects.Player(); 
            this.addChild(this._player); 

            //adds enemies ARRAY to scene
            for (var enemy = 0; enemy < 3; enemy++)
            {
                this.Enemies[enemy] = new objects.Enemy(); 
                this.addChild(this.Enemies[enemy]); 
            }

            //adds score label to scene
            this._scoreLabel = new objects.Label("Score: ", "40px Showcard Gothic", "#FFFFFF", 100, 25, true);
            this.addChild(this._scoreLabel);

            //adds lives label to scene
            this._livesLabel = new objects.Label("Lives: ", "40px Showcard Gothic", "#FFFFFF", 400, 25, true);
            this.addChild(this._livesLabel);

            //INSTANTIATE COLLISION MANAGER
            this._collision = new managers.Collision();

            //adds stage
            stage.addChild(this); //use: scene?
        }

        //updates the scene every frame
        public update(): void
        {
            this._background.update(); //calling background's update() from "background.ts"
            this._crystal.update(); //calling Crystal's update() from "crystal.ts"
            this._player.update(); //calling player's update() from "player.ts"

            //update each enemies to scene
            for (var enemy = 0; enemy < 3; enemy++)
            {
                this.Enemies[enemy].update(); //calling enemy's update() from "enemy.ts"
                this._collision.update(this._player, this.Enemies[enemy]);
            } 

            //COLLISION B/W player AND crystal
            this._collision.update(this._player, this._crystal);
            this._updateScore();
            this._gameOver()
        }

        //PRIVATE METHODS
        //UPDATING THE LABELS
        private _updateScore(): void
        {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
        }

        //Change state/scene
        private _gameOver(): void
        {
            //Conditional to call the "over" state when player has 0 lives
            if (scoreboard.getLives() == 0)
            {
                createjs.Sound.stop();
                changeState(config.OVER_STATE);
            }
        }
    }
}