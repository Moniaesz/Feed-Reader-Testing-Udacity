## FEED READER TESTING

This project is an exercise for practice of framework [Jasmine](http://jasmine.github.io/), that allows to test JavaScript Code. 

## How to start

Clone the repository or download zip folder from https://github.com/Moniaesz/Feed-Reader-Testing-Udacity.

* if You want to see tests out put - open index.html (Jasmine panel with number of spec and failures will appear on the bottom of the screen)

* if You want to see the tests itself - open feedreader.js file where all test suites are placed

## Test suites

1. RSS Feeds
* test if every feed's url is defined and not empty 
* test if every feed's name is defined and not empty
2. The menu
* test if the menu element is hidden by default
* test if menu change when menu icon is clicked (show and hide)
3. Initial Entries
* test if .feed container have at least one entry once loadFeed function is completed
4. New Feed Selection
* test if content of feeds changes once new feed is loaded

### Project dependencies:

* Jasmine documentation https://jasmine.github.io/2.0/introduction.html
* Jasmine matcher's list https://github.com/JamieMason/Jasmine-Matchers