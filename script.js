var btn = document.getElementById('btn')
var output = document.getElementById('output')
var quotes=
[	
	'"The journey of a thousand miles begins with one step."- Lao Tzu',
	'"That which does not kill us makes us stronger."- Freidrich Nietzsche',
	'"Life is what happens when you are busy making other plans."- John Lennon',
	'"When the going gets tough, the tough get going."- Joe Kennedy',
	'"You must be the change you wish to see in the world."- Mahatma Gandhi',
	'"You only live once, but if you do it right, once is enough."- Mae West',
	'"Tough times never last but tough people do."- Robert H. Schuller',
	'"Whether you think you can or you think you can’t, you’re right."- Henry Ford',
]
btn.addEventListener('click',function(){
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
	output.innerHTML = randomQuote;
})