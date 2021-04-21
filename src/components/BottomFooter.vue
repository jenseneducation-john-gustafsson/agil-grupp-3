<template>
  <div class="footer-middle">
    <div class="container">
      <div class="row">
        <div class="col-md-12 copy">
      
          <div class="mb-3">

            <div class="adress-area">
              <p class="para1">
                Konsulter & Partners AB <br />
            &copy; Copyright 2021. All rights
            reserved.<br />
            <br />
            Tel: 08 123 45 789
          </p>
          <p class="para2">
            Kungsgatan 17, <br />
            123 45 Stockholm, <br />
            Sverige. <br />
            
          </p>
            </div>

          
         
            <div class="pt-4">
              <ul class="social-network social-circle">
                <li>
                  <a
                    href="https://www.facebook.com"
                    aria-label="facebook"
                    target="_blank"
                    class="sm-icons icon-facebook"
                    title="Facebook"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ><span></span></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    aria-label="linkedin"
                    target="_blank"
                    class="sm-icons icon-linkedin"
                    title="Linkedin"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ><span></span></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    aria-label="instagram"
                    target="_blank"
                    class="sm-icons icon-instagram"
                    title="Instagram"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ><span></span></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    aria-label="twitter"
                    target="_blank"
                    class="sm-icons icon-twitter"
                    title="Twitter"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ><span></span></a>
                </li>
              </ul>
            </div>
          </div>
            
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
.copy {
  padding: 10px;
}
.adress-area {
  margin-bottom: -72px;
}
.soc-media-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-network {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center
}

.social-network li {
  display: inline;
  margin: 0 5px;
}
.social-network a.sm-icons i {
  padding: 6px;
  color: rgb(229, 226, 226);
}
.social-circle li a {
  display: inline-block;
  position: relative;
  text-align: center;
  width: 30px;
  height: 30px;
}

.social-network a.sm-icons i:hover{
  color: #fff;
  background-color: white;
  border-radius: 36px;

}
 .social-circle li a .fa-facebook:hover {

  color: #3B5998;
}
 .social-circle li a .fa-linkedin:hover {
  color: #4099ff;
}
 .social-circle li a .fa-instagram:hover {
  color: #db5a3c;
}
 .social-circle li a .fa-twitter:hover {
  color: #4099ff;
}

.mr-2 {
  cursor: pointer;
}
.text-center {
  color: #ffff;
  cursor: pointer;
}
.adress-area{
  display: flex;
  justify-content: space-between;
}
.para1, .para2 {
  margin-top: 15px;
  margin-left:5%;
  margin-right: 5%;
}
.para1, .para2 {
  color: #ffff;
  cursor: pointer;
  
}

</style>
