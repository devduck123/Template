function showPage(page) {
  document.querySelectorAll("section.page").forEach((section) => {
    section.style.display = "none";
  });

  let currPageID = `#${page}`;

  console.log(currPageID); // returns id #pageN

  if (currPageID === "#page2") {
    document.querySelector("#intro").style.display = "block";
  } else if (currPageID === "#page3") {
    document.querySelector("#features-and-pricing").style.display = "flex";
  } else if (currPageID === "#page4") {
    document.querySelector("#contact-resources").style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // control nav buttons
  document.querySelectorAll("button").forEach((button) => {
    button.onclick = function () {
      // console.log(this.dataset.page);
      showPage(this.dataset.page);
    };
  });

  // validate per first-name input event
  document.querySelector('#first-name').onkeyup = () => {
    if (document.querySelector('#first-name').value.length > 0 && document.querySelector('#last-name').value.length > 0 && document.querySelector('#email').value.length > 0 && document.querySelector('#comments').value.length > 0) {
      document.querySelector('#contact-btn').disabled = false;
    }
    else {
      document.querySelector('#contact-btn').disabled = true;
    }
  }

  // validate per last-name input event
  document.querySelector('#last-name').onkeyup = () => {
    if (document.querySelector('#first-name').value.length > 0 && document.querySelector('#last-name').value.length > 0 && document.querySelector('#email').value.length > 0 && document.querySelector('#comments').value.length > 0) {
      document.querySelector('#contact-btn').disabled = false;
    }
    else {
      document.querySelector('#contact-btn').disabled = true;
    }
  }

  // validate per email input event
  document.querySelector('#email').onkeyup = () => {
    if (document.querySelector('#first-name').value.length > 0 && document.querySelector('#last-name').value.length > 0 && document.querySelector('#email').value.length > 0 && document.querySelector('#comments').value.length > 0) {
      document.querySelector('#contact-btn').disabled = false;
    }
    else {
      document.querySelector('#contact-btn').disabled = true;
    }
  }

  // validate per comments input event
  document.querySelector('#comments').onkeyup = () => {
    if (document.querySelector('#first-name').value.length > 0 && document.querySelector('#last-name').value.length > 0 && document.querySelector('#email').value.length > 0 && document.querySelector('#comments').value.length > 0) {
      document.querySelector('#contact-btn').disabled = false;
    }
    else {
      document.querySelector('#contact-btn').disabled = true;
    }
  }

});
