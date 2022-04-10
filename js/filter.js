document.addEventListener("keyup", e=>{

    if (e.target.matches("#search")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".location").forEach(location =>{
  
            location.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?location.classList.remove("filter")
              :location.classList.add("filter")
        })
  
    }
  })