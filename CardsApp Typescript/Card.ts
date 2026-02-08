export class Card {
    private q: string;
    private a: string;
    public iswrong: boolean; 
    constructor(q: string, a: string, iswrong: boolean) {
        this.q = q;
        this.a = a;
        this.iswrong = iswrong;
    }

  

    public toString(): string {
        return `Questions: ${this.q} | Wrong: ${this.iswrong}`;
    }
}
