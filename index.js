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

      if(usernameValue === '') {
        // add error class & show error
        setErrorFor(form.elements['username'], `Le nom d'utilisateur ne peut pas être vide`);
      } else {
        // add success class
        setSuccessFor(form.elements['username']);
      }

      if(emailValue === '') {
        setErrorFor(form.elements['email'], `L'email ne peut pas être vide`);
      } else if(!isEmail(emailValue)) {
        setErrorFor(form.elements['email'], `L'email n'est pas valide`);
      } else {
        setSuccessFor(form.elements['email']);
      }

      if(passwordValue === '') {
        // add error class & show error
        setErrorFor(form.elements['password'], `Le mdp ne peut pas être vide`);
      } else {
        // add success class
        setSuccessFor(form.elements['password']);
      }

      if(password2Value === '') {
        // add error class & show error
        setErrorFor(form.elements['password2'], `Le second mdp ne peut pas être vide`);
      } else if(passwordValue !== password2Value) {
        setErrorFor(form.elements['password2'], `Les passwords ne sont pas identiques`);
      } else {
        // add success class
        setSuccessFor(form.elements['password2']);
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
    function setSuccessFor(input) {
      const formControl = input.parentElement; // .form-control

      // add succes class
      formControl.classList.remove('error')
      formControl.classList.add('success')
    }

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
  }

  return self;
})(); //closure qui s'appelle elle même ()


Shaker.init();