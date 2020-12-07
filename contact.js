//Contact page script

window.onload = function() {
  //variables
  let form = document.querySelector('#form');

  let radioChoice = Array.from(form.reason);
  let onum = document.querySelector('#onum');

  form.addEventListener('click', function() {
    radioChoice.forEach(function(o) {
      if (o.id === 'problem' && o.checked) revealOrderNum(onum);
      else hideOrderNum(onum);
    });
  });
};

//functions
function revealOrderNum(o) {
  o.removeAttribute('hidden');
}

function hideOrderNum(o) {
  o.setAttribute('hidden', true);
}
