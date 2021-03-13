let notif = document.getElementById('notif')
let newsletter = document.getElementById('newsletter')

function slideNotif() {
  notif.classList.toggle('hidden')
}

function hideNewsletter() {
  newsletter.classList.toggle('hidden')
  localStorage.setItem('time', new Date())
}

function showNewsletter() {
  newsletter.classList.toggle('show')
}

let seconds = 0

if (localStorage.getItem('time')) {
  var diff = Math.abs(new Date() - new Date(localStorage.getItem('time')));
  seconds = (diff/1000);

  console.log(seconds)
}

var scrollView = setInterval(function() {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
  // console.log(scrollPercent)
  if (scrollPercent >= 30) {
    if (seconds >= 600 || seconds == 0) {
      showNewsletter()
      clearInterval(scrollView)
    }
  }
}, 100);
