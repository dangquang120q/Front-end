
const modal = document.querySelector(".active");
const openModalBtn = document.querySelector(".Modal");
const iconCloseModal = document.querySelector(".header i");
const buttonCloseModal = document.querySelector(".footer button");

function toggleModal() {
  modal.classList.toggle("hide");
}
openModalBtn.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});