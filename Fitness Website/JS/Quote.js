let arrQuotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt",
    "Do something today that your future self will thank you for. - Unknown",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama XIV",
    "You are stronger than you seem, braver than you believe, and smarter than you think. - A.A. Milne",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "Do not let what you cannot do interfere with what you can do. - John Wooden",
    "You don't get what you wish for, you get what you work for. - Daniel Milstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "You can't go back and change the beginning, but you can start where you are and change the ending. - C.S. Lewis",
    "The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "You are never too young to lead and never too old to learn. - Unknown",
    "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith. - Franklin D. Roosevelt",
    "The best revenge is massive success. - Frank Sinatra",
    "You don't have to control your thoughts. You just have to stop letting them control you. - Dan Millman",
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You can't build a reputation on what you are going to do. - Henry Ford",
    "The greatest wealth is to live content with little. - Epictetus",
    "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
    "You are the master of your destiny; you are the captain of your soul. - Nelson Mandela"
  ];

  function DisplayRandomQuote(arr) {
    let randomNumber = Math.floor(Math.random() * 30);
    document.getElementById("quote").textContent = arr[randomNumber];
  }

  function OpenQuote() {
    DisplayRandomQuote(arrQuotes)
    document.getElementById("myQuote").style.display = "block";
  }
  
  function CloseQuote() {
    document.getElementById("myQuote").style.display = "none";
  }