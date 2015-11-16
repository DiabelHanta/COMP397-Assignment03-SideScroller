//MENU STATE
module states
{
    //MENU CLASS - (INHERITANCE FROM scene.ts)
    export class Game extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _plane: objects.Plane;
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

            //adds ocean to scene
            this._ocean = new objects.Ocean(); //referring plane type object to plane's sprite w/i "plane.ts"
            this.addChild(this._ocean); //adding plane sprite

            //adds island to scene
            this._island = new objects.Island();
            this.addChild(this._island); 

            //adds plane to scene
            this._plane = new objects.Plane(); 
            this.addChild(this._plane); 

            //adds clouds ARRAY to scene
            for (var cloud = 0; cloud < 3; cloud++)
            {
                this._clouds[cloud] = new objects.Cloud(); 
                this.addChild(this._clouds[cloud]); 
            }

            //adds score label to scene
            this._scoreLabel = new objects.Label("Score: ", "40px Verdana", "#000000", 100, 25, true);
            this.addChild(this._scoreLabel);

            //adds lives label to scene
            this._livesLabel = new objects.Label("Lives: ", "40px Verdana", "#000000", 375, 25, true);
            this.addChild(this._livesLabel);

            //INSTANTIATE COLLISION MANAGER
            this._collision = new managers.Collision();

            //adds stage
            stage.addChild(this); //use: scene?
        }

        //updates the scene every frame
        public update(): void {
            this._ocean.update(); //calling ocean's update() from "ocean.ts"
            this._island.update(); //calling island's update() from "island.ts"
            this._plane.update(); //calling plane's update() from "plane.ts"

            //update each cloud to scene
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud].update(); //calling cloud's update() from "cloud.ts"
                this._collision.update(this._plane, this._clouds[cloud]);
            } 

            //COLLISION B/W PLANE AND ISLAND
            this._collision.update(this._plane, this._island);
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