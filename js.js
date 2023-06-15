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

const spanAnim = document.getElementById('lblspan');

inputs.forEach(({ input, label }) => {
  input.addEventListener('input', handleInput);
  input.addEventListener('blur', handleBlur);
  function handleInput() {
    if (input.value.trim() !== '') {
      label.classList.add('moveUp');
      spanAnim.classList.add('dissapear');
      label.classList.remove('typewriter');
    } else {
      label.classList.remove('moveUp');
      label.classList.add('typewriter');
    }
  }

  function handleBlur() {
    if (input.value.trim() === '') {
      label.classList.remove('moveUp');
    }
  }
});

document.addEventListener('click', function(event) {
  const clickedElement = event.target;
  if (!isInputOrLabel(clickedElement)) {
    inputs.forEach(({ input }) => input.blur());
  }
});

function isInputOrLabel(element) {
  return element.tagName === 'INPUT' || element.tagName === 'LABEL';
}


const radexp = document.getElementById('radio1');
const radskill = document.getElementById('radio2');

radexp.addEventListener('click', toggle);
radskill.addEventListener('click', toggle);

function toggle() {
    let cw1 = document.querySelector('.cw-1');
    let cw2 = document.querySelector('.cw-2');

    if (radexp.checked) {
        cw1.classList.remove('hide');
        cw1.classList.add('active');
        cw2.classList.remove('active');
        cw2.classList.add('hide');
    } else if (radskill.checked) {
        cw1.classList.remove('active');
        cw1.classList.add('hide');
        cw2.classList.remove('hide');
        cw2.classList.add('active');
    }
}


  



  
  