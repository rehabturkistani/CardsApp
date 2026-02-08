import { Card } from "./Card";
import { RecentMistakesFirstSorter } from "./RecentMistakesFirstSorter";

const rehabCards: Card[] = [
    new Card("1+1", "2", false), 
    new Card("5-2", "3", true), 
    new Card("4*2", "8", false), 
    new Card("9/3", "3", true)   
];

console.log("before sorting:");
rehabCards.forEach(c => console.log(c.toString()));

const sorter = new RecentMistakesFirstSorter();
const sorted = sorter.organize(rehabCards);

console.log("\nmistakes first sorting:");
sorted.forEach(c => console.log(c.toString()));