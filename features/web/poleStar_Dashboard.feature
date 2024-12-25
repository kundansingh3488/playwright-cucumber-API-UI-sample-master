@UI
Feature: Tc:01 Varrify home page components

    Background:
        Given user is on main page

    @regression
    @sanity
    @polestar
    Scenario: Varify home page components
        When Accept popup of home page
        When Select menu option "Polestar 4"
        When Select "Design and order" option
        When Select "Long range Dual motor" option
        When select exterior "<colour>" of the car
        Then Varify colour of the car should be "<changed>"
        When Select "Pilot-paketet" first check box
        When Select "Elektrokromatiskt glastak" check box