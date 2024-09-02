let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [
        'Reasons to hire me are that I am creative, hardworking, and autonomous.',
        'Based in Paris but willing to move anywhere.',
        'I learned coding while having a 40h/week manual job so yes, I really want to get this job !',
        'Learning how to code has been kind of a hobby thing to me.',
        'Contact me and we will discuss further !'
    ];

    btn.addEventListener('click', function(){
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        output.innerHTML = randomQuote;
    })

