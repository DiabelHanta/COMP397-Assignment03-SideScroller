//MENU STATE
module states
{
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    export class Game extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _background: objects.Background;
<<<<<<< HEAD
        private _crystal: objects.Crystal;
        private _player: objects.Player;
        //instantiates objects as an array of any "enemies"
        private Enemies: objects.Enemy[] = []; //array of enemies
=======
        private _island: objects.Island;
        private _player: objects.Player;
        //instantiates objects as an array of any "clouds"
        private _clouds: objects.Cloud[] = []; //array of clouds
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
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

<<<<<<< HEAD
            //adds crsytal to scene
            this._crystal = new objects.Crystal();
            this.addChild(this._crystal); 
=======
            //adds island to scene
            this._island = new objects.Island();
            this.addChild(this._island); 
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b

            //adds player to scene
            this._player = new objects.Player(); 
            this.addChild(this._player); 

<<<<<<< HEAD
            //adds enemies ARRAY to scene
            for (var enemy = 0; enemy < 3; enemy++)
            {
                this.Enemies[enemy] = new objects.Enemy(); 
                this.addChild(this.Enemies[enemy]); 
=======
            //adds clouds ARRAY to scene
            for (var cloud = 0; cloud < 3; cloud++)
            {
                this._clouds[cloud] = new objects.Cloud(); 
                this.addChild(this._clouds[cloud]); 
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
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
<<<<<<< HEAD
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
=======
            this._island.update(); //calling island's update() from "island.ts"
            this._player.update(); //calling player's update() from "player.ts"

            //update each cloud to scene
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud].update(); //calling cloud's update() from "cloud.ts"
                this._collision.update(this._player, this._clouds[cloud]);
            } 

            //COLLISION B/W player AND ISLAND
            this._collision.update(this._player, this._island);
>>>>>>> 5e420b69b384269633e2f035c8f05e635d5ddd8b
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