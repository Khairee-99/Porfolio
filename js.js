const explorebtn = document.querySelector('.explore-btn');
const biosect = document.getElementById('biodata-section');

const experiencebtn = document.querySelector('.experiencebtn');
const expsect = document.getElementById('experience-section');

const contactbtn = document.querySelector('.contactbtn'); 
const connectbtn = document.querySelector('.connectbtn');
const contactsect = document.getElementById('contact-section');   

const aboutnav = document.querySelector('.nav-aboutme');
const aboutsect = document.getElementById('intro-section');



explorebtn.addEventListener('click', function() {
    biosect.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

contactbtn.addEventListener('click', function() {
    contactsect.scrollIntoView({ behavior:'smooth', block: 'center' });
});

connectbtn.addEventListener('click', function() {
  contactsect.scrollIntoView({ behavior:'smooth', block: 'center' });
});


experiencebtn.addEventListener('click', function() {
  expsect.scrollIntoView({ behavior:'smooth', block: 'center' });  
});

const inputs = [
  {
    input: document.getElementById('name'),
    label: document.getElementById('namelbl')
  },
  {
    input: document.getElementById('email'),
    label: document.getElementById('emaillbl')
  },
  {
    input: document.getElementById('message'),
    label: document.getElementById('msglbl')
  }
];







  



  
  