var dark = false;

function colorMode(){
  dark = !dark;
  var element = document.getElementById("bg");
  element.classList.toggle("darkBgImage");
  element = document.getElementById("aboutMe");
  element.classList.toggle("darkModeAbout");
  element = document.getElementById("projects");
  element.classList.toggle("darkModeProjects");
  if(dark){
    document.getElementById("githubIcon").src= "./img/GitHub-Mark-120px-plus.png";
    document.getElementById("footerGithubIcon").src= "./img/GitHub-Mark-120px-plus.png";
    document.getElementById("switch").innerHTML="Switch to Light Mode:";
    document.getElementById("splash").style.background = "rgba(0,0,0,.9)";
    document.getElementById("navLinks").style.color = "white";
  }
  else{
    document.getElementById("githubIcon").src= "./img/GitHub-Mark-Light-120px-plus.png";
    document.getElementById("footerGithubIcon").src= "./img/GitHub-Mark-Light-120px-plus.png";
    document.getElementById("switch").innerHTML="Switch to Dark Mode:";
    document.getElementById("splash").style.background = "rgba(255,255,255,.9)";
    document.getElementById("navLinks").style.color = "black";
  }
}

