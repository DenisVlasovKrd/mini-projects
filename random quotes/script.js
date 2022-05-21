document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  generate = () => {
    var quotes = {
      "- Наполеон Хилл, журналист и писатель ": '"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"',
      "- Альберт Эйнштейн": '"Стремитесь не к успеху, а к ценностям, которые он дает​"',
      "- Флоренс Найтингейл": '"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других."',
      "- Майкл Джордан": '"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха."',
      "- Амелия Эрхарт": '"Сложнее всего начать действовать, все остальное зависит только от упорства."',
      "- Федор Достоевский": '"Надо любить жизнь больше, чем смысл жизни."',
      "- Джон Леннон": '"Жизнь - это то, что с тобой происходит, пока ты строишь планы."',
      "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
      "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
      "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
      "- Babe Ruth": '"Every strike brings me closer to the next home run."',
      "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
      "- Earl Nightingale": '"We become what we think about."',
      "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
      "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
      "- Buddah": '"The mind is everything. What you think you become."',
      "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
      "- Woody Allen": '"Eighty percent of success is showing up."',
      "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
      "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
      "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
      "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
      "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
      "- Jim Rohn": '"Either you run the day, or the day runs you."',
      "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
      "- Frank Sinatra": '"The best revenge is massive success."',
      "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
      "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
      "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
      "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
      "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
      "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
      "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
    };
  
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author]
  
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
  
  }
  