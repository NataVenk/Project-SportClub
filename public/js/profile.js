const newActivity = async (event) => {
  event.preventDefault();
  const checks = document.querySelectorAll('input[type="checkbox"]:checked');
  // console.log(checks);
  const activityIds = [];
  checks.forEach(check => activityIds.push(parseInt(check.value)));
  console.log(activityIds);
    // const name = document.querySelector('#member_name').value.trim();
    // const member_activity = document.querySelector('#member-activity').value.trim();
    
    if (activityIds.length) {
      const response = await fetch(`/api/activity-routes/newMemberActivities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({activityIds}),
      });
  
      if (response.ok) {
        document.location.replace('/youractivity');
      } else {
        alert('Failed to update');
      }
    }
  };

  document.querySelector(".interest-form").addEventListener("submit", newActivity)
  
  