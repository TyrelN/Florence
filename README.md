# Florence
A multi-purpose discord bot using discord.js!  
This bot was built mostly for my own amusement. All of the features however can easily be repurposed for general use.<br><br>
# Features:<br>
-Basic music functionality: Florence can play audio from youtube videos, and store a queue of videos to play in sequence with the ability to display a queue, stop a queue or skip a song.<br>
-Simple currency/keyword detection system: local text files hold keywords that are consistently checked for in messages, which triggers a currency increase in a member's balance. The balance and member data is stored with an SQLite database. There are additional checks for mentions of the bot for cheeky retort purposes (just for fun, can be removed).<br>
-Voice Channel audio notification: When members join a voice channel that already holds a user, the bot will join as well and play a randomly chosen sound clip that was added to the database (by either the user or admin).<br>
-Shopping for compliments: Users can "-buy" a variety of compliments and praise messages for other users that will spend your tokens, which in turn will put you in good standing with the bot.<br>
-Web-scraped Dota 2 statistics: Florence can grab win rate and pick rate data from https://www.dotabuff.com/ to display to users via a command.<br>
-Daily announcements and birthdays: By checking a textfile that can be written to by users via a command, florence will check that textfile at a specified time of day and send a message's contents to a specified channel. The textfile will be wiped after the message is broadcast. (Additionally, configured members may have a birthday message played for them on their birthday!)
<br><br>
# Setup Tips:<br>
-This program requires Node.Js on the host computer to function.<br>
-In a terminal at the root project folder, type: "Node dbInit.js" To initialize a local database for the currency/shop system.<br>
-Once you've set up your own bot at https://discord.com/developers/applications/ , you will need to grab the uniquely generated token and apply it to a "config.json" file with a 'token' and 'prefix' value. Use the generated token value for the first parameter, and the key you want pressed before a command as the second (example: "!").<br>
-To use the local audio and keyword detection functionality, you will need to provide your own mp3 and text files (text file must have keywords seperated by a comma) and link them within the index.js file in the appropriate areas.<br><br>
# References:<br>
https://discordjs.guide/<br>
https://gabrieltanner.org/blog/dicord-music-bot<br>
https://medium.com/@andre.devries/how-to-create-a-task-scheduler-in-nodejs-ad67eadad467<br>
https://dev.to/masbagal/saving-image-from-url-using-node-js-5an6<br>
https://flaviocopes.com/node-download-image/<br>
https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b<br>
https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/

