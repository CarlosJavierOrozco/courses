const d = document

export default function darkTheme(btn, classDark){
  const $themeBtn = d.querySelector(btn);
  const $selector = d.querySelectorAll("[data-dark]");

  let moon = "🌙" ;
  let sun = "☀️";

  d.addEventListener("click",(e)=>{

    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        $selector.forEach(el => el.classList.add("dark-mode"));
        $themeBtn.textContent = sun;
      }else{
        $selector.forEach(el => el.classList.remove("dark-mode"));
        $themeBtn.textContent = moon;
      }
    }

  })
  console.log($selector)
}