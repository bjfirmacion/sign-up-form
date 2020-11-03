const submit = document.getElementById('submit');
const formItems = document.querySelectorAll('.form__item');

submit.addEventListener('click', () => {
  formItems.forEach(item => item.classList.add('validate'));
});