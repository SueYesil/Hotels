package framework.webpages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import stepdefinition.SharedSD;

import java.util.ArrayList;
import java.util.List;

public class HotelsTest2 extends ElementUtil {




        By distanceAirport = By.xpath("//a[@class='menu-trigger'][contains(text(),'Newark Liberty Airport Station')]");
        By hotelNames = By.xpath("//li//a[@class='property-name-link'][contains(text(),'')]");


        public boolean verifyHotelsAreWithin10Miles() {
            List<String> distanceFromAirport = new ArrayList<>();
            List<WebElement> distances = SharedSD.getDriver().findElements(distanceAirport);
            for (WebElement distance : distances) {
                distanceFromAirport.add(distance.getText());

            }
            ArrayList<Double> distanceInNumbers = new ArrayList<Double>();
            for (int i = 0; i < distanceFromAirport.size(); i++) {
                distanceInNumbers.add(Double.parseDouble(distanceFromAirport.get(i).substring(0, 5)));
                //(distanceFromAirport.get(i).substring(0,5)));
            }
            for (int i = 0; i < distanceInNumbers.size(); i++) {
                if (distanceInNumbers.get(i) > 10) {
                    return true;
                }
            }
            return true;
        }
        public boolean isHiltonPresentInTheList() {
            List<String> AllHotelNames = new ArrayList<>();
            List<WebElement> hotels = SharedSD.getDriver().findElements(hotelNames);

            for (WebElement hotel : hotels) {
                AllHotelNames.add(hotel.getText());
                System.out.println("Hotel names : "+hotel.getText());
            }

            for (int i = 0; i < AllHotelNames.size(); i++) {
                if (AllHotelNames.get(i).contains("Hilton")) {
                    return true;
                }
            }
            return false;
        }
    }

