const getInfoBtn = document.querySelector(('#getInfoBtn'))


getInfoBtn.addEventListener('click', onGetInfoBtnClick)

function onGetInfoBtnClick(e) {
  e.preventDefault()

  const gitHubLogin = document.getElementById("getUserNameInput").value
  const apiUrl = `https://api.github.com/users/${gitHubLogin}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const avatar = data.avatar_url;
      const repos = data.public_repos;
      const followers = data.followers;
      const following = data.following;

      const avatarElement = document.getElementById("avatar");
      avatarElement.src = avatar;

      const reposElement = document.getElementById("repos");
      reposElement.textContent = repos;

      const followersElement = document.getElementById("followers");
      followersElement.textContent = followers;

      const followingElement = document.getElementById("following");
      followingElement.textContent = following;
    })
    .catch((error) => {
      
      const errorElement = document.getElementById("error-message");
      errorElement.textContent = "Не удалось получить информацию о пользователе. Пожалуйста, проверьте правильность введенного имени пользователя и повторите попытку.";
    });
}
