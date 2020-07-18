Feature: Purchase a pillow

Scenario Outline: Mindtran Test Scenario
Given user is already on Shopping Page
Then user click on Buy now button
Then user checkout from the cart
Then user select the payment button
Then user select Credit card as payment method 
And user enter the card details "<cardNo>" and "<ExDate>" and "<cvv>"
Then user check the paynow button is displayed
Then user click on the pay button
Then user close the browser

Examples:
|cardNo|ExDate|cvv|
|4811 1111 1111 1114 |05/20 |123|
|4911 1111 1111 1113|05/20|123|