const loginPage = document.getElementById('login-page');
    const registerPage = document.getElementById('register-page');
    const securedPage = document.getElementById('secured-page');

    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');

    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    // Event Listeners
    showRegister.addEventListener('click', () => {
      loginPage.classList.add('hidden');
      registerPage.classList.remove('hidden');
    });

    showLogin.addEventListener('click', () => {
      registerPage.classList.add('hidden');
      loginPage.classList.remove('hidden');
    });

    loginBtn.addEventListener('click', handleLogin);
    registerBtn.addEventListener('click', handleRegister);
    logoutBtn.addEventListener('click', handleLogout);

    // Handle Registration
    function handleRegister() {
      const username = document.getElementById('register-username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('register-password').value;
      const pass_error = document.getElementById('pass_error');

      // Email Validation Regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (username && email && password) {
        if (!emailRegex.test(email)) {
          alert('Invalid email format. Please enter a valid email address.');
          return;
        }
        if(password === 'password'){
            pass_error.innerHTML = "Password is weak" ;
            return;
        }else{
            pass_error.innerHTML = ""; 
        }
        if(password.length < 8){
            pass_error.innerHTML = "Password must be at least 8 characters" ;
            return;
        }else{
            pass_error.innerHTML = ""; 
        }

        if(password.length > 20){
            pass_error.innerHTML = "Password is too long" ;
            return;
        }else{
            pass_error.innerHTML = ""; 
        }

        if (localStorage.getItem(username)) {
          alert('Username already exists. Please choose a different username.');
        } else {
          // Store user data as a JSON string
          const userData = JSON.stringify({ email, password });
          localStorage.setItem(username, userData);
          alert('Registration successful! You can now log in.');
          document.getElementById('register-username').value = '';
          document.getElementById('register-email').value = '';
          document.getElementById('register-password').value = '';
          registerPage.classList.add('hidden');
          loginPage.classList.remove('hidden');
        }
      } else {
        alert('Please fill out all fields.');
      }
    }

    // Handle Login
    function handleLogin() {
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      if (username && password) {
        const storedData = localStorage.getItem(username);
        if (storedData) {
          const { email, password: storedPassword } = JSON.parse(storedData);
          if (storedPassword === password) {
            alert(`Login successful! Welcome, ${username} (${email}).`);
            loginPage.classList.add('hidden');
            securedPage.classList.remove('hidden');
          } else {
            alert('Invalid password.');
          }
        } else {
          alert('Username does not exist.');
        }
      } else {
        alert('Please fill out all fields.');
      }
    }

    // Handle Logout
    function handleLogout() {
      securedPage.classList.add('hidden');
      loginPage.classList.remove('hidden');
    }