const TEST_BTN=  document.querySelector(".test__button");
const PROGRESS_BAR_FILLED = document.querySelector(".progress__bar_filed");
TEST_BTN.addEventListener("click", ()=>{
    PROGRESS_BAR_FILLED.style.width = "50%";
})