const subscribeBtn = document.getElementById('subscribe'),
      invalid_email = document.querySelector('.invalid-email'),
      container = document.querySelector('.container'),
      success = document.querySelector('.success'),
      send_to = document.querySelector('#entered-email');


subscribeBtn.addEventListener('click', () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let email = document.getElementById('email').value;
    let validEmail = regex.test(email);

    if(validEmail) {
        container.setAttribute('style', 'display: none');
        success.setAttribute('style', 'display: flex')
        send_to.innerHTML = email;
    }
    else { invalid_email.setAttribute('style', 'display: block') }
})