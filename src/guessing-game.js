class GuessingGame {
    constructor() {

    };

    setRange(min, max) {
        this.minimumRangeValue = min;
        this.maximumRangeValue = max;
    };

    guess() {
        this.arithmeticalMean = Math.ceil((this.minimumRangeValue + this.maximumRangeValue) / 2);

        return this.arithmeticalMean;
    };

    lower() {
        this.maximumRangeValue = this.arithmeticalMean;
    };

    greater() {
        this.minimumRangeValue = this.arithmeticalMean;
    };
};

module.exports = GuessingGame;
