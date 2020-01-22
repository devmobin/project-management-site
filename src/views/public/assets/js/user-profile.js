const submitProfile = document.querySelector('#submitProfile');

submitProfile.addEventListener('click', e => {
  const btnClose = document.querySelector('#btnClose');
  const email = document.querySelector('#inputEmail').value;
  const name = document.querySelector('#inputName').value;
  const job = document.querySelector('#inputJob').value;
  const bio = document.querySelector('#exampleFormControlTextarea1').value;
  $.post('/edit-profile', { email, name, job, bio }, data => {
    btnClose.click();
    location.reload();
  });
});
