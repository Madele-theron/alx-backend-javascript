function displayMessage(arguments) {
    this._stdout.write(util.format.apply(this, arguments) + '\n');
}

module.exports = displayMessage;