
package CardsApp;

public class Card {
    private String q; // store question
    private String a; //answear
    public boolean isWrong; // is it wrong to sort it at first

    public Card(String q, String a, boolean isWrong) {//constructor
        this.q = q;
        this.a = a;
        this.isWrong = isWrong;
    }

    public boolean isWrong() {//getter to use it in the 
        return isWrong;
    }
    
    @Override
    public String toString() {//to control the printing
        return "Questions: " + q  + isWrong;
}}
