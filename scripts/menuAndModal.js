const btn = document.getElementById("modal-btn");
const modal = document.getElementById("modal1");
const closeBtn = document.getElementById("modal-close");

btn.onclick = () =>{
  modal.classList.add("modal-window-active");

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener("click", closeModalNoCross)

  function closeModal(){
    modal.classList.remove("modal-window-active");
    closeBtn.removeEventListener("click", closeModal);
    modal.removeEventListener("click", closeModalNoCross)
  };
  function closeModalNoCross(event){
    if(event.target === modal){
      closeModal();
    };
  };
};



function ToogleScript() {
    var nav = document.getElementById("navbar");
    if (nav.style.display == "none") {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  };