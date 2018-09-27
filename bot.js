console.log("The bot is starting");

//import statement
var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//parameters for searching. Basic Outline for searching twitter
//var params = {
//    q: 'shwifty', 
//    count: 2
//};

//T.get('search/tweets', params, gotData);

//function gotData(err, data, response) {
//    var tweets = data.statuses;
//    for(var i = 0; i < tweets.length; i++)
//        {
//            console.log(tweets[i].text);
//        }
//};

tweetit();
setInterval(tweetit, 1000*60*60);

function tweetit() {
    //code forposting a tweet
    var date = new Date();
    var t = date.getDate().toString();
    var tweet = {
        status: 'This post was tweeted at: ' + t
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if(err)
            console.log("Something went wrong :(");
        else
            console.log("Successful tweet");
    }

}