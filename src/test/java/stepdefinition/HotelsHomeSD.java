package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.webpages.HotelhomePage;
import framework.webpages.HotelsTest2;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class HotelsHomeSD {

    WebDriver driver;
    HotelhomePage hotelhomePage=new HotelhomePage();
    HotelsTest2 hotelsTest2=new HotelsTest2();
    @Given("^I am on Hotels Home Page$")
    public void i_am_on_Hotels_Home_Page()  {
        Assert.assertEquals(SharedSD.getDriver().getCurrentUrl(),"https://www.hotels.com/");
    }

    @Given("^I am on default locations search result screen$")
    public void i_am_on_default_locations_search_result_screen()  {
       hotelhomePage.searchCity();
     //  hotelhomePage.checkInAndOut();
       hotelhomePage.children();
    }

    @When("^I select (5 stars|4 stars|3 stars) on the hotels page$")
    public void i_select_property_class_stars(String textField) throws InterruptedException {
     switch(textField){
            case "5 stars":
             hotelhomePage.chooseStarRating5();
             break;
         case "4 stars":
             hotelhomePage.chooseStarRating4();
             break;
         case "3 stars":
             hotelhomePage.chooseStarRating3();
        }


    }

    @Then("^I verify system displays only (5 stars|4 stars|3 stars)  hotels on search result$")
    public void i_verify_system_displays_only_stars_hotels_on_search_result(String textField) throws Throwable {
        switch(textField){
            case "5 stars":
                hotelhomePage.verifySelectedOptin5();
                break;
            case "4 stars":
                hotelhomePage.verifySelectedOptin4();
                break;
            case "3 stars":
                hotelhomePage.verifySelectedOptin3();
        }
        hotelhomePage.getList();
//        hotelhomePage.hotels();
//
//        hotelhomePage.distance();
    }

    @When("^I verify system displays all hotels within 10 miles radius of airport$")
    public void i_verify_system_displays_all_hotels_within_miles_radius_of_airport() throws Throwable {

            // hotelMile.verifyHotelsAreWithin10Miles();
            System.out.println("Hotels' names within 10 miles: "+hotelsTest2.verifyHotelsAreWithin10Miles());


        }

    @And("^I verify Hilton Hotel is within 10 miles radius of downtown$")
    public void i_verify_Hilton_Hotel_is_within_miles_radius_of_downtown() throws Throwable {

            System.out.println("Is hilton in the hotel's list: "+hotelsTest2.isHiltonPresentInTheList());
    }


}
