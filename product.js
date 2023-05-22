let image = document.querySelectorAll('.img-product');
const tulip = document.querySelector('.container-break');
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function() {
  history.back();
});

    
image.forEach(function(img, index) {
    img.addEventListener("click", function() {
      // construct the URL to the image file based on its file name and the path to the "img" folder
      let imgUrl = image[index].getAttribute("src");
      console.log(imgUrl);
      
      // navigate to the URL
      window.location.href = imgUrl;
    });
  });



tulip.addEventListener('click', () => {
  console.log("working");
  const upper = document.getElementById('header');
  upper.scrollIntoView(
    { behavior: 'smooth' }
  );
});

