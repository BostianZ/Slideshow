/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

  const renderSlideShowNavCircles = () => {
    const navCircleContainer = document.querySelector(".slideshow-nav");
    slideShowPicsData.forEach((picture, index) => {
      const navCircle = document.createElement("div");
      navCircle.classList.add("slideshow-nav-circle");
      navCircle.setAttribute("id", `${index}`);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlCQUF5QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xpZGVzaG93Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNsaWRlU2hvdygpIHtcclxuICBjb25zdCBzbGlkZVNob3dQaWNzRGF0YSA9IFtcclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDY1Mjc4NjgtY2NiN2VlN2RmYTZhP3E9ODAmdz0xMDAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OGNIVndjSGw4Wlc1OE1IeDhNSHg4ZkRBJTNEXCIsXHJcblxyXG4gICAgXCJodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L3NmbmtxOGxtdTVkNy80TWE1OHVrZThTWERRTFdZZWZXaUl0LzNmMTk0NTQyMmVhMDdlYTY1MjBjN2FhZTM5MTgwMTAxLzIwMjEtMTEtMjRfU2luZ2xldG9uX1B1cHB5X1N5bmRyb21lX09uZV9QdXBweV9MaXR0ZXIuanBnP3c9MTAwMCZoPTc1MCZmbD1wcm9ncmVzc2l2ZSZxPTcwJmZtPWpwZ1wiLFxyXG5cclxuICAgIFwiaHR0cHM6Ly93d3cucmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAzL0dldHR5SW1hZ2VzLTExMzM2MDUzMjUtc2NhbGVkLWUxNjE3MjI3ODk4NDU2LmpwZz9maXQ9Njk2JTJDNDYzXCIsXHJcblxyXG4gICAgXCJodHRwczovL3N0YXRpYy5ib3JlZHBhbmRhLmNvbS9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA4L2N1dGUta2l0dGVucy0zMC01N2IzMGFkNDFiYzkwX182MDUuanBnXCJcclxuXHJcbiAgXTtcclxuXHJcbiAgLy9OYXYgY2lyY2xlcyBub2RlbGlzdFxyXG4gIC8vIGNvbnN0IHNsaWRlU2hvd05hdkNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gIC8vICAgXCIuc2xpZGVzaG93LW5hdi1jaXJjbGVcIlxyXG4gIC8vICk7XHJcbiAgY29uc3Qgc2xpZGVTaG93RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvd1wiKTtcclxuICBjb25zdCBzbGlkZVNob3dJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvdy1pbWdcIik7XHJcbiAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKTtcclxuICBjb25zdCBwcmV2aW91c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldmlvdXNcIik7XHJcbiAgLy9TdGFydGluZyBwb2ludFxyXG4gIGxldCBpbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0IHJlbmRlclNsaWRlU2hvd05hdkNpcmNsZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZDaXJjbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvdy1uYXZcIik7XHJcbiAgICBzbGlkZVNob3dQaWNzRGF0YS5mb3JFYWNoKChwaWN0dXJlLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBuYXZDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuYXZDaXJjbGUuY2xhc3NMaXN0LmFkZChcInNsaWRlc2hvdy1uYXYtY2lyY2xlXCIpO1xyXG4gICAgICBuYXZDaXJjbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aW5kZXh9YCk7XHJcbiAgICAgIG5hdkNpcmNsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDaXJjbGUpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRTZWxlY3RlZE5hdkNpcmNsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVTaG93TmF2Q2lyY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVzaG93LW5hdi1jaXJjbGVcIik7XHJcbiAgICBzbGlkZVNob3dOYXZDaXJjbGVzLmZvckVhY2goKGNpcmNsZSkgPT4ge1xyXG4gICAgICBjaXJjbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgfSk7XHJcbiAgICBzbGlkZVNob3dOYXZDaXJjbGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgfTtcclxuXHJcbiAgLy9HaXZlcyB0aGUgc2xpZGVzaG93IHRoZSBhYmlsaXR5IHRvIGJlIGN5Y2xpY2FsXHJcbiAgLy9JZiB5b3UgYWRkIGEgbmV3IHNsaWRlIGNoYW5nZSB0aGUgZW5kSW5kZXggaW4gdGhlIG5leHQvcHJldmlvdXMgZnVuY3Rpb25zLlxyXG4gIGNvbnN0IHNsaWRlVHJhdmVyc2VMb2dpYyA9IChlbmRJbmRleCwgbmV3SW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gZW5kSW5kZXgpIHtcclxuICAgICAgaW5kZXggPSBuZXdJbmRleDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgLy9GaXJzdCBwaWN0dXJlIHN0YXJ0cyBvbiBpbmRleCAwLlxyXG4gICAgLy9XZSBjbGljayBuZXh0LCBpbmRleCBnb2VzIHVwIHRvIDEuXHJcbiAgICBpbmRleCsrO1xyXG4gICAgc2xpZGVUcmF2ZXJzZUxvZ2ljKHNsaWRlU2hvd1BpY3NEYXRhLmxlbmd0aCwgMCk7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAvL1dlIHRoZW4gdXBkYXRlIHRoZSBkb20gd2l0aCB0aGUgaW1hZ2UgYXQgaW5kZXggb25lLlxyXG4gICAgLy9JbmRleCBpcyBjdXJycmVudGx5IDEuXHJcbiAgICBzbGlkZVNob3dJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke3NsaWRlU2hvd1BpY3NEYXRhW2luZGV4XX1gKTtcclxuXHJcbiAgICBjdXJyZW50U2VsZWN0ZWROYXZDaXJjbGUoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgLy9JZiBpbmRleCBpcyAxXHJcbiAgICAvL1dlIGNsaWNrIHByZXZvaXVzLCBzdWJ0cmFjdCBvbmUgZnJvbSBpbmRleFxyXG4gICAgaW5kZXgtLTtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgIHNsaWRlVHJhdmVyc2VMb2dpYygtMSwgc2xpZGVTaG93UGljc0RhdGEubGVuZ3RoIC0gMSk7XHJcbiAgICAvL0luZGV4IGlzIG5vdyAwXHJcbiAgICAvL1VwZGF0ZSBET00gd2l0aCBjdXJyZW50IGltYWdlIGF0IGluZGV4IDAuXHJcbiAgICBzbGlkZVNob3dJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke3NsaWRlU2hvd1BpY3NEYXRhW2luZGV4XX1gKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZE5hdkNpcmNsZShpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRmlyc3RQaWN0dXJlID0gKCkgPT4ge1xyXG4gICAgc2xpZGVTaG93SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtzbGlkZVNob3dQaWNzRGF0YVswXX1gKTtcclxuICAgIHJlbmRlclNsaWRlU2hvd05hdkNpcmNsZXMoKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZE5hdkNpcmNsZSgwKTtcclxuICB9O1xyXG5cclxuICByZW5kZXJGaXJzdFBpY3R1cmUoKTtcclxuXHJcbiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dCk7XHJcbiAgcHJldmlvdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZpb3VzKTtcclxufVxyXG5cclxuU2xpZGVTaG93KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==