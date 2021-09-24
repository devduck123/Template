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
  document.querySelectorAll("button").forEach((button) => {
    button.onclick = function () {
      // console.log(this.dataset.page);
      showPage(this.dataset.page);
    };
  });
});
