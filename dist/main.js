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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlCQUF5QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx5QkFBeUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NsaWRlc2hvdy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTbGlkZVNob3coKSB7XHJcbiAgY29uc3Qgc2xpZGVTaG93UGljc0RhdGEgPSBbXHJcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ2NTI3ODY4LWNjYjdlZTdkZmE2YT9xPTgwJnc9MTAwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1ueDhjSFZ3Y0hsOFpXNThNSHg4TUh4OGZEQSUzRFwiLFxyXG5cclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9zZm5rcThsbXU1ZDcvNE1hNTh1a2U4U1hEUUxXWWVmV2lJdC8zZjE5NDU0MjJlYTA3ZWE2NTIwYzdhYWUzOTE4MDEwMS8yMDIxLTExLTI0X1NpbmdsZXRvbl9QdXBweV9TeW5kcm9tZV9PbmVfUHVwcHlfTGl0dGVyLmpwZz93PTEwMDAmaD03NTAmZmw9cHJvZ3Jlc3NpdmUmcT03MCZmbT1qcGdcIixcclxuXHJcbiAgICBcImh0dHBzOi8vd3d3LnJkLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMy9HZXR0eUltYWdlcy0xMTMzNjA1MzI1LXNjYWxlZC1lMTYxNzIyNzg5ODQ1Ni5qcGc/Zml0PTY5NiUyQzQ2M1wiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNsaWRlU2hvd05hdkNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuc2xpZGVzaG93LW5hdi1jaXJjbGVcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNsaWRlU2hvd0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XHJcbiAgY29uc3Qgc2xpZGVTaG93SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3ctaW1nXCIpO1xyXG4gIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5leHRcIik7XHJcbiAgY29uc3QgcHJldmlvdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZpb3VzXCIpO1xyXG4gIGxldCBpbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0IG5hdkNpcmNsZXMgPSAoaW5kZXgpID0+IHtcclxuICAgIHNsaWRlU2hvd05hdkNpcmNsZXMuZm9yRWFjaCgoY2lyY2xlKSA9PiB7XHJcbiAgICAgIGNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICAgIHNsaWRlU2hvd05hdkNpcmNsZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgLy9GaXJzdCBwaWN0dXJlIHN0YXJ0cyBvbiBpbmRleCAwLlxyXG4gICAgLy9XZSBjbGljayBuZXh0LCBpbmRleCBnb2VzIHVwIHRvIDEuXHJcbiAgICBpbmRleCsrXHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAvL1dlIHRoZW4gdXBkYXRlIHRoZSBkb20gd2l0aCB0aGUgaW1hZ2UgYXQgaW5kZXggb25lLlxyXG4gICAgLy9JbmRleCBpcyBjdXJycmVudGx5IDEuXHJcbiAgICBzbGlkZVNob3dJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke3NsaWRlU2hvd1BpY3NEYXRhW2luZGV4XX1gKVxyXG4gICAgbmF2Q2lyY2xlcyhpbmRleCk7XHJcbiAgICBcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcclxuXHJcbiAgICAvL0lmIGluZGV4IGlzIDFcclxuICAgIC8vV2UgY2xpY2sgcHJldm9pdXMsIHN1YnRyYWN0IG9uZSBmcm9tIGluZGV4XHJcbiAgICBpbmRleC0tXHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcblxyXG4gICAgLy9JbmRleCBpcyBub3cgMFxyXG4gICAgLy9VcGRhdGUgRE9NIHdpdGggY3VycmVudCBpbWFnZSBhdCBpbmRleCAwLlxyXG4gICAgc2xpZGVTaG93SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtzbGlkZVNob3dQaWNzRGF0YVtpbmRleF19YClcclxuICAgIG5hdkNpcmNsZXMoaW5kZXgpO1xyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGaXJzdFBpY3R1cmUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICBzbGlkZVNob3dJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke3NsaWRlU2hvd1BpY3NEYXRhWzBdfWApO1xyXG4gICAgbmF2Q2lyY2xlcygwKTtcclxuICB9O1xyXG4gXHJcbiAgcmVuZGVyRmlyc3RQaWN0dXJlKCk7XHJcblxyXG4gIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHQpO1xyXG4gIHByZXZpb3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2aW91cyk7XHJcbn1cclxuXHJcblNsaWRlU2hvdygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=