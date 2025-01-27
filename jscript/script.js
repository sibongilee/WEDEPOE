const verses = [{ text: 'I can do all things through Christ who strengthens me.', reference: 'Philippians 4:13', },
{text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',reference: 'Joshua 1:9',
},
{ text: 'The Lord is my shepherd; I shall not want.', reference: 'Psalm 23:1' },
{
  text: 'Cast all your anxiety on him because he cares for you.',
  reference: '1 Peter 5:7',
},
{
  text: 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.',
  reference: 'Jeremiah 29:11',
},
];

const verseText = document.getElementById('bible-verse');
const verseReference = document.getElementById('bible-reference');

function displayVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  const selectedVerse = verses[randomIndex];
  verseText.innerText = `"${selectedVerse.text}"`;
  verseReference.innerText = `-${selectedVerse.reference}`;
}

setInterval(displayVerse, 10000);

document.getElementById('next-verse').addEventListener('click', displayVerse);

document.getElementById ('contactForm').addEventListener ('submit', function (event) {
  event.preventDefault ();
  document.getElementById ('formResponse').innerText = `Your message will be sent here.`;
  });
function toggleEventList(){
  const eventList = document.getElementById('eventList');
  eventList.style.display = eventList.style.display === 'none' || eventList.style.display ==='' ? 'block': 'none';
}
function handleVolunteerForm (event) {
  event.preventDefault ();
  const name = document.getElementById ('volunteerName').value;
  const email = document.getElementById ('volunteerEmail').value;
  
  document.getElementById ('volunteerResponse')
  .innerText = `Thank you, ${name}! Your interest in volunteering has been recorded. We will get back to you at ${email}.`;

  document.getElementById ('form').reset ();
}

function handleDonationForm (event) {
  event.preventDefault ();
  const name = document.getElementById ('donorName').value;
  const email = document.getElementById ('donorEmail').value;
  const amount = document.getElementById ('donationAmount').value;

  document.getElementById (
    'donationResponse'
  ).innerText = `Thank you, ${name}! Your generous donation of ${amount} has been recorded. We will send a receipt to ${email}.`;

  document.getElementById ('donateForm').reset ();
}

function submitContactForm(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log(`Contact form submission - Name: ${name}, Email: ${email}, Message: ${message}`);

  alert('Your message has been sent! Thank you for reaching out.');
  document.getElementById('contactForm').reset();
}



document.addEventListener('DOMContentLoaded', function() {
 
  const popup = document.getElementById('popup');
  const openPopupButton = document.getElementById('open-popup');
  const closePopupButton = document.querySelector('.close');

  
  openPopupButton.addEventListener('click', function() {
      popup.style.display = 'flex';
  });


  closePopupButton.addEventListener('click', function() {
      popup.style.display = 'none';
  });
});





