User story for Draft:

User navigates to the draft page
* If user is not logged in, draft page will instruct user to log in
* If user is logged in, Tournament details and available golfers should be displayed, as well as a button to initiate draft (in the future this button should be for users with admin accounts only)

When the initiate draft button is clicked, a random draft order is created and displayed. 
If the user has the first overall pick, all available golfers will become draftable. If the user does not pick first, the available golfers should remain undraftable until it is the users pick. 

When it is the users turn to pick and they select a golfer, it should update the BE database, remove the golfer from the list of available golfers for all users and add the golfer to the users 'My Team' display.

When a user has 5 golfers on it's team it should no longer be able to draft. 

When all users have 5 golfers the draft should end. 

