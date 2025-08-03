async function poshtibaniView() {
  function setupEventListeners() {
      const inputView = document.querySelector(".inputviewposhtibani");
      const bottomPoshtibani = document.querySelector(".subposhtibani");
      const inputShut = document.querySelector(".inputshutposhtibani");
      if (inputView && bottomPoshtibani && inputShut) {
          inputView.addEventListener("click", function () {
              bottomPoshtibani.classList.remove("hidden");
              bottomPoshtibani.classList.add("block");
          });
          inputShut.addEventListener("click", function () {
              bottomPoshtibani.classList.add("hidden");
          });
      }
  }
  const checkInterval = setInterval(function() {
      setupEventListeners(); 
      if (document.querySelector(".inputviewposhtibani") && document.querySelector(".subposhtibani") && document.querySelector(".inputshutposhtibani")) {
          clearInterval(checkInterval);
      }
  }, 100); 
}
poshtibaniView()
