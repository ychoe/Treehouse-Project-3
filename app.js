const jobRole = document.querySelector('#title');
const color = document.querySelector('#color');
const job = document.querySelector('#job');
const design = document.querySelector('#design');
const submitButton = document.querySelector('button');
const name = document.querySelector('#name');
const form = document.querySelector('form');
const payment = document.querySelector('#payment');
const activities = document.querySelector('.activities');

let paymentInfo = document.getElementsByTagName('fieldset')[3];
let creditCardPayment = paymentInfo.children[2].children[1];
creditCardPayment.selected = true;
let creditCardOption = paymentInfo.children[3];
let payPalOption = paymentInfo.children[4];
let bitCoinOption = paymentInfo.children[5];



form.addEventListener('submit', (event) => {
  creditCardPayment.selected = false;
  const name = document.querySelector('#name');
  let nameInput = name.value;

  const email = document.querySelector('#mail');
  let emailInput = email.value;
  let emailValidation = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;

  const mainConferenceChecked = document.querySelector('input[name=all]').checked;
  const jsFrameWorksChecked = document.querySelector('input[name=js-frameworks]').checked;
  const jsLibsChecked = document.querySelector('input[name=js-libs]').checked;
  const expressChecked = document.querySelector('input[name=express]').checked;
  const nodeChecked = document.querySelector('input[name=node]').checked;
  const buildToolsChecked = document.querySelector('input[name=build-tools]').checked;
  const npmChecked = document.querySelector('input[name=npm]').checked;

  let creditCard = document.querySelector('#cc-num');
  let creditCardValidation = /^\d{13}(\d{3})?$/;

  let zipCode = document.querySelector('#zip');
  let zipCodeValidation = /^\d{5}$/;

  let CVV = document.querySelector('#cvv');
  let CVVValidation = /^\d{3}$/;


  if (nameInput === '') {
    console.log('no name');
    event.preventDefault();
    let nameParent = name.parentElement;
    let nameErrorDiv = document.createElement('div');
    nameErrorDiv.textContent = 'Name field is required';
    nameErrorDiv.style.color = 'red';
    nameParent.appendChild(nameErrorDiv);

  } if (emailInput === '') {
    console.log('no email');
    event.preventDefault();
    let emailParent = email.parentElement;
    let emailErrorDiv = document.createElement('div');
    emailErrorDiv.textContent = 'Email field is required';
    emailErrorDiv.style.color = 'red';
    emailParent.appendChild(emailErrorDiv);

  } if (!email.value.match(emailValidation)) {
    console.log('wrong email');
    event.preventDefault();
    let emailParent = email.parentElement;
    let emailErrorDiv = document.createElement('div');
    emailErrorDiv.textContent = 'Email is in the incorrect format';
    emailErrorDiv.style.color = 'red';
    emailParent.appendChild(emailErrorDiv);

  } if (mainConferenceChecked == false && jsFrameWorksChecked == false && jsLibsChecked == false && expressChecked == false && nodeChecked == false && buildToolsChecked == false && npmChecked == false) {
    console.log('activity not checked');
    event.preventDefault();
    let activitiesErrorDiv = document.createElement('div');
    activitiesErrorDiv.textContent = 'Please select at least one activity';
    activitiesErrorDiv.style.color = 'red';
    activities.appendChild(activitiesErrorDiv);

  } if ((!creditCard.value.match(creditCardValidation)) && (creditCardPayment.selected = true)) {
    console.log('wrong credit card');
    event.preventDefault();
    let creditCardParent = payment.parentElement;
    let creditCardErrorDiv = document.createElement('div');
    creditCardErrorDiv.textContent = 'Please enter a valid credit card number that is 13 or 16 digits long';
    creditCardErrorDiv.style.color = 'red';
    creditCardParent.appendChild(creditCardErrorDiv);

  } if ((!zipCode.value.match(zipCodeValidation)) && (creditCardPayment.selected = true)) {
    console.log('wrong zip code');
    event.preventDefault();
    let zipCodeParent = payment.parentElement;
    let zipCodeErrorDiv = document.createElement('div');
    zipCodeErrorDiv.textContent = 'Please enter a valid 5 digit zip code';
    zipCodeErrorDiv.style.color = 'red';
    zipCodeParent.appendChild(zipCodeErrorDiv);

  } if ((!CVV.value.match(CVVValidation)) && (creditCardPayment.selected = true)) {
    console.log('wrong CVV');
    event.preventDefault();
    let CVVParent = payment.parentElement;
    let CVVErrorDiv = document.createElement('div');
    CVVErrorDiv.textContent = 'Please enter a valid 3 digit CVV';
    CVVErrorDiv.style.color = 'red';
    CVVParent.appendChild(CVVErrorDiv);
  }
})



