let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. distinctio optio unde officia, necessitatibus quibusdam.",
    person: `M.Kemal ATATURK`,
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sint ab adipisci eum deserunt distinctio optio .",
    person: `Mahatma Gandhi`,
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sint ab adipisci, necessitatibus quibusdam.",
    person: `Albert Enstein`,
  },
  {
    quote:
      "adipisicing elit. Vel sint ab adipisci eum deserunt distinctio optio unde officia, necessitatibus quibusdam.",
    person: `Aristotle`,
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sint ab adipisci eum , necessitatibus quibusdam.",
    person: `Steve Jobs`,
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sint ab adipisci eum deserunt distinctio optio .",
    person: `Benjamin Franklin`,
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sint ab adipisci eum deserunt distinctio optio",
    person: `Conficuis`,
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sint ab adipisci unde officia, necessitatibus quibusdam.",
    person: `Dalai Lama`,
  },
  {
    quote:
      "consectetur adipisicing elit. Vel sint ab adipisci eum deserunt distinctio optio unde officia, necessitatibus quibusdam.",
    person: `Lao Tzu`,
  },
  {
    quote:
      ". Vel sint ab adipisci eum deserunt distinctio optio unde officia, necessitatibus quibusdam.",
    person: `Oprah Winfrey`,
  }
];

btn.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})