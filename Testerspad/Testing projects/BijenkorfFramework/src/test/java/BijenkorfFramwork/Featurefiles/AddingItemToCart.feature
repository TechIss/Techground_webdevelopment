Feature: Submit item to cart on https://www.debijenkorf.nl/ by clicking the In winkelmand button
	A user should be able to add an item of the store by clicking on the In winkelmand button
	If user clicks on In winkelmand button and user should be able to click Bestellen then user
	user should be navigated to Winkelmand.

Scenario: Submit item to cart using the button winkelmand en bestellen
	Given user navigates to debijenkorf website
	When I click on the button DAMES
	Then I click on the button Schoenen
	Then I click on the button Sneakers
	Then I click on the first shoes
	And I select a size by clicking on the down menu of Selecteer maat
	And I choose a size
	And I can click on the button In winkelmand
	When I click on the button In winkelmand 
	Then I should be able to click Bestellen
	
	