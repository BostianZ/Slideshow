function SlideShow() {
  const slideShowPicsData = [
    "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D",

    "https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg",

    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg?fit=696%2C463",
  ];

  const slideShowNavCircles = document.querySelectorAll(
    ".slideshow-nav-circle"
  );

  const slideShowEl = document.querySelector(".slideshow");
  const slideShowImg = document.querySelector(".slideshow-img");
  const nextBtn = document.querySelector(".next");
  const previousBtn = document.querySelector(".previous");
  let index = 0;

  const navCircles = (index) => {
    slideShowNavCircles.forEach((circle) => {
      circle.classList.remove("selected");
    });
    slideShowNavCircles[index].classList.add("selected");
  };

  const next = () => {
    //First picture starts on index 0.
    //We click next, index goes up to 1.
    index++
    console.log(index);
    //We then update the dom with the image at index one.
    //Index is currrently 1.
    slideShowImg.setAttribute("src", `${slideShowPicsData[index]}`)
    navCircles(index);
    
  };

  const previous = () => {

    //If index is 1
    //We click prevoius, subtract one from index
    index--
    console.log(index);

    //Index is now 0
    //Update DOM with current image at index 0.
    slideShowImg.setAttribute("src", `${slideShowPicsData[index]}`)
    navCircles(index);

  };

  const renderFirstPicture = () => {
    console.log(index);
    slideShowImg.setAttribute("src", `${slideShowPicsData[0]}`);
    navCircles(0);
  };
 
  renderFirstPicture();

  nextBtn.addEventListener("click", next);
  previousBtn.addEventListener("click", previous);
}

SlideShow();
