const getRandomJoke = async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const joke = await response.json()
        console.log(joke)
    } catch (error) {
        console.error(error)
    }
}

getRandomJoke()
