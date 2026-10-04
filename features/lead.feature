
Feature: lead functionality

@lead
Scenario: lead creation with step paramters
Given user should be on login page
When user enters the valid credentials 
When user enter the lastname as "<lastname>" and company as "<company>" and click on save button
|lastname | company|
|Modi     | BJP    |
|Gandhi   | Congress|
|Shah     | BJP     |


@ankita
Scenario Outline: TC03_lead_with_mandatory_fields
Given user should be on login page
When user enters the valid credentials
And user click on new lead link
And enter lastname and company name and click on save button
Then lead should be created successfully
