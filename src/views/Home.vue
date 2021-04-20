<template>
  <div class="home">
    <img src="../assets/main3.png" class="picture" alt="main1.jpg" />
    <h1 class="center">Konsulter & rekrytering</h1>
    <p class="center">
      Vi har spetskompetens inom verksamhetsutveckling, ledarskap, IT och IoT.
      <br />Vi erbjuder specialisthjälp och lösningar inom ett stort antal
      områden.
    </p>
    <img src="../assets/main1.jpg" class="picture" alt="main1.jpg" />
    <h1 class="center">Från idé till marknadsklar produkt.</h1>
    <p class="center">Konsulting och produktutveckling i världsklass!</p>
    <img src="../assets/main2.png" class="picture" alt="main1.jpg" />
    <h2 class="center">
      Vill du veta mer? Kontakta oss och vi berättar vad vi kan göra för dig.
    </h2>
    <div class="wrapper">
      <button>Boka tid</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  text-align: center;
}

.picture {
  display: block;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
}

.wrapper {
  text-align: center;
}

button {
  border-radius: 50px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  background-color: #0652dd;
  color: white;
  margin: 20px auto 40px;
}

button:hover {
  background-color: cornflowerblue;
}
</style>
