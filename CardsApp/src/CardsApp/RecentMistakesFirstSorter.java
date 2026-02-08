
package CardsApp;

import java.util.ArrayList;
import java.util.List;

public class RecentMistakesFirstSorter implements CardOrganizer {

   @Override
    public List<Card> organize(List<Card> list) {
   
        List<Card> mistakes = new ArrayList<>();//for wrong cards
        List<Card> correct = new ArrayList<>();//for right answared

        for (Card c : list) {//visit all crads
            if (c.isWrong) {
                mistakes.add(c); // if wrong put it in this list
            } else {
                correct.add(c); 
            }}
        
        List<Card> result = new ArrayList<>();//new list to merge
        result.addAll(mistakes);
        result.addAll(correct);

        return result;
    }
}