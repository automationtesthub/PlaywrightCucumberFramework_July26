
Feature: Login Functionality

Background:
Given user should be on login page


@abc
Scenario: TC01_valid_login
When user enters the valid credentials 
Then user should be navigated to home page
And user can see the logout link


@abc
Scenario: TC02_Invalid_login
When user enters the invalid credentials 
Then user should be navigated to login page
And user can see the login error message



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








