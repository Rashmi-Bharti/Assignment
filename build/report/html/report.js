$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/R/eclipse-workspace/Assignment/src/test/java/features/sccessScenario.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase a pillow",
  "description": "",
  "id": "purchase-a-pillow",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Mindtran Test Scenario",
  "description": "",
  "id": "purchase-a-pillow;mindtran-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Shopping Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on Buy now button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user checkout from the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select the payment button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user select Credit card as payment method",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter the card details \"\u003ccardNo\u003e\" and \"\u003cExDate\u003e\" and \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user check the paynow button is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on the pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "purchase-a-pillow;mindtran-test-scenario;",
  "rows": [
    {
      "cells": [
        "cardNo",
        "ExDate",
        "cvv"
      ],
      "line": 15,
      "id": "purchase-a-pillow;mindtran-test-scenario;;1"
    },
    {
      "cells": [
        "4811 1111 1111 1114",
        "05/20",
        "123"
      ],
      "line": 16,
      "id": "purchase-a-pillow;mindtran-test-scenario;;2"
    },
    {
      "cells": [
        "4911 1111 1111 1113",
        "05/20",
        "123"
      ],
      "line": 17,
      "id": "purchase-a-pillow;mindtran-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Mindtran Test Scenario",
  "description": "",
  "id": "purchase-a-pillow;mindtran-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Shopping Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on Buy now button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user checkout from the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select the payment button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user select Credit card as payment method",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter the card details \"4811 1111 1111 1114\" and \"05/20\" and \"123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user check the paynow button is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on the pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Payment.user_is_on_Shopping_Page()"
});
formatter.result({
  "duration": 8205592500,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_click_on_Buy_now_button()"
});
formatter.result({
  "duration": 87965200,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_checkout_from_the_cart()"
});
formatter.result({
  "duration": 190580600,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_clicks_the_payment_button()"
});
formatter.result({
  "duration": 2692185900,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_select_Credit_card_as_payment_method()"
});
formatter.result({
  "duration": 401213700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811 1111 1111 1114",
      "offset": 29
    },
    {
      "val": "05/20",
      "offset": 55
    },
    {
      "val": "123",
      "offset": 67
    }
  ],
  "location": "Payment.user_enter_the_card_details(String,String,String)"
});
formatter.result({
  "duration": 450350800,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_check_the_paynow_button_is_displayed()"
});
formatter.result({
  "duration": 37899100,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_click_on_the_pay_button()"
});
formatter.result({
  "duration": 78392300,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_close_the_browser()"
});
formatter.result({
  "duration": 88476400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Mindtran Test Scenario",
  "description": "",
  "id": "purchase-a-pillow;mindtran-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Shopping Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on Buy now button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user checkout from the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select the payment button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user select Credit card as payment method",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter the card details \"4911 1111 1111 1113\" and \"05/20\" and \"123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user check the paynow button is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on the pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Payment.user_is_on_Shopping_Page()"
});
formatter.result({
  "duration": 8306266100,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_click_on_Buy_now_button()"
});
formatter.result({
  "duration": 60870900,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_checkout_from_the_cart()"
});
formatter.result({
  "duration": 226002800,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_clicks_the_payment_button()"
});
formatter.result({
  "duration": 1620723900,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_select_Credit_card_as_payment_method()"
});
formatter.result({
  "duration": 360790300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4911 1111 1111 1113",
      "offset": 29
    },
    {
      "val": "05/20",
      "offset": 55
    },
    {
      "val": "123",
      "offset": 67
    }
  ],
  "location": "Payment.user_enter_the_card_details(String,String,String)"
});
formatter.result({
  "duration": 410322600,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_check_the_paynow_button_is_displayed()"
});
formatter.result({
  "duration": 40623500,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_click_on_the_pay_button()"
});
formatter.result({
  "duration": 87887600,
  "status": "passed"
});
formatter.match({
  "location": "Payment.user_close_the_browser()"
});
formatter.result({
  "duration": 87513000,
  "status": "passed"
});
});