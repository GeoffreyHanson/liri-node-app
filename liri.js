// require("dotenv").config();


// Import keys.js
// var spotify = Spotify(keys.spotify);

// Packages
var request = require("request"); 

// COMMANDS
command = process.argv[2];

// Concerts
if (command === "concert-this") {
    var nodeArgs = process.argv;
    var artistName = "";
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
        artistName = artistName + "+" + nodeArgs[i];
        }
    
        else {
        artistName += nodeArgs[i];
        }
    }
    var queryUrl = ("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp");
    console.log(queryUrl);
    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {        
            console.log(
                // Couldn't figure out the proper syntax for this in time.
                `\nVenue Name: ${JSON.parse(body).venue.name}
                \nLocation: ${JSON.parse(body).venue.location}
                \nDate: ${JSON.parse(body).venue.date}`
            );
        }
    });
} 
 

// Movies
if (command === "movie-this") {
    var nodeArgs = process.argv;
    var movieName = "";
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
        }
    
        else {
        movieName += nodeArgs[i];
        }
    }
    if (movieName === "") {
        movieName = "Mr. Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    // console.log(queryUrl);

    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {        
            console.log(
                `\nTitle: ${JSON.parse(body).Title}
                \nRelease Year: ${JSON.parse(body).Year}
                \nIMDB Rating: ${JSON.parse(body).imdbRating}
                \nRotten Tomatoes Rating: ${JSON.parse(body).tomatoRating}
                \nProduced in: ${JSON.parse(body).Country}
                \nLanguage: ${JSON.parse(body).Language}
                \nPlot: ${JSON.parse(body).Plot}
                \nActors: ${JSON.parse(body).Actors}`
            );
        }
    });
} 

// Songs