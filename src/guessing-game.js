class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.guessedNumber = Math.round((this.min+this.max)/2);
    	return this.guessedNumber;

    }

    lower() {
    	this.max = this.guessedNumber;


    }

    greater() {
    	this.min = this.guessedNumber;

    }
}

module.exports = GuessingGame;
