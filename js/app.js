const shareButton = document.querySelector('#shareBtn');
const stateNormal = document.querySelector('.normal-state');
const stateShare = document.querySelector('.share-state');
const footer = document.querySelector('.preview-footer');

shareButton.addEventListener('click', (e) => {
  e.preventDefault();
  stateNormal.classList.toggle('hide');
  stateShare.classList.toggle('hide');

  shareBtn.classList.toggle('share');
  footer.classList.toggle('share');
});
