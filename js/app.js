var imgCategory = document.getElementById("imageHoverCategory");
  console.log(imgCategory);

  imgCategory.addEventListener("mouseover", function() {
    imgCategory.src = "image2.jpg"; // Change to new image
  });

  imgCategory.addEventListener("mouseout", function() {
    imgCategory.src = "image1.jpg"; // Change back to original
  });