const lyricsFile = 
`[ti:talkingheads]
[ar:Talking Heads]
[al:Speaking in tongues]
[la:EN]
[re:LRCgenerator.com]
[ve:3.00]

[00:15.60]Watch out
[00:17.68]You might get what you're after
[00:20.28]Cool babies
[00:22.69]Strange but not a stranger
[00:25.61]I'm an ordinary guy
[00:30.32]Burning down the house

[00:34.29]Hold tight
[00:36.36]Wait till the party's over
[00:39.05]Hold tight
[00:41.17]We're in for nasty weather
[00:44.26]There has got to be a way
[00:48.92]Burning down the house

[00:52.44]Here's your ticket, pack your bag
[00:54.71]Time for jumping overboard
[00:57.72]The transportation is here
[01:01.88]Close enough but not too far
[01:04.14]Maybe you know where you are
[01:07.11]Fighting fire with fire

[01:11.96]All wet
[01:14.22]Here, you might need a raincoat
[01:16.43]Shakedown
[01:18.66]Dreams walking in broad daylight
[01:21.41]Three hundred, sixty-five degrees
[01:26.38]Burning down the house

[01:29.75]It was once upon a place
[01:31.84]Sometimes I listen to myself
[01:34.92]Gonna come in first place
[01:39.06]People on their way to work
[01:41.48]Say “baby, what did you expect”
[01:44.34]Gonna burst into flame

[02:03.89]Burning down the house

[02:07.74]My house
[02:09.92]S'out of the ordinary
[02:12.38]That’s right
[02:14.50]Don't want to hurt nobody
[02:16.54]Some things sure can sweep me off my feet
[02:22.24]Burning down the house

[02:25.83]No visible means of support
[02:28.12]And you have not seen nothing yet
[02:31.10]Everything's stuck together
[02:35.13]I don't know what you expect
[02:37.32]Staring into the TV set
[02:40.40]Fighting fire with fire
[02:40.45] `;

var allTextLines = " ";
var lyrics = [];
var timestamps = [];
var line = " ";

// parsing the Lyrics 
function loadLyrics(allText) { // This will only divide with respect to new lines 
    allTextLines = allText.split(/\r\n|\n/);

    var actualCounter = 0;
    for (i = 0; i < allTextLines.length; i++) {
        if (allTextLines[i].search(/^(\[)(\d*)(:)(.*)(\])(.*)/i) >= 0)// any line without the prescribed format wont enter this loop 
        {
            line = allTextLines[i].match(/^(\[)(\d*)(:)(.*)(\])(.*)/i);
            timestamps[actualCounter] = (parseInt(line[2]) * 60000) + multiplyByOneThousand(line[4]); // will give seconds 
            lyrics[actualCounter] = line[6]; //will give lyrics 
            // console.log(timestamps[actualCounter], lyrics[actualCounter]);
            actualCounter++;
        }
    }
    function multiplyByOneThousand(str) {
        return parseFloat(str) * 1000;
    }
}