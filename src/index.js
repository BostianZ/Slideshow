function SlideShow() {
  const slideShowPicsData = [
    "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D",

    "https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg",

    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg?fit=696%2C463",

    "https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg"

  ];

  //Nav circles nodelist
  // const slideShowNavCircles = document.querySelectorAll(
  //   ".slideshow-nav-circle"
  // );
  const slideShowEl = document.querySelector(".slideshow");
  const slideShowImg = document.querySelector(".slideshow-img");
  const nextBtn = document.querySelector(".next");
  const previousBtn = document.querySelector(".previous");
  //Starting point
  let index = 0;

  const renderSelectedImage = (index) => {
    //Set the index to the index of the clicked nav circle image.
    index = index;
    slideShowImg.setAttribute("src", `${slideShowPicsData[index]}`)
    currentSelectedNavCircle(index);
  }

  const renderSlideShowNavCircles = () => {
    const navCircleContainer = document.querySelector(".slideshow-nav");
    slideShowPicsData.forEach((picture, index) => {
      const navCircle = document.createElement("div");
      navCircle.classList.add("slideshow-nav-circle");
      navCircle.setAttribute("id", `${index}`);
      navCircle.addEventListener("click", (e) => {
        renderSelectedImage(index);
      });
      navCircleContainer.appendChild(navCircle);
    })
  }

  const currentSelectedNavCircle = (index) => {
    const slideShowNavCircles = document.querySelectorAll(".slideshow-nav-circle");
    slideShowNavCircles.forEach((circle) => {
      circle.classList.remove("selected");
    });
    slideShowNavCircles[index].classList.add("selected");
  };

  //Gives the slideshow the ability to be cyclical
  //If you add a new slide change the endIndex in the next/previous functions.
  const slideTraverseLogic = (endIndex, newIndex) => {
    if (index === endIndex) {
      index = newIndex;
    }
  };

  const next = () => {
    //First picture starts on index 0.
    //We click next, index goes up to 1.
    index++;
    slideTraverseLogic(slideShowPicsData.length, 0);
    console.log(index);
    //We then update the dom with the image at index one.
    //Index is currrently 1.
    slideShowImg.setAttribute("src", `${slideShowPicsData[index]}`);

    currentSelectedNavCircle(index);
  };

  const previous = () => {
    //If index is 1
    //We click prevoius, subtract one from index
    index--;
    console.log(index);
    slideTraverseLogic(-1, slideShowPicsData.length - 1);
    //Index is now 0
    //Update DOM with current image at index 0.
    slideShowImg.setAttribute("src", `${slideShowPicsData[index]}`);
    currentSelectedNavCircle(index);
  };

  const renderFirstPicture = () => {
    slideShowImg.setAttribute("src", `${slideShowPicsData[0]}`);
    renderSlideShowNavCircles();
    currentSelectedNavCircle(0);
  };

  renderFirstPicture();

  nextBtn.addEventListener("click", next);
  previousBtn.addEventListener("click", previous);
}

SlideShow();
