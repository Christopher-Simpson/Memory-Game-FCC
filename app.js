document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'bramble',
            img: 'images/bramble.png'
        },
        {
            name: 'bramble',
            img: 'images/bramble.png'
        },
        {
            name: 'highball',
            img: 'images/highball.png'
        },
        {
            name: 'highball',
            img: 'images/highball.png'
        },
        {
            name: 'julep',
            img: 'images/julep.png'
        },
        {
            name: 'julep',
            img: 'images/julep.png'
        },
        {
            name: 'martini',
            img: 'images/martini.png'
        },
        {
            name: 'martini',
            img: 'images/martini.png'
        },
        {
            name: 'mint',
            img: 'images/mint.png'
        },
        {
            name: 'mint',
            img: 'images/mint.png'
        },
        {
            name: 'spritz',
            img: 'images/spritz.png'
        },
        {
            name: 'spritz',
            img: 'images/spritz.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/marble.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            alert('You clicked the same image')
            cards[optionOneId].setAttribute('src', 'images/marble.jpg')
            cards[optionTwoId].setAttribute('src', 'images/marble.jpg')
        } 
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/marble.jpg')
            cards[optionTwoId].setAttribute('src', 'images/marble.jpg')
            cards[optionOneId].removeEventListener('click', flipCard) 
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen) 
        } else {
            cards[optionOneId].setAttribute('src', 'images/marble.jpg')
            cards[optionTwoId].setAttribute('src', 'images/marble.jpg')
            alert('Try Again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray/2) {
            resultDisplay.textContent = 'You found them all!'
        }
    }

    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    } 

    createBoard()
})