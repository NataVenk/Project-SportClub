

const interestForm = async (event) => {
   
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
    
      const response = await fetch('/member-interest', {
        method: 'POST',
        body: JSON.stringify({activity_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to updated activity
        document.location.replace('/youractivity');
      } else {
        alert('Failed to log in.');
      };
    };
  };



document.querySelector(".interest-form").addEventListener("submit", interestForm)