<template>
  <div class="about">
    <div id="container">
      <h1>Om oss</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br>
      <h2>Teamet här hos Konsulter & Partners AB</h2>
      <div id="profile-container">

        <!-- Oskar profile card -->
        <router-link to="/oskar">
        <div class="profile-card">
          <div class="profile-oskar">
            <div class="profile-image">
              <img src="../assets/profile-pic3.png" class="profile-image">
            </div>
            <h2>Oskar</h2>
            <p class="profile-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        </router-link>

        <!-- Josef profile card -->
         <router-link to="/josef">
        <div class="profile-card">
          <div class="profile-josef">
            <div class="profile-image">
              <img src="../assets/profile-pic2.png" class="profile-image">
            </div>
            <h2>Josef</h2>
            <p class="profile-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
         </router-link>

        <!-- John profile card -->
         <router-link to="/john">
        <div class="profile-card">
          <div class="profile-john">
            <div class="profile-image">
              <img src="../assets/profile-pic.png" class="profile-image">
            </div>
            <h2>John</h2>
            <p class="profile-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
         </router-link>

        <!-- Ivy profile card -->
         <router-link to="/ivy">
        <div class="profile-card">
          <div class="profile-ivy">
            <div class="profile-image">
              <img src="../assets/profile-pic4.png" class="profile-image">
            </div>
            <h2>Ivy</h2>
            <p class="profile-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
         </router-link>

      </div>
    </div>
  </div>
</template>

<style>
#container {
  text-align: center;
  padding-right: 10%;
  padding-left: 10%;
  align-content: center;
  height: 100vh;
}

#profile-container {
  margin: auto;
  padding-right: 5%;
  padding-left: 5%;
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-content: center;
}

h1 {
  padding: 20px;
}

h2 {
  padding: 10px;
}

.profile-image {
  max-height: 150px;
  max-width: 200px;
  margin: auto;
}

.profile-card {
  background: white;
  padding: 10px;
  border: 2px ridge;
  margin-right: 10px;
  margin-left: 10px;
}

.profile-text {
  text-align: left;
}
a {
    text-decoration: none;
    color: rgb(77, 71, 71);
  }

a:visited {
color: none;
}
</style>