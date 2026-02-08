import { Card } from "./Card";
import   type{ CardOrganizer } from "./CardOrganizer";//because we only need the type not the implementation in interfaces

export class RecentMistakesFirstSorter implements CardOrganizer {
    public organize(list: Card[]): Card[] {
        const mistakes: Card[] = [];
        const correct: Card[] = [];

        for (const c of list) {
            if (c.iswrong) {  
                mistakes.push(c);
            } else {
                correct.push(c);
            }
        }

        return [...mistakes, ...correct];
    }
}
