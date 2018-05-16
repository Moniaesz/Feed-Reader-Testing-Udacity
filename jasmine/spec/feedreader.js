/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

// test of RSS feeds, reffers to feeds stored as objects in the array assigned to allFeeds variable
    describe('RSS Feeds', function() {

        // test if allFeeds is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // test if every feed's(obejct's) url is defined and not empty
        it('each url is defined and not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
         });

         // test if every feed's(obejct's) name 
         it('each name is defined and not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         })
    });

// test of menu element (hidden by default)
    describe('The menu', function() {

        let menuIcon = $('.menu-icon-link') ;

// test if the menu element is hidden by default
        it('menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

// test if menu change when menu icon is clicked
        it('menu element changes visibility on click', function() {
            menuIcon.click();
            // the menu display when clicked
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            // the menu hide when clicked again
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
