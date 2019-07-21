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
        console.log(data.tracks.items[0])
    })

}

module.exports = {
    searchForConcerts: searchForConcerts,
    spotifyThis: spotifyThis,
}