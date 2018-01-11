"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INCREMENT_COUNTER = 'INCREMENT_COUNTER';
exports.DECREMENT_COUNTER = 'DECREMENT_COUNTER';
function increment() {
    return {
        type: exports.INCREMENT_COUNTER
    };
}
exports.increment = increment;
function decrement() {
    return {
        type: exports.DECREMENT_COUNTER
    };
}
exports.decrement = decrement;
function incrementIfOdd() {
    return function (dispatch, getState) {
        var counter = getState().counter;
        if (counter % 2 === 0) {
            return;
        }
        dispatch(increment());
    };
}
exports.incrementIfOdd = incrementIfOdd;
function incrementAsync(delay) {
    if (delay === void 0) { delay = 1000; }
    return function (dispatch) {
        setTimeout(function () {
            dispatch(increment());
        }, delay);
    };
}
exports.incrementAsync = incrementAsync;
//# sourceMappingURL=counter.js.map