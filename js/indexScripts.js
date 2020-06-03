var dark = false;

function start(){
  var element = document.getElementById("aboutMe");
  element.classList.toggle("row");
  
}

function colorMode(){
  dark = !dark;
  var element = document.getElementById("bg");
  element.classList.toggle("darkBgImage");
  element = document.getElementById("aboutMe");
  element.classList.toggle("darkModeAbout");
  element = document.getElementById("projects");
  element.classList.toggle("darkModeProjects");
  element = document.getElementById("footer");
  element.classList.toggle("darkModeFooter");
  element = document.getElementById("hamMenu");
  element.classList.toggle("hamburgerDark");
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

function screenAdjustment(){
  if(screen.width < 700){
    document.getElementById("aboutImage").classList.add("row");
    document.getElementById("aboutTxt").classList.add("row");
    document.getElementById("cap").classList.add("container");
    document.getElementById("capDes").classList.add("container");
    document.getElementById("carm").classList.add("container");
    document.getElementById("carmDes").classList.add("container");
    document.getElementById("epic").classList.add("container");
    document.getElementById("epicDes").classList.add("container");
    document.getElementById("web").classList.add("container");
    document.getElementById("webDes").classList.add("container");
    document.getElementById("capHolder").classList.add("container");
    document.getElementById("capHolder").classList.remove("row");
    document.getElementById("carmHolder").classList.add("container");
    document.getElementById("carmHolder").classList.remove("row");
    document.getElementById("epicHolder").classList.add("container");
    document.getElementById("epicHolder").classList.remove("row");
    document.getElementById("webHolder").classList.add("container");
    document.getElementById("webHolder").classList.remove("row");
  }
  else{
    document.getElementById("aboutImage").classList.remove("row");
    document.getElementById("aboutTxt").classList.remove("row");
    document.getElementById("cap").classList.remove("container");
    document.getElementById("capDes").classList.remove("container");
    document.getElementById("carm").classList.remove("container");
    document.getElementById("carmDes").classList.remove("container");
    document.getElementById("epic").classList.remove("container");
    document.getElementById("epicDes").classList.remove("container");
    document.getElementById("web").classList.remove("container");
    document.getElementById("webDes").classList.remove("container");
    document.getElementById("capHolder").classList.remove("container");
    document.getElementById("capHolder").classList.add("row");
    document.getElementById("carmHolder").classList.remove("container");
    document.getElementById("carmHolder").classList.add("row");
    document.getElementById("epicHolder").classList.remove("container");
    document.getElementById("epicHolder").classList.add("row");
    document.getElementById("webHolder").classList.remove("container");
    document.getElementById("webHolder").classList.add("row");
  }
}

