const fs = require('fs')
const axios = require('axios')
const chalk = require('chalk')
require("dotenv").config()



const searchForConcerts = (artist) => {
    axios.get(`https://rest.bandsintown.com/artists/${artist}/events/`,{
        params: {
            app_id: process.env.BANDS_IN_TOWN_KEY
        }
    })
    .then(function(response){
        console.log(response);
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