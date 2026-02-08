import { Card } from "./Card";
import { CardOrganizer } from "./CardOrganizer";

export class RecentMistakesFirstSorter implements CardOrganizer {
    
    public organize(list: Card[]): Card[] {
        const mistakes: Card[] = []; 
        const correct: Card[] = [];  
        for (const c of list) { // iterate all cards
            if (c.isWrong) {
                mistakes.push(c); //add mmistakes list
            } else {
                correct.push(c); //add right list
            }
        }

        // Mergelists to return mistakes at the top
        return [...mistakes, ...correct];
    }
}
