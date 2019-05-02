module.exports = {
    url: "https://devmountain-qa.github.io/weatherman/build/index.html",
    commands: [{
        searchWeather: function (search, result) {
            this
                .setValue('@input', search)
                .click('@submit')
                .expect.element('@currentLocation').text.to.contain(result).before(5000)
            return this
        },
        searchAgain: function(){
            this
                .click('@searchAgain')
                .waitForElementVisible('@input')
            return this
        },
        checkError: function (search) {
            this
                .setValue('@input', search)
                .click('@submit')
                .expect.element('@errorMessage').text.to.contain('There was a problem fetching the weather!').before(5000)
            return this
        },
        tryAgain: function(){
            this
                .click('@tryAgain')
                .waitForElementVisible('@input')
            return this
        }
    }],
    elements: {
        input: '.enter-location__input',
        submit: '.enter-location__submit',
        currentLocation: '.current-weather__location',
        searchAgain: '.current-weather__search-again',
        errorMessage: '.error-message__message',
        tryAgain: '.error-message__try-again'

    }
}