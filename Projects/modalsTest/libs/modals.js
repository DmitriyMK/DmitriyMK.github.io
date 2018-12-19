(function() {
  function openModal() {
      let modalTrigger = document.getElementsByClassName('popupBtn');


      for(let i = 0; i < modalTrigger.length; i++) {
          modalTrigger[i].onclick = function() {
            let target = this.getAttribute('href').substr(1);
            let modalWindow = document.getElementById(target);

            modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
          }
      }   
  }

  function closeModal(){
    let closeButton = document.getElementsByClassName('jsModalClose');
    let closeOverlay = document.getElementsByClassName('jsOverlay');


      for(let i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          let modalWindow = this.parentNode.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }   


      for(let i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function() {
          let modalWindow = this.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }  

  }

  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(openModal);
  ready(closeModal);
}());