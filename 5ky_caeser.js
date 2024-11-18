var CaesarCipher = function (shift) {
    this.shift = shift;

    this.encode = function (str) {
        return str
            .toUpperCase()
            .split('')
            .map(char => shiftChar(char, this.shift))
            .join('');
    };

    this.decode = function (str) {
        return str
            .toUpperCase()
            .split('')
            .map(char => shiftChar(char, -this.shift))
            .join('');
    };

    function shiftChar(char, shift) {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // A-Z
            return String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
        }
        return char; // Non-alphabetic characters remain unchanged
    }
};
