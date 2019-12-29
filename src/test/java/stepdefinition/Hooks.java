package stepdefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {

    @Before
    public void before(Scenario scenario) {

        System.out.println("=======================================");
        System.out.println("Test is starting: " + scenario.getName());
        System.out.println("=======================================");

    }

    @After
    public void after(Scenario scenario) {

        System.out.println("=======================================");
        System.out.println(scenario.getName() + " is passed");
        System.out.println("Test result is " + scenario.getStatus());
        System.out.println("Tag Name is " + scenario.getSourceTagNames());
        System.out.println("=======================================");

    }


}


