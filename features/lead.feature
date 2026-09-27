
Feature: lead functionality

@lead
Scenario: lead creation
Given user should be on login page
When user enters the valid credentials 
When user enter the lastname as "<lastname>" and company as "<company>" and click on save button
|lastname | company|
|Modi     | BJP    |
|Gandhi   | Congress|
|Shah     | BJP     |
And close the browser