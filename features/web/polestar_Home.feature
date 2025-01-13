@UI @polestar
Feature: Tc:01 Varify home page components

    Background:
        Given user is on main page
        
    @regression
    @sanity
    @polestar_1
    Scenario: Varify home page components
        When Select menu option "Polestar 4"
        When Select "Configure" option
        When Select long range "Dual motor" option
        When select exterior "Gold colour" of the car
        When select upgrade "Pro pack" check box
        When Select "Elektrokromatiskt glastak" check box
        Then select "Save configuration"


    @regression
    @sanity
    @polestar_2
     Scenario Outline: Book Test drive for car model
        When Select "<product>" from menus bar
        When Select "Test drive"
        Then Verify that the selected model is "<product>"
        And select avalible space address for test drive
        And select avalible date and time from calender
        And user enters the contact details "<firstName>", "<lastName>", "<email>", "<phone>", "<zipCode>"
        And select "Private customer" from the Private customer dropdown
        And select test drive Terms and Conditions checkbox
        Then varify "Confirm booking" button enabled
        Examples:
            | product      |  firstName    |  lastName    |  email               |  phone       | zipCode     |
            | Polestar 3   |  abcd         | xyz          | john_{0}@email.com   | 123456       | 54321       |