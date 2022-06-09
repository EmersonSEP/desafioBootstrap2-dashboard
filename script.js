const btnToast = document.getElementById('ad-toast');

btnToast.addEventListener("click", () => (
  Toastify({
    text: "Cadastrado com sucesso!",
    gravity: "top",
    position: "center",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast()
)
);

const btnToast2 = document.getElementById('ad-toast2');
btnToast2.addEventListener("click", () => (
  Toastify({
    text: "Excluido com sucesso!",
    gravity: "top",
    position: "center",
    className: "info",
    style: {
      background: "linear-gradient(to right, rgb(205, 8, 8), rgb(34, 2, 2))",
    }
  }).showToast()
)
);
const btnToast3 = document.getElementById('ad-toast3');
btnToast3.addEventListener("click", () => (
  Toastify({
    text: "Excluido com sucesso!",
    gravity: "top",
    position: "center",
    className: "info",
    style: {
      background: "linear-gradient(to right, rgb(205, 8, 8), rgb(34, 2, 2))",
    }
  }).showToast()
)
);
const btnToast4 = document.getElementById('ad-toast4');
btnToast4.addEventListener("click", () => (
  Toastify({
    text: "Excluido com sucesso!",
    gravity: "top",
    position: "center",
    className: "info",
    style: {
      background: "linear-gradient(to right, rgb(205, 8, 8), rgb(34, 2, 2))",
    }
  }).showToast()
)
);


$('.use-slick').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});





