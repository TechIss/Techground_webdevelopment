package BijenkorfFramwork.Steps;

import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepfile {
	
	WebDriver driver;

	@Before()
	public void setup () {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Arend\\Documents\\Techgrounds\\Webdevelopment\\Techground_webdevelopment\\Testerspad\\Udemy Course\\SeleniumWebDriverCourser\\CucumberJava\\src\\test\\java\\CucumberJava\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);		
	}
	
	@Given("^user navigates to debijenkorf website$")
	public void user_navigates_to_debijenkorf_website() throws Throwable {
		driver.get("https://www.debijenkorf.nl/");
	}

	@When("^I click on the button DAMES$")
	public void i_click_on_the_button_DAMES() throws Throwable {
		System.out.println("i_click_on_the_button_DAMES");
	}

	@Then("^I click on the button Schoenen$")
	public void i_click_on_the_button_Schoenen() throws Throwable {
		System.out.println("i_click_on_the_button_DAMES");

	}

	@Then("^I click on the button Sneakers$")
	public void i_click_on_the_button_Sneakers() throws Throwable {
		System.out.println("i_click_on_the_button_DAMES");

	}

	@Then("^I click on the first shoes$")
	public void i_click_on_the_first_shoes() throws Throwable {
		System.out.println("i_click_on_the_button_DAMES");
	}

	@Then("^I select a size by clicking on the down menu of Selecteer maat$")
	public void i_select_a_size_by_clicking_on_the_down_menu_of_Selecteer_maat() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_click_on_the_button_DAMES");
	}

	@Then("^I choose a size$")
	public void i_choose_a_size() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_click_on_the_button_DAMES");
	}

	@Then("^I can click on the button In winkelmand$")
	public void i_can_click_on_the_button_In_winkelmand() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_click_on_the_button_DAMES");
	}

	@When("^I click on the button In winkelmand$")
	public void i_click_on_the_button_In_winkelmand() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_click_on_the_button_DAMES");
	}

	@Then("^I should be able to click Bestellen$")
	public void i_should_be_able_to_click_Bestellen() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_click_on_the_button_DAMES");
	}


}
