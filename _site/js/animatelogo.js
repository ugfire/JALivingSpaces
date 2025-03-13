function jetanim(id = "mylogo", pauseDuration = 2000) {
  /* Created with JETA.COM Animated Logo Wizard: https://jeta.com/js-animated-logo.php */
  window.addEventListener("load", function () {
    var logo = document.getElementById(id),
      style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      "@keyframes jetakey{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{transform:scale3d(1,1,1)}}.jetanim{animation-name:jetakey;animation-duration:1s;animation-fill-mode:both;z-index:1000}";
    document.head.appendChild(style);
    animate();
    function animate() {
      logo.classList.remove("jetanim");
      setTimeout(function () {
        logo.classList.add("jetanim");
        setTimeout(function () {
          logo.classList.remove("jetanim");
          animate(); // Restart the animation loop
        }, 1000); // Adjust this timeout based on your animation duration
      }, pauseDuration); // Pause for 2 seconds
    }
  });
}

jetanim();
