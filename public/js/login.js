console.log('Inside Login', "hello");

const loginForm = async (event) => {
  console.log('Inside loginForm', "hello");
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/members/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the user activity page
      document.location.replace('/youractivity');
    } else {
      alert('Failed to log in.');
    };
  };
};

const signupForm = async (event) => {

  event.preventDefault();
  console.log('Inside signupForm', "hello");
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log(name);
  console.log(email);
  console.log(password);

  if (name && email && password) {
    const response = await fetch('/api/members/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the user activity page
      document.location.replace('/member-interest');
    } else {
      alert('Failed to sign up.');
    };
  };
};

document.querySelector(".login-form").addEventListener("submit", loginForm)
document.querySelector(".signup-form").addEventListener("submit", signupForm)