# TestingTrial

# Trial 1: BDD Specifications

# FRONT-END

Scenario: 1-Check that the reward history (obtained and claimed) works properly.

#Given the user is in the Freebies Vault Section
#And he claims a reward (token)
#Then the "Your history" section will be displayed
#And the token displays 1 characteristic thumbnail
#And hovering the mouse cursor over a token displays its name

Scenario 2:-Check that only the last 8 tokens with thumbnails can be seen

Given the user is in the Freebies Vault Section
And the user claims 10 rewards (tokens)
When the "Your history" section is displayed
Then only the last 8 tokens can be seen
And each token displays 1 characteristic thumbnail

# BACK-END

Scenario: 1-Check the given method (/igc/betspin/rewards/history) with only 1 param 'userName'

Given the method '/igc/betspin/rewards/history'
When it has only 1 param 'userName'
Then we get a JSON with an array of unique tokens claimed by user
And each unique token claimed could have been claimed more than once (sub-array objects)
And each sub-array object contains the following info: game-slug, date claimed, info, reason, expiry date
And the array response is in chronological order
And the sub-array response is in chronological order


# Not covered in the Business requirements:

1. Hovering the mouse cursor over a token displays its name.
2. How to get rewards and from which games?
3. How many tokens can a user claim?
4. If a user claimed more than 8 tokens then how will he see the rest of claimed tokens?
5. How many times can a user claim same unique token?
