class Github{
  constructor(){
    this.client_id = 'c6e3cc6075ebe6ca4ed9';
    this.client_secret = '6e9d9d5b80909daf33d5fe9469f9adb553592901';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  };

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    
    return {
      profile,
      repos
    };
  };
};