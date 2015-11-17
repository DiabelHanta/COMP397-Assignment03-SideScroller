module managers
{
    export class ScoreBoard
    {
        //PRIVATE INSTANCE VARIABLES
        private _score: number;
        private _lives: number;

        //PUBLIC PROPERTIES
        public setScore(value: number):void
        {
            this._score = value;
        }

        public getScore(): number
        {
            return this._score;
        }

        public setLives(value: number): void
        {
            this._lives = value;
        }

        public getLives(): number
        {
            return this._lives;
        }

        /**
         * Empty Constructor
         */
        constructor()
        {
        }

        //PUBLIC METHODS

        /**
         * Update Method
         */
        public update(): void
        {

        }

        /**
         * Add Score Method - adds point to score
         */
        public addScore(score:number): void
        {
            this._score += score;
        }

        /**
         * Add Lives Method - adds Lives to lives
         */
        public addLives(lives: number): void
        {
            this._lives += lives;
        }

        /**
         * Remove Lives Method - removes lives from lives
         */
        public removeLives(lives: number): void
        {
            this._lives -= lives;
        }
    }
}