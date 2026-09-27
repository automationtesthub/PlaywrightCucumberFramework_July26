
Feature: Login Functionality

Background:
Given user should be on login page


@abc
Scenario: valid login
When user enters the valid credentials 
Then user should be navigated to home page
And user can see the logout link
#And close the browser

@abc @pqr @test @smoke
Scenario: Invalid login
When user enters the invalid credentials 
Then user should be navigated to login page
And user can see the login error message
#And close the browser


Scenario Outline: Invalid login with different set of data
When user enters the userid as "<userid>" and password as "<password>" invalid credentials 
Then user should be navigated to login page
And user can see the login error message
And close the browser
Examples:
|userid |password|
|admin1 | pwd1|
|admin2 | pwd2|
|admin3 | pwd3|



Scenario Outline: Invalid login with different set of data
When user enters the userid as "<userid>" and password as "<password>" invalid credentials 
Then user enter the email id as "<email>"
And user enters the mobile "<mobile>"
And validate the error message "<error_msg>"
And close the browser
Examples:
|userid |password|email      |mobile| error_msg|
|admin1 | pwd1| abc@gmail.com|83758565| MQ003|
|admin2 | pwd2|abc@gmail.com|83758565| MQ004|
|admin3 | pwd3|abc@gmail.com|83758565| MQ006|


Scenario Outline: Invalid login with different set of data
When user enters the userid as "<userid>" and password as "<password>" invalid credentials 
Then user should be navigated to login page
And user can see the login error message
And close the browser
Examples:
|userid |password|
|admin | admin|








