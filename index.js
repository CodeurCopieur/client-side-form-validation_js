//namespace shaker
var Shaker = (() => {
  var self = {};

  //Methode public car nous pouvons l'appeler de l'extérieur
  //Structure appeler le module parttern
  self.init = () => {

    form = document.querySelector('.form')

    form.addEventListener('submit', (e) =>{
      e.preventDefault();

      checkInputs();
    });


    function checkInputs() {
      const usernameValue = form.elements['username'].value.trim();
      const emailValue = form.elements['email'].value.trim();
      const passwordValue = form.elements['password'].value.trim();
      const password2Value = form.elements['password2'].value.trim();

      //console.log(usernameValue, emailValue, passwordValue, password2Value);

      if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(form.elements['username'], `Le nom d'utilisateur ne peut pas être vide`);
      } else {
        // add success class
        setSuccessFor(form.elements['username']);
      }
    }

    function setErrorFor(input, message) {
      const formControl = input.parentElement; // .form-control
      const small = formControl.querySelector('small');

      // add error message inside small
      small.textContent = message;

      // add error class
      formControl.classList.add('error')
    }
    function setSuccessFor() {
      
    }
  }

  return self;
})(); //closure qui s'appelle elle même ()


Shaker.init();