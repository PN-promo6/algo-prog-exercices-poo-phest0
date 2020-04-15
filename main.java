class Playground {
    public static void main(String[] args) {
        ConcertTicket ticket01 = new ConcertTicket(15, "02", "01/01/20", "Joe");
        System.out.println(ticket01.concertDetails());
        ConcertTicket ticket02 = new ConcertTicket(15, "05", "08/09/20", "Fred", "Garou");
        System.out.println(ticket02.concertDetails());
    }
}

class ConcertTicket {

    public int price;
    public String placeNumber;
    public String date;
    public String customer;
    public String artistName = "";

    ConcertTicket(int price, String placeNumber, String date, String customer) {
        this.price = price;
        this.placeNumber = placeNumber;
        this.date = date;
        this.customer = customer;
    }

    ConcertTicket(int price, String placeNumber, String date, String customer, String artistName) {
        this.price = price;
        this.placeNumber = placeNumber;
        this.date = date;
        this.customer = customer;
        this.artistName = artistName;
    }

    public String concertDetails() {
        String concertVar = "<p>Price: " + this.price + "</p><p>Place number: " + this.placeNumber + "</p><p>Date: "
                + this.date + "</p><p>Customer name: " + this.customer + "</p>";

        if (this.artistName != "") {
            concertVar = concertVar + "<p>Artist Name : " + this.artistName + "</p>";
        }
        return concertVar;
    }
}