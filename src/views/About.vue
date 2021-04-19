<template>
  <div class="about">
    <div id="container">
      <h1>Det här är en om oss sida</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br>
      <br>
      <h2>The team here at Bolagsnamn & Partners AB</h2>
      <div id="profile-container">

        <!-- Oskar profile card -->
        <div class="profile-card">
          <div class="profile-oskar">
            <div class="profile-image">
              <img src="../assets/profile-img-1.jpg" class="profile-image">
            </div>
            <h3>Oskar</h3>
            <p class="profile-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <!-- Josef profile card -->
        <div class="profile-card">
          <div class="profile-josef">
            <div class="profile-image">
              <img src="../assets/profile-img-1.jpg" class="profile-image">
            </div>
            <h3>Josef</h3>
            <p class="profile-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <!-- John profile card -->
        <div class="profile-card">
          <div class="profile-john">
            <div class="profile-image">
              <img src="../assets/profile-img-1.jpg" class="profile-image">
            </div>
            <h3>John</h3>
            <p class="profile-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <!-- Ivy profile card -->
        <div class="profile-card">
          <div class="profile-ivy">
            <div class="profile-image">
              <img src="../assets/profile-img-1.jpg" class="profile-image">
            </div>
            <h3>Ivy</h3>
            <p class="profile-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
#container {
  background: rgb(230, 230, 230);
  text-align: center;
  padding-right: 10%;
  padding-left: 10%;
  align-content: center;
}

#profile-container {
  width: 70%;
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

.profile-image {
  max-height: 200px;
  max-width: 200px;
  margin: auto;
}

.profile-card {
  background: white;
  padding: 10px;
  border: 3px ridge;
  margin-right: 10px;
  margin-left: 10px;
}

.profile-text {
  text-align: left;
}
</style>