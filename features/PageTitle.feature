Feature: Check the page title

@PageTitle
Scenario Outline: Check page title for Adoption page
Given I am on the zoo website
When I navigate to <xx_link>
Then I check page title is "<xx>"

Examples:
    |xx_link        |xx       |
    |adoption_link  |Adoption |
    |about_link     |About Zoo|
    |contact_link   |Contact  |