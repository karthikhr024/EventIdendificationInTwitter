require('dotenv').config()
var twitter = require('twitter');

var config = {
  consumer_key : process.env.CONSUMER_KEY,
  consumer_secret:process.env.CONSUMER_SECRET,
  access_token_key:process.env.ACCESS_TOKEN_KEY,
  access_token_secret:process.env.ACCESS_TOKEN_SECRET
};

var producer = new twitter(config);

producer.stream('statuses/filter', {track:'javascript'}, function(stream){

  stream.on('data', function(event){
    console.log(event && event.text);
  });

  stream.on('error', function(error){
    console.log(error);
    throw error;
  });

});
