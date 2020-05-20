const git = new Github;
const ui = new UI;

document.getElementById('searchUser').addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(e.target.value !== ''){
    git.getUser(userText)
      .then(data => {
        // console.log(data.profile)
        if(data.profile.message === 'Not Found'){
          ui.showAlert('User not found', 'alert alert-danger');
        }else{
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  }else{
    ui.clearProfile();
  };
});