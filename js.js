const biodatanav = document.querySelector('.nav-biodata');
const biosect = document.getElementById('biodata-section');

const expnav = document.querySelector('.nav-experience');
const expsect = document.getElementById('experience-section');

const aboutnav = document.querySelector('.nav-aboutme');
const aboutsect = document.getElementById('intro-section');

const contactnav = document.querySelector('.nav-contact'); 
const contactsect = document.getElementById('contact-section');   

const abtbtn = document.querySelector('.about-btn');
const expbtn = document.querySelector('.exp-btn');


aboutnav.addEventListener('click', function() {
    aboutsect.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

biodatanav.addEventListener('click', function() {
    biosect.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

expnav.addEventListener('click', function() {
    expsect.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

contactnav.addEventListener('click', function() {
    contactsect.scrollIntoView({ behavior:'smooth', block: 'center' });
});

abtbtn.addEventListener('click', function() {
    biosect.scrollIntoView({ behavior:'smooth', block: 'center' });
});

expbtn.addEventListener('click', function() {
    expsect.scrollIntoView({ behavior:'smooth', block: 'center' });
});

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

// const inputs = [
//     {
//       input: document.getElementById('name'),
//       label: document.getElementById('namelbl')
//     },
//     {
//       input: document.getElementById('email'),
//       label: document.getElementById('emaillbl')
//     },
//     {
//       input: document.getElementById('message'),
//       label: document.getElementById('msglbl')
//     }
//   ];
  
//   inputs.forEach(({ input, label }) => {
//     input.addEventListener('input', function() {
//       if (input === document.activeElement || input.value.trim() !== '' || input.value.length !== 0) {
//         label.classList.add('moveUp');
//         label.classList.remove('typewriter');
//         console.log(document.activeElement);
//       } else {
//         label.classList.remove('moveUp');
//       }
//     });
//   });

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
  



  
  