<template>
  <div class="contact">
    <h1>Kontakta Oss</h1>
    <form action="" method="POST">
        <label for="firstname">Namn</label>
        <input type="text" name="firstname" id="firstname" required pattern="^[a-zA-Z]+$">

        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>

        <label for="comment">Din fråga</label>
        <textarea name="comment" id="comment" rows="10"></textarea>

        <button>Skicka</button>
    </form>
  </div>
</template>


<style scoped>
.contact {
    width: 500px;
    margin: 20px auto;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #333;
}

.form-row {
    margin: 10px 0;
}
h1 {
    text-align: center;
}
button {
    width:520px;
    padding: 5px;
    background: #0652dd;
    color: white;

    border-radius: 5px;
    border: 1px solid #333;
}
</style>