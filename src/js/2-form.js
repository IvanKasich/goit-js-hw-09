const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

loadFormData();

function onInput(e) {
  if (e.target.name === 'email') {
    formData[e.target.name] = e.target.value.trim();
  } else if (e.target.name === 'message') {
    formData[e.target.name] = e.target.value.trim();
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (!emailValue || !messageValue) {
    alert('Please fill in all fields');
    return;
  }
  console.log(formData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
}

function loadFormData() {
  if (!localStorage.getItem(STORAGE_KEY)) return;

  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
  formData.email = parsedData.email;
  formData.message = parsedData.message;
}
