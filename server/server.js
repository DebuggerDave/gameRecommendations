const steamKeyModule = require('./steamKey');
let steamKey = steamKeyModule.steamKey();
var express = require('express');
var request = require('request');
var app = express();

app.get('/steam/friends/:steamid', function(httpRequest, httpResponse) {
    var steamid = httpRequest.params.steamid;
    // Calculate the Steam API URL we want to use
    var url = 'https://api.steampowered.com/ISteamUser/GetFriendList/' +
        'v1/?key=' + steamKey + '&steamid=' + steamid;
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        // Once we get the body of the steamHttpResponse, send it to our client
        // as our own httpResponse
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamHttpBody);
    });
});

app.get('/steam/user/:steamid', function(httpRequest, httpResponse) {
    var steamid = httpRequest.params.steamid;
    // Calculate the Steam API URL we want to use
    var url = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/' +
        'v1/?key=' + steamKey + '&steamid=' + steamid;
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamHttpBody);
    });
});

var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);
