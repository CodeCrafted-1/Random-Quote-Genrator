var quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Dream big and dare to fail. – Norman Vaughan",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "It does not matter how slowly you go, as long as you do not stop. – Confucius",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Difficulties in life are intended to make us better, not bitter. – Dan Reeves",
    "Act as if what you do makes a difference. It does. – William James",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Your time is limited, don't waste it living someone else’s life. – Steve Jobs",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "In the end, we only regret the chances we didn’t take. – Lewis Carroll",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "Don't limit your challenges. Challenge your limits. – Unknown",
    "Change your thoughts and you change your world. – Norman Vincent Peale"
]

const usedindex = new Set()

const quoteElement = document.getElementById("quote")

function genrateQuote() {

    if (usedindex.size >= quote.length) {
        usedindex.clear()
    }

    while (true) {
        var randomIndex = Math.floor(Math.random() * quotes.length)

        if (usedindex.has(randomIndex)) continue

        var quote = quotes[randomIndex]
        quoteElement.innerHTML = quote;
        usedindex.add(randomIndex)
        Break 
    }
    
}