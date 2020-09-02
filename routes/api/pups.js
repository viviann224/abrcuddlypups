const router = require("express").Router();
// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");
//const booksController = require("../../controllers/booksController");

// Matches with "/api/pups"
router.get("/", function(req, res)
{
  // Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
  request("https://cuddly.com/grant-a-poundwish?term=austin+bulldog+rescue&breed=&location=&breedName=&locationName=", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];


  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  //
  $(".cdly-campaign-pet").each(function(i, element)
  {

    // Save the text of the element in a "title" variable
    // var title = $(element).text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    var name = $(element).children().children().children().children(".cdly-campaign-pet-name").text().replace(/\s/g, "");
    //console.log(name)
    var link =$(element).children().attr("href");
    var img = $(element).children().children().next().attr("href");
    console.log(img)

    // Save these results in an object that we'll push into the results array we defined earlier
    // results.push({
    //   title: title,
    //   link: link
    // });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  //console.log(results);
  console.log("done")
});

    res.send("works");
  });


module.exports = router;
