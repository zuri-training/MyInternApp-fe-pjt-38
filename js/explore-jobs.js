const posted = Array.prototype.slice.call(document.querySelectorAll('.posted'));
console.log(posted);

// Create a media condition that targets viewports at most 768px wide
const mediaQuery = window.matchMedia('(max-width: 768px)');

mediaQuery.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    posted.forEach((element) => {
      element.classList.remove('text-end');
    });
  } else {
    element.classList.toggle('text-end');
  }
}

// Run it initially
handleDeviceChange(mediaQuery);
