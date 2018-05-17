/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against application.
 */

/* All tests are placed within the $() function,
  to ensure that test don't run until the DOM is ready.
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

         // test if every feed's(obejct's) name is defined and not empty
         it('each name is defined and not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         })
    });

// test of menu element 
    describe('The menu', function() {

        let menuIcon = $('.menu-icon-link') ;
        let body = $('body');

// test if the menu element is hidden by default
        it('menu element is hidden by default', function() {
            expect((body).hasClass('menu-hidden')).toBe(true);
        });

// test if menu change when menu icon is clicked
        it('menu element changes visibility on click', function() {
            menuIcon.click();
            // the menu display when clicked
            expect((body).hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            // the menu hide when clicked again
            expect((body).hasClass('menu-hidden')).toBe(true);
        });
    });

// test of .feed container to have at least one entry once loadFeed function is completed
    describe('Initial Entries', function() {

// ensure that loadFeed function is called and completed
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

// test if there is at least one entry in .feed container
        it('at least one entry is present in .feed container', function(done) {
            let entryNum = $('.feed .entry').length;
            expect(entryNum).not.toBe(0);
            done();
        });
    });

// test if content of feeds changes once new feed is loaded
    describe('New Feed Selection', function() {

        let startContent; 
        let loadedContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                startContent = $('.feed').html();
                loadFeed(1, function() {
                    let loadedContent = $('.feed').html();
                done();
                });
            });
        });

// test if content of .feed element is different before and after loadFeed function is called and completed
        it('feed content changes after loading', function(done) {
            expect(startContent).not.toBe(loadedContent);
            done();
        });
    });
}());

