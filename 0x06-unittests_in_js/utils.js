class Utils {
    static calculateNumber(type, a, b) {
    let result = 0;
    switch (type) {
    case 'SUM':
        result = Math.round(a) + Math.round(b);
        break;
    case 'SUBTRACT':
        result = Math.round(a) - Math.round(b);
        break;
    case 'DIVIDE':
        if (Math.round(b) === 0) {
                result = "Error";
        } else {
                result = Math.round(a) / Math.round(b);
        }
        break;
    }
    return result;
    }
}

module.exports = Utils;
