## 1. What feature did you implement?
I implemented the scoreboard feature to show how many time hare and tortoise win the race. 


## 2. What was the most difficult bug or issue?
To make it work I had to add a few extra lines to the base code that would reset hare and tortoise's positions when "start race" button is clicked again, so that the page does not refresh and you can play as many turns as you like (and the scoreboard would actually update). They were added at the start of startRace function (see below): 
    tortoisePosition = 1
    harePosition = 1
    stepCount = 0
    renderTrack()

Also, I had to fix my "running" logic for hare and tortoise (modify the numbers by which they move) because even though it's random I found that the hare had higher probability to win due to "big jumps" that I gave him (hare won 4 times in a row). So, I lowered some numbers for hare, and increased some numbers for turtle to make their chances more even.


## 3. Paste your 3 best commit messages.
Feat: add reset positions to start new race, modify jumping logic.
Add CSS flexbox styling to HTML scoreboard element
Add HTML scoreboard structure and create win count variables

## 4. Add a screenshot of your Pull Request page
![Pull request screenshot](image-1.png)