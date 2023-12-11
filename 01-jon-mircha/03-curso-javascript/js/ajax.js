(function(){

  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange",(e)=>{

    if (xhr.readyState !== 4) return;
    
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("exito");
      let json = JSON.parse(xhr.responseText);

      //console.log(json);
      console.log(json[0].company.name);

      json.forEach(el =>{
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);

    }else{
      console.error("error");
      let message = xhr.statusText || "Ocurrio un error";

      if (xhr.status === 404) {
        $xhr.innerHTML = `<span class="error">Error ${xhr.status}: recurso no encontrado</span>`
      }else{
        $xhr.innerHTML = `<span class="error">Error ${xhr.status}: ${message}</span>`
      }
      
    }

  //  console.log(xhr)
   
  })

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
}());


(function(){
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    //console.log(res);
    return res.ok ? res.json() : Promise.reject(res);
  })
  .then(json => {
    json.forEach(el =>{
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
  })
  .catch((err)=>{
    console.log(err)
    let message = err.statusText || "Ocurrio un error";

    if (err.status === 404) {
      $fetch.innerHTML = `<span class="error">Error ${err.status}: recurso no encontrado</span>`
    }else{
      $fetch.innerHTML = `<span class="error">Error ${err.status}: ${message}</span>`
    }
  })
  .finally(()=>{
    console.log("Se ejecuta idependientemente del resultado de la promesa fetch")
  });
}());