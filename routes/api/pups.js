const router = require("express").Router();
// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");
//const booksController = require("../../controllers/booksController");

// Matches with "/api/pups"
router.get("/", function(req, res)
{
  request("https://cuddly.com/shelter/39529?fbclid=IwAR0tTeunJy3qISBM6L9ZG42erzI0ZBMEB_BTm28DzYLIoIqHH4E12AjU0tE", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  $(".cdly-campaign-pet").each(function(i, element)
  {

    // Save the text of the element in a "title" variable
    // var title = $(element).text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    var name = $(element).children().children().children().children(".cdly-campaign-pet-name").text().replace(/\s/g, "");
    //console.log(name)
    var link =$(element).children().attr("href");
    var urgent=false;
    if(link==undefined){
      link=$(element).children().next().attr("href");
      urgent=true;
    }

    console.log()
    var img = $(element).children().children().children().children().attr("style").split(" ")[1].replace("url(", "").replace("?h=330&fit=contain);", "");
    //console.log(img)
    var loc = $(element).children().children().children().children().children().text().split("Austin Bulldog")[0].replace(/\s/g, "");
    //console.log(loc)
    console.log("------")

    var donationsneeded = $(element).children().children().children().children().children().text().replace(/\s/g, "").split("$")[1].replace("donationsneeded", "");
    var itemsneeded = $(element).children().children().children().children().children().text().replace(/\s/g, "").split("...")[1];//.split("items")[0]
    if(itemsneeded.indexOf("items")==-1){
      itemsneeded="0";
    }
    else{
      itemsneeded=itemsneeded.split("items")[0];
    }
    //var donate = $(element).children().children().children().children().children().text().replace(/\s/g, "").split("...")[1].split("items")[0]
    var desc = $(element).children().children().children().children(".cdly-campaign-pet-desc").text().trim();



//send back data obj for each cuddly pup
    results.push({
      urgent:urgent,
      name: name,
      link: link,
      img:img,
      desc:desc,
      loc:loc,
      donationsneeded:donationsneeded,
      itemsneeded:itemsneeded
      //donate:donate
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
  console.log("done")
  res.json(results);
});


  });


module.exports = router;
