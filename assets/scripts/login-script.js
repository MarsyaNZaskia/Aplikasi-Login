/** @module Login-Script */
/** 
* Membuat variabel loginFormElement untuk tampilan form.
* @conStant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/** 
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';



/**
* Mmebuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/** Comment: Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
  * Membuat variabel email untuk menyimpan nilai email yang didapat saat button ditekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;

  /**
  * Membuat variabel password untuk menyimpan nilai password yang didapat saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;


  /** Comment: Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {

    /** Comment: Jika sesuai maka program akan ke halaman home */
    goToHome();
    
  } else {

    /** Comment: Namun jika tidak sesuai makan akan menampilakn informasi bahwa input salah */
    showPopUp();
  }
});
