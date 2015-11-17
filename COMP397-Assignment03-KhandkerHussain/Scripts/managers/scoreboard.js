var managers;
(function (managers) {
    var ScoreBoard = (function () {
        /**
         * Empty Constructor
         */
        function ScoreBoard() {
        }
        //PUBLIC PROPERTIES
        ScoreBoard.prototype.setScore = function (value) {
            this._score = value;
        };
        ScoreBoard.prototype.getScore = function () {
            return this._score;
        };
        ScoreBoard.prototype.setLives = function (value) {
            this._lives = value;
        };
        ScoreBoard.prototype.getLives = function () {
            return this._lives;
        };
        //PUBLIC METHODS
        /**
         * Update Method
         */
        ScoreBoard.prototype.update = function () {
        };
        /**
         * Add Score Method - adds point to score
         */
        ScoreBoard.prototype.addScore = function (score) {
            this._score += score;
        };
        /**
         * Add Lives Method - adds Lives to lives
         */
        ScoreBoard.prototype.addLives = function (lives) {
            this._lives += lives;
        };
        /**
         * Remove Lives Method - removes lives from lives
         */
        ScoreBoard.prototype.removeLives = function (lives) {
            this._lives -= lives;
        };
        return ScoreBoard;
    })();
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map