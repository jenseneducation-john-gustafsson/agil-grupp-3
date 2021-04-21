<template>
  <div class="footer-middle">
    <div class="container">
      <div class="row">
        <div class="col-md-12 copy">
          <div class="mb-3">
            <div class="pt-4">
              <ul class="social-network social-circle">
                <li>
                  <a
                    href="https://www.facebook.com"
                    aria-label="facebook"
                    target="_blank"
                    class="sm-icons"
                    title="Facebook"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    aria-label="linkedin"
                    target="_blank"
                    class="sm-icons"
                    title="Linkedin"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    aria-label="instagram"
                    target="_blank"
                    class="icoInstagram"
                    title="Instagram"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    aria-label="twitter"
                    target="_blank"
                    class="icoTwitter"
                    title="Twitter"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <p class="text-center">
            &copy; Copyright 2021 - Bolagsnamn & Partners AB. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bottomfooter",
};
</script>
<style scoped>
.footer-middle {
  background-color: #0652dd;
  /* position: fixed; */
  width: 100%;
  bottom: 0;
}

.soc-media-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

ul.social-network {
  list-style: none;
  display: inline;
  padding: 0;
  margin-left: 50px;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}
.social-network a.sm-icons:hover {
  color: #44bcdd;
}
.mr-2 {
  cursor: pointer;
}
.text-center {
  color: #ffff;
}
</style>
