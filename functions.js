const fs = require('fs')
const axios = require('axios')
const chalk = require('chalk')
require("dotenv").config()
const parseJson = require('parse-json')
const moment = require('moment')
const Spotify = require('node-spotify-api')



const spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});





const searchForConcerts = (artist) => {
    axios.get(`https://rest.bandsintown.com/artists/${artist}/events/`,{
        params: {
            app_id: process.env.BANDS_IN_TOWN_KEY
        }
    })
    .then(function(response){
        var data = response.data 
        console.log(chalk.magenta(`${artist} Concert`))
        for (i in data){
            console.log(chalk.green('-------------'))
            console.log(`Venue: ${data[i].venue.name}`)
            console.log(`Country: ${data[i].venue.country}`)
            console.log(`City: ${data[i].venue.city}`)
            console.log(`Date: ${moment(data[i].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")}`)
        }
    })
    .catch(function (error){
        console.log(error)
    })
    .then(function () {
    })
}

const spotifyThis = (songTitle) => {
    spotify.search({type: 'track', limit: '1', query: `${songTitle}`}, function(err, data){
        if (err) {
            return console.log(chalk.red(`Error Occured: ${err}`))
        }
        console.log(chalk.green('----Spotify Song Search----'))
        console.log('Artist: ' + data.tracks.items[0].album.artists[0].name)
        console.log('Song Title: ' + data.tracks.items[0].name)
        console.log('Preview (If Available): ' + data.tracks.items[0].preview_url)
        console.log('Album Title: ' + data.tracks.items[0].album.name)
        console.log(chalk.green('--------------------'))
    })
}

const movieSearch = (title) => {
    axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'trilogy',
            t: title
        }
    })
    .then(function(response){




        console.log(chalk.green('----OMDB Film Search----'))
        console.log('Movie Title: ' + response.data.Title)
        console.log('Release Year: ' + response.data.Year)
        console.log('IMDB Rating: ' + response.data.imdbRating)
        console.log('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value)
        console.log('Country: ' + response.data.Country)
        console.log('Language: ' + response.data.Language)
        console.log('Plot: ' + response.data.Plot)
        console.log('Cast: ' + response.data.Actors)
        console.log(chalk.green('----------------'))

    })
    .catch(function (error){
        console.log(error)
    })
    .then(function (){

    })
}

module.exports = {
    searchForConcerts: searchForConcerts,
    spotifyThis: spotifyThis,
    movieSearch: movieSearch
}