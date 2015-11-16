//MENU STATE
module states
{
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    export class Game extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _background: objects.Background;
        private _island: objects.Island;
        private _player: objects.Player;
        //instantiates objects as an array of any "clouds"
        private _clouds: objects.Cloud[] = []; //array of clouds
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

            //adds island to scene
            this._island = new objects.Island();
            this.addChild(this._island); 

            //adds player to scene
            this._player = new objects.Player(); 
            this.addChild(this._player); 

            //adds clouds ARRAY to scene
            for (var cloud = 0; cloud < 3; cloud++)
            {
                this._clouds[cloud] = new objects.Cloud(); 
                this.addChild(this._clouds[cloud]); 
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
        public update(): void {
            this._background.update(); //calling background's update() from "background.ts"
            this._island.update(); //calling island's update() from "island.ts"
            this._player.update(); //calling player's update() from "player.ts"

            //update each cloud to scene
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud].update(); //calling cloud's update() from "cloud.ts"
                this._collision.update(this._player, this._clouds[cloud]);
            } 

            //COLLISION B/W player AND ISLAND
            this._collision.update(this._player, this._island);
            this._updateScore();
        }

        //UPDATING THE LABELS
        private _updateScore(): void
        {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
        }
    }
}