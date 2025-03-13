function contactus() {
  Swal.fire({
    html: `
        <div> <h1>Contact Us <button class="btn-lg btn-danger rounded-circle border-0" onclick="closePopup()"> &times;
        </button></h1>
          
          <div class="w-100 bg-light text-center"><img src="images/BOARDS.jpg" alt="Your Photo" class="w-100 text-center" /></div>
        
         <div class="my-3 text-center">
          
         <p class="py-3"> <button class="btn-lg btn-green border-0" onclick="whatsappUs()">
            <i class="bi bi-whatsapp"></i>  WhatsApp Us 
          </button>
         
</p>

          <p class="pb-5">
          <button class="btn btn-dark rounded rounded-5" onclick="window.location.href='https://twitter.com/JALivingSpaces'">
            <i class="bi bi-twitter-x"></i></button>
            <button class="btn btn-dark rounded rounded-5" onclick="window.location.href='https://facebook.com/jalivingspaces'">
            <i class="bi bi-facebook"></i></button>
            <button class="btn btn-dark rounded rounded-5" onclick="window.location.href='https://www.linkedin.com/company/j-a-design-associates/'">
            <i class="bi bi-linkedin"></i></button>
            <button class="btn btn-dark rounded rounded-5" onclick="window.location.href='https://www.instagram.com/jalivingspaces?igsh=MWlsNGRpNGhydTZ5YQ=='">
            <i class="bi bi-instagram"></i></button></br><br>
            <span class="p-1 w-100 bg-light">@jalivingspaces</span>
        </p>
     
        <p>
          <a class="text-dark" href="tel:+256 393 2471 59">+256 393 2471 59</a>
          </p>
          <p>
           <a class="text-dark" href="mailto:info@jalivingspaces.com ">info@jalivingspaces.com</a>
          </p>
          <p>
          <a class="text-dark" href="https://maps.app.goo.gl/7WzqebzwJ9Zr5no59?g_st=ic">  IJ Complex - Plot 1482, Mbogo Road - Kiwatule</a>
         </p>
          </div>

        </div>
      `,
    showConfirmButton: false,
    showCancelButton: false,
  });
}

function getprojects() {
  Swal.fire({
    html: `
        <div>
          <h3 class="">Contact Us to see our portfolio</h3>
          <div class="w-100 bg-light text-center"><img src="images/mbanner.jpg" alt="Your Photo" class="w-100 text-center" /></div>
        
         <div class="my-3 text-center">
          
         <p class="py-3"> <button class="btn-lg btn-green border-0" onclick="whatsappUs()">
            <i class="bi bi-whatsapp"></i>  WhatsApp Us 
          </button>
          <button class="btn-lg btn-dark border-0" onclick="closePopup()">Close</button>
</p>

          <p class="pb-5">
          <button class="btn btn-dark rounded rounded-5" onclick="window.location.href='https://twitter.com/JALivingSpaces'">
            <i class="bi bi-twitter"></i></button>
            <button class="btn btn-dark rounded rounded-5" onclick="window.location.href='https://facebook.com/jalivingspaces'">
            <i class="bi bi-facebook"></i></button>
            <button class="btn btn-dark rounded rounded-5" onclick="window.location.href='https://www.linkedin.com/company/j-a-design-associates/'">
            <i class="bi bi-linkedin"></i></button>
            <button class="btn btn-dark rounded rounded-5" onclick="window.location.href='https://www.instagram.com/jalivingspaces?igsh=MWlsNGRpNGhydTZ5YQ=='">
            <i class="bi bi-instagram"></i></button>
          
        </p>
        
        <p>
          <span class="text-dark">+256 393 2471 59</span>
          </p>
          <p>
           <span class="text-dark">info@jalivingspaces.com</span>
          </p>
        
        
          </div>

        </div>
      `,
    showConfirmButton: false,
    showCancelButton: false,
  });
}

function closePopup() {
  Swal.close();
}

function whatsappUs() {
  window.location.href =
    "https://wa.me/+256393247159?text=Hello J.A Living Spaces! ";
}


function showBlinkingButton(id = "blinkingButton") {
  const button = document.getElementById(id);

  // Add the class to start the zoom animation
  button.classList.add("blink-animation");
}

// Call the function to start the zoom effect
showBlinkingButton("blinkingButton");
