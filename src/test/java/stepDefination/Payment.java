package stepDefination;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Payment {
	WebDriver driver;

	@Given("^user is already on Shopping Page$")
	public void user_is_on_Shopping_Page(){
        
		System.setProperty("webdriver.chrome.driver", "D://chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://demo.midtrans.com/");
	}

	@Then("^user click on Buy now button$")
	public void user_click_on_Buy_now_button(){
		driver.findElement(By.xpath("//a[text()='BUY NOW']")).click();
	}

	@Then("^user checkout from the cart$")
	public void user_checkout_from_the_cart(){
		
		WebDriverWait wait= new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='cart-action']//div[text()='CHECKOUT']")));
		driver.findElement(By.xpath("//div[@class='cart-action']//div[text()='CHECKOUT']")).click();
	}

	@Then("^user select the payment button$")
	public void user_clicks_the_payment_button(){
		driver.switchTo().frame(0);
		driver.findElement(By.xpath("//a[contains(@href,'select-payment')]")).click();
	}

	@Then("^user select Credit card as payment method$")
	public void user_select_Credit_card_as_payment_method(){
		driver.findElement(By.xpath("//div[@class='promo-text']//span[text()='promo']")).click();
	}

	@Then("^user enter the card details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enter_the_card_details(String cardNo, String ExDate, String cvv )
	{
			driver.findElement(By.name("cardnumber")).sendKeys(cardNo);
			driver.findElement(By.xpath("//input[@placeholder='MM / YY']")).sendKeys(ExDate);
			driver.findElement(By.xpath("//input[@placeholder='123']")).sendKeys(cvv);
		}
	

	@Then("^user check the paynow button is displayed$")
	public void user_check_the_paynow_button_is_displayed(){

		boolean payNow=driver.findElement(By.xpath("//a[@class='button-main-content' and @href='#/']")).isDisplayed();
		System.out.println("PayNow button is visible::"+payNow);
	}

	@Then("^user click on the pay button$")
	public void user_click_on_the_pay_button(){
		driver.findElement(By.xpath("//a[@class='button-main-content' and @href='#/']")).click();	
	}

	@Then("^user close the browser$")
	public void user_close_the_browser(){
    driver.close();
	}


}
