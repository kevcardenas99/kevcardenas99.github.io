var dark = false;

function colorMode(){
  dark = !dark;
  var element = document.getElementById("bg");
  element.classList.toggle("darkBgImage");
  element = document.getElementById("navbar");
  element.classList.toggle("bg-dark");
  element.classList.toggle("navbar-dark");
  element = document.getElementById("aboutMe");
  element.classList.toggle("darkModeAbout");
  element = document.getElementById("projects");
  element.classList.toggle("darkModeProjects");
  if(dark){
    document.getElementById("githubIcon").src= "./img/GitHub-Mark-120px-plus.png";
  }
  else{
    document.getElementById("githubIcon").src= "./img/GitHub-Mark-Light-120px-plus.png";
  }
}

