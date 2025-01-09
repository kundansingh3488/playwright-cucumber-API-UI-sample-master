@UI
Feature: Tc:01 Varrify home page components

    Background:
        Given user is on main page

    @regression
    @sanity
    @polestar
    Scenario: Varify home page components
        When Select menu option "Polestar 4"
        When Select "Design and order" option
        When Select "Long range Dual motor" option
        When select exterior 'colour' of the car
        Then Varify colour of the car should be "<changed>"
        When Select "Pilot-paketet" first check box
        When Select "Elektrokromatiskt glastak" check box

    @regression
    @sanity
    @polestar
     Scenario Outline: Select Test drive for selected car model
        When Select menu option "<product>"
        When Select "Test drive"
        Then Varify Select model "<List>"

        When Select "Long range Dual motor" option
        When select exterior "<colour>" of the car
        Then Varify colour of the car should be "<changed>"
        When Select "Pilot-paketet" first check box
        When Select "Elektrokromatiskt glastak" check box
        Examples:
            | product      |    List       |
            | Polestar 2   |  Polestar 2   |
            | Polestar 3   |  Polestar 3   |
