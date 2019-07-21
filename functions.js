const fs = require('fs')
const axios = require('axios')
const chalk = require('chalk')
require("dotenv").config()
const parseJson = require('parse-json')
const moment = require('moment')



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

module.exports = {
    searchForConcerts: searchForConcerts
}