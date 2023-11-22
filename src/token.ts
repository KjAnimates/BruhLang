
export enum TokenType {
    Word,
    Equals
}
export default class Token {
    public type: TokenType = TokenType.Word;
    public value: string | null = null;
} 