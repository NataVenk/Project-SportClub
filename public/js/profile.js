const newActivity = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#member_name').value.trim();
    const member_activity = document.querySelector('#member-activity').value.trim();
    
  
    if (name && member_activity) {
      const response = await fetch(`/yourschedule`, {
        method: 'POST',
        body: JSON.stringify({ name, activity_id }),
        
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  
  