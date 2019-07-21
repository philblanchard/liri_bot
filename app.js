const yargs = require('yargs')
const chalk = require('chalk')
const axios = require('axios')
const func = require('./functions.js')

yargs.command({
    command: 'concert-this',
    describe: "find an artist's concert info",
    builder: {
        artist: {
            describe: 'Artist name',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        console.log('hi')
        func.searchForConcerts(argv.artist)
    }
})

yargs.command({
    command: 'spotify-this-song',
    describe: 'Find information on a song',
    builder: {
        title: {
            describe: "Song's title",
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        //to add: song info search
    }
})

yargs.command({
    command: 'movie-this',
    describe: 'Search for info about a movie',
    builder: {
        title: {
            describe: "Movie's title",
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        //to add: movie search func
    }
})

yargs.command({
    command: 'do-what-it-says',
    describe: 'Do what the text file(random.txt) says',
    handler: function() {
        //to add: weird functi
    }
})

yargs.parse();
