var acc = document.getElementsByClassName("question");

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var p = document.getElementsByClassName("question-text");
      this.querySelector('.question-img').classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        panel.childNodes[1].stype.borderBottom = null;
      } else {
        panel.childNodes[1].style.borderBottom = "1px solid #c6c6c6";
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }


const els = document.querySelectorAll('.tooltip');
tippy(els, {
  content: "<p class=\"pop-up\">Must include:<br>At least 8 characters<br>At least one letter<br>At least one number</p>",
  arrow: true,
  theme: "light-border",
  placement: "left",
  // duration: [20000,2000]
})
