// Modal Script
var modal = document.getElementById("login-modal");
var btn = document.getElementById("login-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Now Showing | Coming Soon Script
document.getElementById('now-showing-tab').addEventListener('click', function() {

  document.getElementById('now-showing').classList.add('active');
  document.getElementById('now-showing').classList.remove('inactive');
  document.getElementById('coming-soon').classList.add('inactive');
  document.getElementById('coming-soon').classList.remove('active');

  this.classList.add('active');
  this.classList.remove('inactive');
  document.getElementById('coming-soon-tab').classList.add('inactive');
  document.getElementById('coming-soon-tab').classList.remove('active');
});

document.getElementById('coming-soon-tab').addEventListener('click', function() {

  document.getElementById('coming-soon').classList.add('active');
  document.getElementById('coming-soon').classList.remove('inactive');
  document.getElementById('now-showing').classList.add('inactive');
  document.getElementById('now-showing').classList.remove('active');

  this.classList.add('active');
  this.classList.remove('inactive');
  document.getElementById('now-showing-tab').classList.add('inactive');
  document.getElementById('now-showing-tab').classList.remove('active');
});