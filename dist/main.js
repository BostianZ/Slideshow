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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx5QkFBeUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlCQUF5QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxQkFBcUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NsaWRlc2hvdy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTbGlkZVNob3coKSB7XHJcbiAgY29uc3Qgc2xpZGVTaG93UGljc0RhdGEgPSBbXHJcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ2NTI3ODY4LWNjYjdlZTdkZmE2YT9xPTgwJnc9MTAwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1ueDhjSFZ3Y0hsOFpXNThNSHg4TUh4OGZEQSUzRFwiLFxyXG5cclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9zZm5rcThsbXU1ZDcvNE1hNTh1a2U4U1hEUUxXWWVmV2lJdC8zZjE5NDU0MjJlYTA3ZWE2NTIwYzdhYWUzOTE4MDEwMS8yMDIxLTExLTI0X1NpbmdsZXRvbl9QdXBweV9TeW5kcm9tZV9PbmVfUHVwcHlfTGl0dGVyLmpwZz93PTEwMDAmaD03NTAmZmw9cHJvZ3Jlc3NpdmUmcT03MCZmbT1qcGdcIixcclxuXHJcbiAgICBcImh0dHBzOi8vd3d3LnJkLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMy9HZXR0eUltYWdlcy0xMTMzNjA1MzI1LXNjYWxlZC1lMTYxNzIyNzg5ODQ1Ni5qcGc/Zml0PTY5NiUyQzQ2M1wiLFxyXG5cclxuICAgIFwiaHR0cHM6Ly9zdGF0aWMuYm9yZWRwYW5kYS5jb20vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9jdXRlLWtpdHRlbnMtMzAtNTdiMzBhZDQxYmM5MF9fNjA1LmpwZ1wiXHJcblxyXG4gIF07XHJcblxyXG4gIC8vTmF2IGNpcmNsZXMgbm9kZWxpc3RcclxuICAvLyBjb25zdCBzbGlkZVNob3dOYXZDaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAvLyAgIFwiLnNsaWRlc2hvdy1uYXYtY2lyY2xlXCJcclxuICAvLyApO1xyXG4gIGNvbnN0IHNsaWRlU2hvd0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XHJcbiAgY29uc3Qgc2xpZGVTaG93SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3ctaW1nXCIpO1xyXG4gIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5leHRcIik7XHJcbiAgY29uc3QgcHJldmlvdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZpb3VzXCIpO1xyXG4gIC8vU3RhcnRpbmcgcG9pbnRcclxuICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICBjb25zdCByZW5kZXJTZWxlY3RlZEltYWdlID0gKGluZGV4KSA9PiB7XHJcbiAgICAvL1NldCB0aGUgaW5kZXggdG8gdGhlIGluZGV4IG9mIHRoZSBjbGlja2VkIG5hdiBjaXJjbGUgaW1hZ2UuXHJcbiAgICBpbmRleCA9IGluZGV4O1xyXG4gICAgc2xpZGVTaG93SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtzbGlkZVNob3dQaWNzRGF0YVtpbmRleF19YClcclxuICAgIGN1cnJlbnRTZWxlY3RlZE5hdkNpcmNsZShpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJTbGlkZVNob3dOYXZDaXJjbGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2Q2lyY2xlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3ctbmF2XCIpO1xyXG4gICAgc2xpZGVTaG93UGljc0RhdGEuZm9yRWFjaCgocGljdHVyZSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbmF2Q2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbmF2Q2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXNob3ctbmF2LWNpcmNsZVwiKTtcclxuICAgICAgbmF2Q2lyY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2luZGV4fWApO1xyXG4gICAgICBuYXZDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgcmVuZGVyU2VsZWN0ZWRJbWFnZShpbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBuYXZDaXJjbGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2Q2lyY2xlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjdXJyZW50U2VsZWN0ZWROYXZDaXJjbGUgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlU2hvd05hdkNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlc2hvdy1uYXYtY2lyY2xlXCIpO1xyXG4gICAgc2xpZGVTaG93TmF2Q2lyY2xlcy5mb3JFYWNoKChjaXJjbGUpID0+IHtcclxuICAgICAgY2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgIH0pO1xyXG4gICAgc2xpZGVTaG93TmF2Q2lyY2xlc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vR2l2ZXMgdGhlIHNsaWRlc2hvdyB0aGUgYWJpbGl0eSB0byBiZSBjeWNsaWNhbFxyXG4gIC8vSWYgeW91IGFkZCBhIG5ldyBzbGlkZSBjaGFuZ2UgdGhlIGVuZEluZGV4IGluIHRoZSBuZXh0L3ByZXZpb3VzIGZ1bmN0aW9ucy5cclxuICBjb25zdCBzbGlkZVRyYXZlcnNlTG9naWMgPSAoZW5kSW5kZXgsIG5ld0luZGV4KSA9PiB7XHJcbiAgICBpZiAoaW5kZXggPT09IGVuZEluZGV4KSB7XHJcbiAgICAgIGluZGV4ID0gbmV3SW5kZXg7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIC8vRmlyc3QgcGljdHVyZSBzdGFydHMgb24gaW5kZXggMC5cclxuICAgIC8vV2UgY2xpY2sgbmV4dCwgaW5kZXggZ29lcyB1cCB0byAxLlxyXG4gICAgaW5kZXgrKztcclxuICAgIHNsaWRlVHJhdmVyc2VMb2dpYyhzbGlkZVNob3dQaWNzRGF0YS5sZW5ndGgsIDApO1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgLy9XZSB0aGVuIHVwZGF0ZSB0aGUgZG9tIHdpdGggdGhlIGltYWdlIGF0IGluZGV4IG9uZS5cclxuICAgIC8vSW5kZXggaXMgY3VycnJlbnRseSAxLlxyXG4gICAgc2xpZGVTaG93SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtzbGlkZVNob3dQaWNzRGF0YVtpbmRleF19YCk7XHJcblxyXG4gICAgY3VycmVudFNlbGVjdGVkTmF2Q2lyY2xlKGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcclxuICAgIC8vSWYgaW5kZXggaXMgMVxyXG4gICAgLy9XZSBjbGljayBwcmV2b2l1cywgc3VidHJhY3Qgb25lIGZyb20gaW5kZXhcclxuICAgIGluZGV4LS07XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICBzbGlkZVRyYXZlcnNlTG9naWMoLTEsIHNsaWRlU2hvd1BpY3NEYXRhLmxlbmd0aCAtIDEpO1xyXG4gICAgLy9JbmRleCBpcyBub3cgMFxyXG4gICAgLy9VcGRhdGUgRE9NIHdpdGggY3VycmVudCBpbWFnZSBhdCBpbmRleCAwLlxyXG4gICAgc2xpZGVTaG93SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtzbGlkZVNob3dQaWNzRGF0YVtpbmRleF19YCk7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWROYXZDaXJjbGUoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpcnN0UGljdHVyZSA9ICgpID0+IHtcclxuICAgIHNsaWRlU2hvd0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7c2xpZGVTaG93UGljc0RhdGFbMF19YCk7XHJcbiAgICByZW5kZXJTbGlkZVNob3dOYXZDaXJjbGVzKCk7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWROYXZDaXJjbGUoMCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRmlyc3RQaWN0dXJlKCk7XHJcblxyXG4gIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHQpO1xyXG4gIHByZXZpb3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2aW91cyk7XHJcbn1cclxuXHJcblNsaWRlU2hvdygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=