var searches = [
    { valid: true, input: '95820', result: 'Sacramento' },
    { valid: true, input: 'New York', result: 'New York' },
    { valid: true, input: 'London', result: 'London' },
    { valid: true, input: '84601', result: 'Provo' },
    { valid: false, input: '' },
    { valid: false, input: 'asdfghjkjhgfdsasdfghjkjhgfds' },
    { valid: false, input: '2' },
    { valid: false, input: '!!@#$%^&*()(*&^%$#@' },
]

var myArray = [
    { input: '95820', result: 'Sacramento' },
    { input: 'Provo', result: 'Provo' }
]

let myFunction = function (browser, data) {
    browser
        .setValue('.enter-location__input', data.input)
        .click('.enter-location__submit')
        .expect.element('.current-weather__location').text.to.contain(data.result)
    browser
        .click('.current-weather__search-again')
}

var weatherPage = {}
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherPage()
        weatherPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Test': browser => {
        searches.forEach(search => {
            if (search.valid)
                weatherPage.searchWeather(search.input, search.result).searchAgain()
            else
                weatherPage.checkError(search.input).tryAgain()
        })
    },
    'Test2': browser => {
        myArray.forEach(test => {
            myFunction(browser, test)
        })
    }
}