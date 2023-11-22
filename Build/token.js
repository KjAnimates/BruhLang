"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Word"] = 0] = "Word";
    TokenType[TokenType["Equals"] = 1] = "Equals";
})(TokenType || (exports.TokenType = TokenType = {}));
var Token = /** @class */ (function () {
    function Token() {
        this.type = TokenType.Word;
        this.value = null;
    }
    return Token;
}());
exports.default = Token;
