const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-animation");
        return;
      }
      entry.target.classList.remove("fade-animation");
    });
  });
  
  var fadeItems = document.getElementsByClassName("fade-marker");
  for(var i = 0; i < fadeItems.length; i++){
      observer.observe(fadeItems.item(i));
  }