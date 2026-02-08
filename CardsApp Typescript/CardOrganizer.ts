import { Card } from "./Card";
export interface CardOrganizer {
    organize(list: Card[]): Card[];
}
