let notif = document.getElementById('notif')
let newsletter = document.getElementById('newsletter')
let body = document.body
function slideNotif() {
  notif.classList.toggle('hidden')
}

function hideNewsletter() {
  newsletter.classList.toggle('hidden')
  console.log('hide kepanggil')
}

function showNewsletter() {
  newsletter.classList.toggle('show')
  console.log('show kepangginl')
}

// window.addEventListener("scroll", () => {
//   let scrollTop = window.scrollY;
//   let docHeight = document.body.offsetHeight;
//   let winHeight = window.innerHeight;
//   let scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
//   console.log(scrollPercent)
//   if (scrollPercent >= 30) {
//     showNewsletter()
//     window.removeEventListener("scroll")
//   }
// });

var scrollView = setInterval(function() {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
  console.log(scrollPercent)
  if (scrollPercent >= 30) {
    showNewsletter()
    clearInterval(scrollView)
  }
}, 100);
