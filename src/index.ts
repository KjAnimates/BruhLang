import LanguageConfiguration from "./languageConfig";
import Token from "./token";
import { TokenType } from "./token";

const languageConfig: LanguageConfiguration = new LanguageConfiguration();
const code: string = "var x = 5"

/**
 * Splits the big string into little strings (Tokens).s
 */
function lex(): string[] {
    return code.split(languageConfig.tokenRegex);
}

/**
 * Takes the string of tokens, and makes them into a `Token` object.
 */
function parse() : Token[] {
    let str_tokens: string[] = lex();
    let tokens: Token[] = [];

    for(let i = 0; i < str_tokens.length; i++) {
        let token: Token = new Token();
        token.value = str_tokens[i];

        /* Skip it if it is whitespace. */
        if(str_tokens[i].trim() === "") continue;

        switch(str_tokens[i]) {
            case "=":
                token.type = TokenType.Equals;
                break;
            default:
                token.type = TokenType.Word;
                break;
        }
        tokens.push(token);
    }

    return tokens;
}

function execute() {
    let tokens: Token[] = parse();

    console.log(tokens);

    for(var i = 0; i < tokens.length; i++) {

    }
}

execute();