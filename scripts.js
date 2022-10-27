const openCart = document.querySelector('.btn__left');
const addProduct = document.querySelector('.btn__right');
const closeCart = document.querySelector('.close__cart');
const modal = document.querySelector('.cart__container');
const overlay = document.querySelector('.overlay');
const buttonContainer = document.querySelector('.button__container');
const cart = document.querySelector('.cart');
const cartInfo = document.querySelector('.cart__info');
const addAllProductsHere = document.querySelector('.here_enter_products')


function openModal() {
    modal.style.right = '0';
    buttonContainer.classList.add('overlay');
    modal.style.display = 'flex';
    cartInfo.innerHTML = `
    <img src="./imagini/emptyCart.svg" alt="emptyCart">
    <h2>Of, e gol!</h2>
    <p>Pentru livrare comanda minimă este de 34,90 lei</p>
`
}
function closeModal() {
    modal.style.right = '-100%';
    buttonContainer.classList.remove('overlay');
    addAllProductsHere.innerHTML = ''

}

openCart.addEventListener('click', openModal);
closeCart.addEventListener('click', closeModal);

window.onclick = function (event) {
    if (event.target == buttonContainer) {
        modal.style.right = '-100%';
        buttonContainer.classList.remove('overlay');

    addAllProductsHere.innerHTML = ''
    }

    
}

const products = [
    {
        'img': './imagini/img1.jpeg',
        'nume': 'Fiesta',
        'continut': 'Piept de pui, mozzarella, ceapă roșie, ardei gras, rosii proaspete, salam chorizo, sos chipotle, sos ranch, usturoi granulat',
        'pret': 29.9
    },
    {
        'img': './imagini/img1.jpeg',
        'nume': 'Margherita Classic 🌱',
        'continut': 'Mozzarella, sos de roșii',
        'pret': 29.9
    },
    {
        'img': './imagini/img1.jpeg',
        'nume': 'Dracula 🌶️',
        'continut': 'Sos de roșii, salam chorizo, ardei jalapeno, salam pepperoni, mozzarella, sos chipotle',
        'pret': 29.9
    },
];





addProduct.addEventListener('click', addProducts);

function addProducts() {
    addAllProductsHere.innerHTML = ''
    function truncateString(str, num) {
    
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }

     const arr = products.map((product, index) => {
        
       const truncate = `${product.continut}`
       const trc = truncate.slice('')
        addAllProductsHere.innerHTML = addAllProductsHere.innerHTML + 
            `
        <div class="product__container">
            <div class="product_wrp">
                <div class="product__img">
                    <img src=${product.img}>
                </div>
                <div class="product__info">
                    <h3>${product.nume}</h3>
                    <p>${truncateString(trc, 40)}</p>
            </div>
        </div>
            <small>${product.pret} lei</small>
        </div>
        
        <style>
            .cart__info{
            display:none;
         }
            .cart__container{
            display:flex;
         }
        </style>
        
        `
        // modal.style.display = "flex";
        console.log(product);
        console.log(index);
    })
 
    console.log(arr);
}
