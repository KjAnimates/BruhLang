"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var languageConfig_1 = require("./languageConfig");
var token_1 = require("./token");
var token_2 = require("./token");
var languageConfig = new languageConfig_1.default();
var code = "var x = 5";
/**
 * Splits the big string into little strings (Tokens).s
 */
function lex() {
    return code.split(languageConfig.tokenRegex);
}
/**
 * Takes the string of tokens, and makes them into a `Token` object.
 */
function parse() {
    var str_tokens = lex();
    var tokens = [];
    for (var i = 0; i < str_tokens.length; i++) {
        var token = new token_1.default();
        token.value = str_tokens[i];
        /* Skip it if it is whitespace. */
        if (str_tokens[i].trim() === "")
            continue;
        switch (str_tokens[i]) {
            case "=":
                token.type = token_2.TokenType.Equals;
                break;
            default:
                token.type = token_2.TokenType.Word;
                break;
        }
        tokens.push(token);
    }
    return tokens;
}
function execute() {
    var tokens = parse();
    console.log(tokens);
    for (var i = 0; i < tokens.length; i++) {
    }
}
execute();
