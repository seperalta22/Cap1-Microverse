const speakers = [
  {
    name: 'Evan You',
    title: 'Creator of Vue and Vite.js',
    description: 'Evan You is the creator of Vue.js, a progressive framework for building user interfaces. He is also the creator of Vite.',
    image: '5.svg',
  },
  {
    name: 'Brendan Eich',
    title: 'Creator of JavaScript',
    description: 'Brendan Eich is an American computer scientist and the creator of JavaScript. He is the co-founder and CTO of Brave Software.',
    image: '4.svg',
  },
  {
    name: 'Sarah Drasner',
    title: 'Staff Developer Advocate at Netlify',
    description: 'Sarah Drasner is a Staff Developer Advocate at Netlify. She is the author of SVG Animations, SVG on the Web, and Animating the Web. .',
    image: '6.svg',
  },

  {
    name: 'Ken Thompson',
    title: 'Creator of Unix and co-creator of Go',
    description: 'Ken Thompson is a computer scientist and the creator of Unix, the C programming language, and the Go programming language.',
    image: '1.svg',
  },
  {
    name: 'David H. Hansson',
    title: 'Creator of Ruby on Rails',
    description: 'David Heinemeier Hansson is a Danish software engineer and the creator of Ruby on Rails.',
    image: '2.svg',
  },
  {
    name: 'Linus Torvalds',
    title: 'Creator of Linux',
    description: 'Linus Torvalds is a Finnish software engineer and the creator of Linux, the most popular open-source operating system.',
    image: '7.svg',
  },
];

const speakersContainer = document.getElementById('speakers');

const title = document.createElement('h2');
title.classList.add('title', 'text-xl');
title.textContent = 'Featured Speakers';
speakersContainer.appendChild(title);

function createSpeakerElement(speaker) {
  const speakerElement = document.createElement('div');
  speakerElement.classList.add('speaker');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const speakerImage = document.createElement('img');
  speakerImage.classList.add('speaker-image');
  speakerImage.src = `assets/img/${speaker.image}`;

  const speakerName = document.createElement('h2');
  speakerName.classList.add('font-bold', 'text-lg');
  speakerName.textContent = speaker.name;

  const speakerTitle = document.createElement('h3');
  speakerTitle.classList.add('text-sm', 'text-naranja', 'mb-2', 'italic');
  speakerTitle.textContent = speaker.title;

  const speakerDescription = document.createElement('p');
  speakerDescription.classList.add('text-xs');
  speakerDescription.textContent = speaker.description;

  imageContainer.appendChild(speakerImage);
  textContainer.appendChild(speakerName);
  textContainer.appendChild(speakerTitle);
  textContainer.appendChild(speakerDescription);
  speakerElement.appendChild(imageContainer);
  speakerElement.appendChild(textContainer);

  return speakerElement;
}

function createAllSpeakerElements(speakers) {
  const speakerElements = [];

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerElement = createSpeakerElement(speakers[i]);
    speakerElements.push(speakerElement);
  }
  return speakerElements;
}

function addAllSpeakerElements(speakerElements) {
  for (let i = 0; i < speakerElements.length; i += 1) {
    speakersContainer.appendChild(speakerElements[i]);
  }
}

const speakerElements = createAllSpeakerElements(speakers);
addAllSpeakerElements(speakerElements);
