Feature: Login to application

Background: 
   Given I open login page

@smoke
    Scenario: Valid login
     #Given I open login page
     #When I submit login
     When I fill username with "standard_user"
     And I fill password with "secret_sauce"
     And I click submit login
     Then I should see homepage
@regression
  Scenario: InValid login
     #Given I open login page
     #When I submit login
     When I fill username with "invalidUser"
     And I fill password with "invalidPassword"
     And I click submit login
     Then I should see error message
   Scenario: Valid login with datatable
    # Given I open login page
     When I login as following user
      |username     |password    |
      |problem_user |secret_sauce|
     And I click submit login
     Then I should see homepage
     
