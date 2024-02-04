function contactus() {
  Swal.fire({
    title: "Contact Us",
    html: `
        <div>
          
          <div class="w-100 bg-light text-center"><img src="images/10.jpg" alt="Your Photo" class="w-50 text-center" /></div>
        
         <div class="my-3 text-center">
          
         <p class="py-3"> <button class="btn-lg btn-green border-0" onclick="whatsappUs()">
            <i class="bi bi-whatsapp"></i>  WhatsApp Us 
          </button>
          <button class="btn-lg btn-dark border-0" onclick="closePopup()">Close</button>
</p>

          <p class="pb-5">
          <button class="btn btn-primary rounded rounded-5" onclick="window.location.href='https://twitter.com/JALivingSpaces'">
            <i class="bi bi-twitter"></i></button>
            <button class="btn btn-primary rounded rounded-5" onclick="window.location.href='https://facebook.com/jalivingspaces'">
            <i class="bi bi-facebook"></i></button>
            <button class="btn btn-primary rounded rounded-5" onclick="window.location.href='https://www.linkedin.com/company/j-a-design-associates/'">
            <i class="bi bi-linkedin"></i></button>
            <button class="btn btn-warning rounded rounded-5" onclick="window.location.href='https://www.instagram.com/jalivingspaces?igsh=MWlsNGRpNGhydTZ5YQ=='">
            <i class="bi bi-instagram"></i></button>
        </p>
        <p class="p-1 bg-light">@jalivingspaces</p>
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
          <button class="btn btn-primary rounded rounded-5" onclick="window.location.href='https://twitter.com/JALivingSpaces'">
            <i class="bi bi-twitter"></i></button>
            <button class="btn btn-primary rounded rounded-5" onclick="window.location.href='https://facebook.com/jalivingspaces'">
            <i class="bi bi-facebook"></i></button>
            <button class="btn btn-primary rounded rounded-5" onclick="window.location.href='https://www.linkedin.com/company/j-a-design-associates/'">
            <i class="bi bi-linkedin"></i></button>
            <button class="btn btn-warning rounded rounded-5" onclick="window.location.href='https://www.instagram.com/jalivingspaces?igsh=MWlsNGRpNGhydTZ5YQ=='">
            <i class="bi bi-instagram"></i></button>
        </p>
        <p class="p-1 bg-light">@jalivingspaces</p>
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
    "https://wa.me/+256393247159?text=Hello JA Living Spaces, ...: ";
}
