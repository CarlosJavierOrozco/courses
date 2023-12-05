const d = document

export default function darkTheme(btn, classDark){
  const $themeBtn = d.querySelector(btn);
  const $selector = d.querySelectorAll("[data-dark]");

  let moon = "🌙" ;
  let sun = "☀️";

const lightMode = () => {
  $selector.forEach(el => el.classList.remove("dark-mode"));
  $themeBtn.textContent = moon;
  ls.setItem("theme","light")
};
const darkMode = () => {
  $selector.forEach(el => el.classList.add("dark-mode"));
  $themeBtn.textContent = sun;
  ls.setItem("theme","dark")
};

  d.addEventListener("click",(e)=>{

    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      }else{
        lightMode();
      }
    }

  })
 
const ls = localStorage;

 d.addEventListener("DOMContentLoaded",(e)=>{
  if (ls.getItem("theme") === null) {
    ls.setItem("theme","light")
  }

  if (ls.getItem("theme") === "ligth") {
    lightMode()
  }

  if (ls.getItem("theme") === "dark") {
    darkMode()
  }

 })

}