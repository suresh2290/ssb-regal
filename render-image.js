  function loadImages({ folder, imageFiles, containerSelector, dotsSelector, prevArrowSelector, nextArrowSelector }) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ""; 
    const modal = document.getElementById("fullscreenModal");
    const modalImg = document.getElementById("fullscreenImage");
  
    imageFiles.forEach((fileName) => {
      const img = document.createElement("img");
      img.src = `images/${folder}/${fileName}`;
      img.alt = `${folder} image`;
      img.style.cursor = "pointer";
  
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      });
  
      container.appendChild(img);
    });

    new Glider(container, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: dotsSelector
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Load all sections
    loadImages({
      folder: "kitchen",
      imageFiles: ["k1.jpeg", "k2.jpeg", "k3.jpeg","k4.jpeg"],
      containerSelector: "#kitchen .glider",
      // dotsSelector: "#kitchen .dots",
      prevArrowSelector: "#kitchen .glider-prev",
      nextArrowSelector: "#kitchen .glider-next"
    });
  
    loadImages({
      folder: "wardrobe",
      imageFiles: [ "w3.jpeg","w4.jpeg","w5.jpeg","w6.jpeg","w7.jpeg","w8.jpeg"],
      containerSelector: "#wardrobe .glider",
      // dotsSelector: "#wardrobe .dots",
      prevArrowSelector: "#wardrobe .glider-prev",
      nextArrowSelector: "#wardrobe .glider-next"
    });

    loadImages({
      folder: "tv",
      imageFiles: [ "t1.jpeg","t2.jpeg","t3.jpeg","t4.jpeg","t5.jpeg"],
      containerSelector: "#tv .glider",
      prevArrowSelector: "#tv .glider-prev",
      nextArrowSelector: "#tv .glider-next"
    });
    
    loadImages({
      folder: "pooja",
      imageFiles: [ "p1.jpeg","p2.jpeg","p3.jpeg","p4.jpeg","p5.jpeg","p6.jpeg"],
      containerSelector: "#pooja .glider",
      prevArrowSelector: "#pooja .glider-prev",
      nextArrowSelector: "#pooja .glider-next"
    });

    loadImages({
      folder: "bed",
      imageFiles: [ "bed1.jpeg","bed2.jpeg","bed3.jpeg","bed4.jpeg"],
      containerSelector: "#bed .glider",
      prevArrowSelector: "#bed .glider-prev",
      nextArrowSelector: "#bed .glider-next"
    });

    loadImages({
      folder: "study",
      imageFiles: [ "s1.jpeg","s2.jpeg","s3.jpeg"],
      containerSelector: "#study .glider",
      prevArrowSelector: "#study .glider-prev",
      nextArrowSelector: "#study .glider-next"
    });
    
    // Modal logic
    const modal = document.getElementById("fullscreenModal");
    const modalImg = document.getElementById("fullscreenImage");
    const closeBtn = document.querySelector(".close-btn");
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });

    const dropdown = document.querySelector(".dropdown");

    if (!dropdown) {
      console.error("Dropdown element not found!");
      return;
    }
  
    dropdown.addEventListener("click", (e) => {
      // e.stopPropagation(); // Prevent event from bubbling to window
      console.log("click")
      document.querySelector(".dropdown").classList.add("show");
      // dropdown.classList.toggle("show");
    });

    document.querySelector('.dropdown-menu').addEventListener('click', () => {
      // e.stopPropagation();
      document.querySelector('.dropdown-menu').classList.remove('show');
    });
  
    window.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
    
  });