$(document).ready(function () {
  // time
  function timer() {
    var date = new Date();
    var hour    =  date.getHours()
    var minutes =  date.getMinutes()
    var second  =  date.getSeconds()
    var day     =  date.getDate()
    var month   =  date.getMonth()
    var year    =  date.getFullYear()
    if(hour<10){hour = "0"+hour}
    if(minutes<10){minutes = "0"+minutes}
    if(second<10){second = "0"+second}
    if(day<10){day = "0"+day}
    if(month<10){month = "0"+month}

    var time = hour + ":" + minutes + ":" + second
    var day  = day  + "-" + month   + "-" + year

    $(".copyright").html(`
      ${time}<br>Today is: ${day} <br> © Copyright 2022 - ZaraTherapyClinic
    `)
    setTimeout(function(){timer()},1000);
  }


  $(".footer").html(`
  <div class="d-flex pt-5 pb-5 row w-100 justify-content-around text-md-center">
  
    <div class="footer-content col-xl-3 col-lg-6 col-md-6 p-4">
      <img width="50%" src="assets/Img/logov2.png" alt="">
      <h3>Chiropractic Clinic</h3>
      <p class="s-14">Provide the best healthcare service for the spine and effectively address musculoskeletal
        problems without drugs or surgery.</p>
    </div>
    <div class="footer-content col-xl-3 col-lg-6 col-md-6 p-4">
      <h3 class="mb-3 fw-bold">Userful Links</h3>
      <a href="" class="s-14">How It Works</a>
      <a href="" class="s-14">Reviews</a>
      <a href="" class="s-14">Term & Conditions</a>
      <a href="" class="s-14">Privacy Policy</a>
      <a href="" class="s-14">Site Map</a>
    </div>

  
    <div class="footer-content col-xl-3 col-lg-6 col-md-6 p-4">
      <h3 class="mb-3 fw-bold">Contact Us</h3>
      <a href="" class="s-14"><i class="fa-regular fa-circle-question"></i> Help center</a>
      <a href="" class="s-14"><i class="fa-brands fa-facebook"></i> Facebook</a>
      <a href="" class="s-14"><i class="fa-brands fa-instagram"></i> Instagram</a>
      <a href="" class="s-14"><i class="fa-regular fa-circle-question"></i> About Us</a>
    </div>
    <div class="footer-content col-xl-3 col-lg-6 col-md-6 p-4">
      <h3 class="mb-3 fw-bold">LOCATIONS</h3>
      <h4 class="s-14">ZaraTherapyClinic - Da Nang</h4>
      <p class="s-14">36 Yen Bai - Da Nang</p>
      <p class="s-14">Tel: <a href="tel:+0905622271" class="d-inline-block">+0905 622 271</a></p>
      <h4 class="d-inline-block mt-2 fw-bold">Ascess:</h4>
      <span class="d-inline-block count s-14" id="number">1281027</span>
      <br>
      <h4 class="d-inline-block s-14 fw-bold">Online: </h4>
      <span class="d-inline-block count s-14" id="number2">569</span>
      <p class="s-12 copyright"><br>Today is: <br> © Copyright 2022 - ZaraTherapyClinic</p>
    </div>
  </div>
    `);
    timer()
  // img zoom
  $(".discsyndrome img,.pneumexpneuback img").click(function () {
    $("body").append(`
        <div class="bg-img">
            <img src="${$(this).attr("src")}" alt="" width="40%" class="m-auto">
        </div>
      `);
    $(".bg-img").click(function () {
      $(this).remove();
    });
    $(".bg-img img").click(function (e) {
      e.stopPropagation();
    });
  });
});
