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
        func.spotifyThis(argv.title)
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
        console.log('searching for film')
        func.movieSearch(argv.title)
    }
})

yargs.command({
    command: 'do-what-it-says',
    describe: 'Do what the text file(random.txt) says',
    builder: {
        fileName: {
            describe: 'Name of the file to load',
            demandOption: false,
            type: 'String'
        }
    },
    handler (argv) {
        arg = func.fileRead(argv.fileName)

    }
    
}) 

yargs.parse();


