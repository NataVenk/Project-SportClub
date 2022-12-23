//gets data from checkboxes
const newActivity = async (event) => {
  event.preventDefault();
  const checks = document.querySelectorAll('input[type="checkbox"]:checked');
  const activityIds = [];
  checks.forEach(check => activityIds.push(parseInt(check.value)));
  console.log(activityIds);
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
  }
};

document.querySelector(".interest-form").addEventListener("submit", newActivity)

