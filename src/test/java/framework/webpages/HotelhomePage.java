package framework.webpages;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import stepdefinition.SharedSD;

import java.util.List;

public class HotelhomePage extends ElementUtil {
    WebDriver driver;
    Double doubleDistance;

        By alertclick=By.xpath("//a[@class='footer-continue-link di-ib fw-bold']");
        By searchBtn=By.xpath("//input[@id='qf-0q-destination']");
        By destination=By.xpath("//*[@id='recommendedsqm-asi0-s0']/td/div[2]");
        By clickIn=By.xpath("//input[@id='qf-0q-localised-check-in']");
        By checkInDate=By.xpath("//*[contains(@data-date,'2019-11-28')]");
        By checkOutclick=By.xpath("//label[@id='widget-query-label-3']");
        By checkOutDate=By.xpath("//*[contains(@data-date,'2019-11-30')]");
        By childrenBtn=By.xpath("//select[@id='qf-0q-room-0-children']");
        By childage1=By.xpath("//select[@name='q-room-0-child-0-age']");
        By childage2 =By.xpath("//select[@name='q-room-0-child-1-age']");
        By continueBy=By.xpath("//button[@class='cta cta-strong']");



    By rating5 = By.id("f-star-rating-5");
    By rating4 = By.id("f-star-rating-4");
    By rating3 = By.id("f-star-rating-3");
    By distance = By.xpath("//li[contains(text(),'miles to City center')]");
    By hotelNames = By.xpath("//li//a[@class='property-name-link'][contains(text(),'')]");

    public void  searchCity(){
       //clickOn(alertclick);
       clickOn(searchBtn);
       webAction(destination);
       clickOn(destination);


    }


    public void checkInAndOut(){
       clickOn(clickIn);
       clickOn(checkInDate);
       clickOn(checkOutclick);
       clickOn(checkOutDate);

    }
    public void children(){
//        waitForElementPresent(childrenBtn);
//        selectFromDropdown( childrenBtn, "2");
//        waitForElementPresent(childage1);
//        selectFromDropdown(childage1, "5");
//        waitForElementPresent(childage2);
//        selectFromDropdown( childage2, "3");
         clickOn(continueBy);
    }


    public void chooseStarRating5() throws InterruptedException {

       scrollByPixel("0","400");
       clickOn(rating5);
        Thread.sleep(3000);

    }

    public void chooseStarRating4() throws InterruptedException {

        scrollByPixel("0","400");
        clickOn(rating4);
        Thread.sleep(3000);

    }
    public void chooseStarRating3() throws InterruptedException {

        scrollByPixel("0","400");
        clickOn(rating3);
        Thread.sleep(3000);

    }

    public void verifySelectedOptin5() {
        WebElement fiveStarBox = SharedSD.getDriver().findElement(rating5);
        System.out.println("5 Star Rate Selected :" + fiveStarBox.isSelected());
    }
    public void verifySelectedOptin4() {
        WebElement fourStarBox = SharedSD.getDriver().findElement(rating4);
        System.out.println("4 Star Rate Selected :" + fourStarBox.isSelected());
    }
    public void verifySelectedOptin3(){
        WebElement threeStarBox = SharedSD.getDriver().findElement(rating3);
        System.out.println("3 Star Rate Selected :"+threeStarBox.isSelected());
    }
    public void getList() throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            scrollByPixel("0", "500");
            Thread.sleep(3000);
        }
    }
        public void hotels(){
            List<WebElement> linkList = SharedSD.getDriver().findElements(hotelNames);
            for(WebElement hotel: linkList){
                //System.out.println("5 Star Hotel Names : " +hotel.getText());
   }
        }


     public void distance() throws InterruptedException{
            List<WebElement> list = SharedSD.getDriver().findElements(distance);
            for(WebElement s: list){
               scrollByPixel("0","400");
                Thread.sleep(2000);
                System.out.println("Distance To City Center : "+s.getText());
                String text =s.getText().substring(0,2);
                doubleDistance = Double.parseDouble(text);
            }
            System.out.println(doubleDistance);
            boolean distance = false;
            if (doubleDistance<10.00){distance=true;}
            Assert.assertTrue(distance);
    }


    }


