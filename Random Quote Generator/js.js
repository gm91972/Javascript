let button = document.querySelector('.btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

let quotes = [
    {
    quote: "I believe life is an intelligent thing: that things aren't random",
    person: "- Steve Jobs"},
   { quote: "Goals transform a random walk into a chase.",
    person: "- Mihaly Csikszentmihalyi"},
   { quote: "Together we can change the world, just one random act of kindness at a time.",
    person: "- Ron Hall"},
   { quote: "The amount of random conversations that lead to culture-shifting ideas is insane.",
    person: "- Virgil Abloh"},
   { quote: "Random chance plays a huge part in everybody's life.",
    person: "- Gary Gygax"},
   { quote: "A person who never made a mistake never tried anything new.",
    person: "- Albert Einstein"},
   { quote: "The only person you are destined to become is the person you decide to be.",
    person: "- Ralph Waldo Emerson"},
   { quote: "Everything you’ve ever wanted is on the other side of fear.",
    person: "- George Addair"},
    
]

button.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});