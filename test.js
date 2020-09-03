
// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");
//const booksController = require("../../controllers/booksController");

// Matches with "/api/pups"
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
    var urgent=false;
    if(link==undefined){
      link=$(element).children().next().attr("href");
      urgent=true;
    }


    var img = $(element).children().children().children().children().attr("style").split(" ")[1].replace("url(", "").replace("?h=330&fit=contain);", "");
    //console.log(img)
    var loc = $(element).children().children().children().children().children().text().split("Austin Bulldog")[0].replace(/\s/g, "");
    //console.log(loc)
    console.log("------")

    var donationsneeded = $(element).children().children().children().children().children().text().replace(/\s/g, "").split("$")[1].replace("donationsneeded", "");
    var itemsneeded = $(element).children().children().children().children().children().text().replace(/\s/g, "").split("...")[1].split("items")[0]
    var itemsneeded = $(element).children().children().children().children().children().text().replace(/\s/g, "").split("...")[1]//.split("items")[0]
    if(itemsneeded.indexOf("items")==-1){
      itemsneeded="0";
    }
    else{
      itemsneeded=itemsneeded.split("items")[0];
    }

    var donate = $(element).children().children().children().children().children().text().replace(/\s/g, "").split("...")[1].split("items")[0]
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
      itemsneeded:itemsneeded,
      //donate:donate
    });
    // var itemsneeded = $(element).children().children().children().children().children().text().replace(/\s/g, "").split("...")[1].split("items")[0]


    //console.log($(element).children().children().children().children().children().text().replace(/\s/g, "").split("...")[1].split("items")[0])
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
  console.log("done")
});
