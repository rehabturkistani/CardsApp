
package  CardsApp;
import java.util.ArrayList;
import java.util.List;//to work with lists for ordering
public class Main {

    public static void main(String[] args) {
        List<Card> RehabCards = new ArrayList<>();//create object to test my code
        
        RehabCards.add(new Card("1+1", "2", false));//the sanswar not with the method isWrong()
        RehabCards.add(new Card("5-2", "3", true)); 
        RehabCards.add(new Card("4*2", "8", false));
        RehabCards.add(new Card("9/3", "3", true));  
        
    System.out.println("before sorting");
        for(Card c : RehabCards) System.out.println(c);

    RecentMistakesFirstSorter sorter = new RecentMistakesFirstSorter();//object from the sorting class
        List<Card> sorted = sorter.organize(RehabCards);//call the sorting method

    System.out.println("\n mistakes fisrt sorting");
        for(Card c : sorted) System.out.println(c);
    }
    
}