payPalOption.style.display = 'none';
bitCoinOption.style.display = 'none';
color.style.display = 'none';
job.style.display = 'none';



window.addEventListener('load', () => {
  const name = document.querySelector('#name');
  name.focus();

});


jobRole.addEventListener('change', (event) => {

  if (event.target.value === 'other') {
    job.style.display = 'initial';
  } else {
    job.style.display = 'none';
  }
});


design.addEventListener('change', (event) => {
  let cornflowerblue = document.querySelector('option[value=cornflowerblue]');
  let darkslategrey = document.querySelector('option[value=darkslategrey]');
  let gold = document.querySelector('option[value=gold]');
  let tomato = document.querySelector('option[value=tomato]');
  let steelblue = document.querySelector('option[value=steelblue]');
  let dimgrey = document.querySelector('option[value=dimgrey]');

  if (event.target.value === 'js puns') {
    color.style.display = 'initial';
    event.target.selected = cornflowerblue;
    color.value = 'cornflowerblue';
    tomato.disabled = true;
    steelblue.disabled = true;
    dimgrey.disabled = true;
    cornflowerblue.disabled = false;
    darkslategrey.disabled = false;
    gold.disabled = false;
  } else if (event.target.value === 'heart js') {
    color.style.display = 'initial';
    color.value = 'tomato';
    cornflowerblue.disabled = true;
    darkslategrey.disabled = true;
    gold.disabled = true;
    tomato.disabled = false;
    steelblue.disabled = false;
    dimgrey.disabled = false;
  } else {
    color.style.display = 'none';

  }
});





activities.addEventListener('change', (event) => {
  let mainConference = document.querySelector('input[name=all]');
  let jsFrameWorks = document.querySelector('input[name=js-frameworks]');
  let jsLibs = document.querySelector('input[name=js-libs]');
  let express = document.querySelector('input[name=express]');
  let node = document.querySelector('input[name=node]');
  let buildTools = document.querySelector('input[name=build-tools]');
  let npm = document.querySelector('input[name=npm]');

  if (event.target.name === 'js-frameworks') {
    express.disabled = event.target.checked;
  } if (event.target.name === 'express') {
    jsFrameWorks.disabled = event.target.checked;
  } if (event.target.name === 'js-libs') {
    node.disabled = event.target.checked;
  } if (event.target.name === 'node') {
    jsLibs.disabled = event.target.checked;
  }
});



payment.addEventListener('change', (event) => {

  if (event.target.value === 'paypal') {
    creditCardOption.style.display = 'none';
    bitCoinOption.style.display = 'none';
    payPalOption.style.display = 'block';
  } else if (event.target.value === 'bitcoin') {
    creditCardOption.style.display = 'none';
    bitCoinOption.style.display = 'block';
    payPalOption.style.display = 'none';
  } else if (event.target.value === 'credit card') {
    creditCardOption.style.display = 'block';
    bitCoinOption.style.display = 'none';
    payPalOption.style.display = 'none';
  } else if (event.target.value === 'select_method') {
    creditCardOption.style.display = 'none';
    bitCoinOption.style.display = 'none';
    payPalOption.style.display = 'none';
  }
}) 