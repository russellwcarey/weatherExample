var searches = [
    {valid: true, input: '95820', result: 'Sacramento'},
    {valid: true, input: 'New York', result: 'New York'},
    {valid: true, input: 'London', result: 'London'},
    {valid: true, input: '84601', result: 'Provo'},
    {valid: false, input: ''},    
    {valid: false, input: 'asdfghjkjhgfdsasdfghjkjhgfds'},    
    {valid: false, input: '2'},    
    {valid: false, input: '!!@#$%^&*()(*&^%$#@'},    
]
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
            if(search.valid)
                weatherPage.searchWeather(search.input, search.result).searchAgain()
            else
                weatherPage.checkError(search.input).tryAgain()
        })
    }
}