# Assignment
investigate Shopping website and write UI automation framework covering 2 scenarios:
1. Create an automation test script to test end to end checkout flow for purchasing “Pillow” using
Credit Card as payment method. This should be a SUCCESSFUL payment flow.
2. Create the second script to test end to end checkout flow for purchasing “Pillow” using Credit
Card as payment method. This should be FAILED payment flow.
3. Implement a reporting framework of your choice to display the test results


Problem Statement 1:
•	Programming Language: Java
•	Framework:  BDD-Cucumber 
•	Build tool: Maven
•	Browser: chrome
•	Reporting: Html, Json & Junit

Steps Performed:
1.	Initialized the browser and navigated to https://demo.midtrans.com/
2.	Clicked on Buy Now and then checkout. While doing checkout getting error as “ElementNotInteractableException”. Handled it by using WebDriver Wait.
3.	Selected the payment method as “credit card”.
4.	Entered the credit card details since we have two scenarios, so handled both scenarios by using Scenario Outline in the. feature file. 
5.	Clicked on Pay Now button as pay now button is not clickable so could not move further

