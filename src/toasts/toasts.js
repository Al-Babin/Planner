import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"



const toast = Toastify({
  text: "Такая категория уже есть",
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #e69c2c, #df9019)",
  },
  onClick: function(){} // Callback after click
});

export default toast;