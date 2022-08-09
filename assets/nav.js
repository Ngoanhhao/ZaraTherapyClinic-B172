
$(document).ready(function(){
    $(".navbar").html(`
    <div class="navs container-fluid s-16">
    <!-- Logo -->
    <a class="navbar-brand logo" href="./index.html">
      <img src="./assets/Img/logo_new.gif" width="158px" alt="">
    </a>
    <!-- Menu list on mobile -->
    <button class="navbar-toggler p-3" type="button" data-bs-toggle="" data-bs-target=""
      aria-controls="" aria-expanded="" aria-label="">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Menu list -->
    <div class="navs-content collapse navbar-collapse" id="navbarSupportedContent">
      <div class="dark-background"></div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
        <li class="nav-item">
          <a class="nav-link p-xl-2 active" aria-current="page" href="./index.html">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-xl-2 active" href="./aboutus.html">
            about us
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link p-xl-2 active dropdown-toggle PWT" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="" aria-expanded="false">Problems we treat
          </a>
          <ul class="dropdown-menu dropdown-menu-first ProblemsWeTreat" aria-labelledby="navbarDropdown">
            <div class="d-flex menu01">
              <div class="">
                <li><a class="dropdown-item" href="./DiscSyndrome.html">Disc Syndrome</a></li>
                <li><a class="dropdown-item" href="./Sciatica.html">Sciatica</a></li>
                <li><a class="dropdown-item" href="./NeckPain.html">Neck Pain</a></li>
                <li><a class="dropdown-item" href="./Headaches.html">Headaches</a></li>
                <li><a class="dropdown-item" href="./foot.html">Foot Problems</a></li>
                <li><a class="dropdown-item" href="./elbow.html">Elbow Pain</a></li>
              </div>
              <div class="">
                <li><a class="dropdown-item" href="./wirst.html">Wrist Pain</a></li>
                <li><a class="dropdown-item" href="./low.html">Low back pain</a></li>
                <li><a class="dropdown-item" href="./Scoliosis.html">Scoliosis</a></li>
                <li><a class="dropdown-item" href="./knee.html">Knee Pain</a></li>
                <li><a class="dropdown-item" href="./ShoulderPain.html">Shoulder Pain</a></li>
                <li><a class="dropdown-item" href="./ankle.html">Ankle Pain</a></li>
              </div>
            </div>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link p-xl-2 active dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="" aria-expanded="false">
            Combined Therapies
          </a>
          <ul class="dropdown-menu dropdown-menu-second ProblemsWeTreat" aria-labelledby="navbarDropdown">
            <div class="d-flex">
              <div>
                <li><a class="dropdown-item" href="./ChiropracticAdjustment.html">Chiropractic Adjustment</a></li>
                <li><a class="dropdown-item" href="./PneumexPneuBack.html">Pneumex PneuBack</a></li>
                <li><a class="dropdown-item" href="./ClassIVLaserTherapy.html">Class IV Laser Therapy</a></li>
                <li><a class="dropdown-item" href="./ShockWaveTherapy.html">Shockwave Therapy</a></li>
                <li><a class="dropdown-item" href="./Vertetrac.html">Vertetrac and Cervico 2000</a></li>
              </div>
              <div>
                <li><a class="dropdown-item" href="./FootOrthortics.html">Foot Orthotics</a></li>
                <li><a class="dropdown-item" href="./Physiotherapy.html">Physiotherapy</a></li>
                <li><a class="dropdown-item" href="./DTSDecompressionTractionTherapy.html">DTS Decompression Traction
                    Therapy</a></li>
                <li><a class="dropdown-item" href="./Manual-Therapy.html">Manual Therapy</a></li>
                <li><a class="dropdown-item" href="./Active-Therapeutic-Movement.html">Active Therapeutic Movement
                    (ATM2)</a></li>
              </div>
            </div>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link p-xl-2 active" aria-current="page" href="./service.html">service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-xl-2 active" aria-current="page" href="./shop.html">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-xl-2 active" aria-current="page" href="./contact.html">Contact</a>
        </li>
      </ul>
      <!-- sign -->
      <div class="d-flex DN justify-content-end p-3" role="search" method="">
        <a href="./cart.html"><i class="fa-solid fa-cart-shopping s-18"></i>
          <p>0</p>
        </a>
        <button class="border-0 container-search_btn border-bottom s-14 m-2 signin" type="button">Sign in</button>
      </div>
    </div>
  </div>



  <!-- menu in mobile -->
  <div class="dark-background">
    <div class="navs-content2 pt-5">
      <div class="mb-4">
        <a class="ps-4" href="./index.html">
          <img src="./assets/Img/logo_new.gif" width="70%" alt="">
        </a>
      </div>
      <div id="close" class="s-30">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <ul class="p-0">
        <li class="p-2 ps-4 pe-4 ">
          <a class="nav-link p-xl-2 active" aria-current="page" href="./index.html">HOME</a>
        </li>
        <li class="p-2 ps-4 pe-4">
        <a class="nav-link p-xl-2 active" href="./aboutus.html">
        ABOUT US
      </a>
        </li>
        <li class="p-2 ps-4 pe-4 CustomDropdown position-relative">PROBLEMS WE TREAT <i class="fa-solid fa-caret-down ps-auto position-absolute d-block" style="right: 20px;top: 10px;"></i>
          <ul>
            <li><a class="dropdown-item p-1" href="./DiscSyndrome.html">Disc Syndrome</a></li>
            <li><a class="dropdown-item p-1" href="./Sciatica.html">Sciatica</a></li>
            <li><a class="dropdown-item p-1" href="./NeckPain.html">Neck Pain</a></li>
            <li><a class="dropdown-item p-1" href="./Headaches.html">Headaches</a></li>
            <li><a class="dropdown-item p-1" href="./foot.html">Foot Problems</a></li>
            <li><a class="dropdown-item p-1" href="./elbow.html">Elbow Pain</a></li>
            <li><a class="dropdown-item p-1" href="./wirst.html">Wrist Pain</a></li>
            <li><a class="dropdown-item p-1" href="./low.html">Low back pain</a></li>
            <li><a class="dropdown-item p-1" href="./Scoliosis.html">Scoliosis</a></li>
            <li><a class="dropdown-item p-1" href="./knee.html">Knee Pain</a></li>
            <li><a class="dropdown-item p-1" href="./ShoulderPain.html">Shoulder Pain</a></li>
            <li><a class="dropdown-item p-1" href="./ankle.html">Ankle Pain</a></li>
          </ul>
        </li>
        <li class="p-2 ps-4 pe-4 CustomDropdown position-relative">COMBINED THERAPIES <i class="fa-solid fa-caret-down position-absolute d-block" style="right: 20px;top: 10px;"></i>
          <ul>
            <li><a class="dropdown-item p-1" href="./ChiropracticAdjustment.html">Chiropractic Adjustment</a></li>
            <li><a class="dropdown-item p-1" href="./PneumexPneuBack.html">Pneumex PneuBack</a></li>
            <li><a class="dropdown-item p-1" href="./ClassIVLaserTherapy.html">Class IV Laser Therapy</a></li>
            <li><a class="dropdown-item p-1" href="./ShockWaveTherapy.html">Shockwave Therapy</a></li>
            <li><a class="dropdown-item p-1" href="./Vertetrac.html">Vertetrac and Cervico 2000</a></li>
            <li><a class="dropdown-item p-1" href="./FootOrthortics.html">Foot Orthotics</a></li>
            <li><a class="dropdown-item p-1" href="./Physiotherapy.html">Physiotherapy</a></li>
            <li><a class="dropdown-item p-1" href="./DTSDecompressionTractionTherapy.html">DTS Decompression Traction
                Therapy</a></li>
            <li><a class="dropdown-item p-1" href="./Manual-Therapy.html">Manual Therapy</a></li>
            <li><a class="dropdown-item p-1" href="./Active-Therapeutic-Movement.html">Active Therapeutic Movement
                (ATM2)</a></li>
              </ul>
        </li>
      <li class="p-2 ps-4 pe-4 "><a href="./service.html">SERVICE</a></li>
      <li class="p-2 ps-4 pe-4 "><a href="./shop.html">PRODUCTS</a></li>
      <li class="p-2 ps-4 pe-4 "><a href="./contact.html">CONTACT</a></li>
      </ul>

      <div class="d-flex DN DN-mobile justify-content-end p-3" role="search" method="">
        <a href="./cart.html"><i class="fa-solid fa-cart-shopping s-18"></i>
          <p>0</p>
        </a>
        <button class="border-0 container-search_btn border-bottom s-14 m-2 signin" type="button">Sign in</button>
      </div>
    </div>
  </div>
    `)
    if(JSON.parse(localStorage.getItem("IDproducts"))==""){
      $(".DN p").hide()
    }else{
      $(".DN p").show()
      $(".DN p").html(JSON.parse(localStorage.getItem("IDproducts")).length)
    }
    $(".PWT").mouseover(function(){
      $(".dropdown-menu-first").slideDown("fast")
    })


     // mobile menu
  $(".CustomDropdown").click(function () {
    $(this).children().toggle()
    console.log($(this).children("i").css("transform"))
    if($(this).children("i").css("transform") == "none" || $(this).children("i").css("transform")=="matrix(1, 0, 0, 1, 0, 0)"){
      $(this).children("i").css("transition-duration","0.5s")
      $(this).children("i").css("transform","rotate(90deg)")
    }else{
      $(this).children("i").css("transform","rotate(0deg)")
    }
  })
  $("#close").click(function(){
    $(".dark-background").toggle()
  })
  $(".dark-background").click(function(){
    $(".dark-background").toggle()
  })
  $(".navs-content2").click(function(e){
    e.stopPropagation()
  })
  $(".navbar-toggler").click(function () {
    $(".dark-background").show()
  })
})