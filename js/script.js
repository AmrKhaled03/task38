const changeLanding = (src) => {
  document.getElementById("landing").style.cssText = `
      background: url("${src}") no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-attachment: scroll;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 100vh;
    overflow: hidden;

    `;
};
const openAside = () => {
  document.querySelector("aside").classList.add("open");
};
const closeAside = () => {
  document.querySelector("aside").classList.remove("open");
};
let allProducts = [
  {
    id: 0,
    name: "Cheese Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sit, placeat vel laborum ducimus ipsam voluptas labore aliquam explicabo illum? Cumque ex itaque unde deleniti vitae nobis quidem autem doloremque.",
    img: "../imgs/p1.jpeg",
    price: 200,
  },
  {
    id: 1,
    name: "Truffle Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sit, placeat vel laborum ducimus ipsam voluptas labore aliquam explicabo illum? Cumque ex itaque unde deleniti vitae nobis quidem autem doloremque.",
    img: "../imgs/p2.jpeg",

    price: 500,
  },
  {
    id: 2,
    name: "Avocado Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sit, placeat vel laborum ducimus ipsam voluptas labore aliquam explicabo illum? Cumque ex itaque unde deleniti vitae nobis quidem autem doloremque.",
    img: "../imgs/p3.jpeg",

    price: 300,
  },
  {
    id: 3,
    name: "Classic Burger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sit, placeat vel laborum ducimus ipsam voluptas labore aliquam explicabo illum? Cumque ex itaque unde deleniti vitae nobis quidem autem doloremque.",
    img: "../imgs/p4.jpeg",

    price: 150,
  },
];
function showProducts() {
  let products = document.getElementById("products");
  products.innerHTML = "";
  allProducts.forEach((product) => {
    products.innerHTML += `
       
          <div class="col-lg-4 col-md-6 col-sm-12" key="${product.id}">
            <div class="product">
              <div class="img">
                <img src="${product.img}" alt="product" class="img-fluid " loading="lazy">
              </div>
              <div class="body d-flex flex-column">
              <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <span>${product.price}$</span>
      
                 <button class="btns" data-id="${product.id}">Add To Cart</button>   
         
                      
              </div>
    
            </div>
          </div>
        
    
     
        `;
  });
  let btns = document.querySelectorAll(".btns");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = btn.dataset.id;
      allProducts.find((item) => {
        //like foreach
        if (item.id == id) {
          if (cartItems.some((cartItem) => cartItem.id == id)) {
            //to filter items in cart
            alert("product already exist");
          } else {
            cartItems.push(item);
          }
        }
      });
      showCart();
    });
  });
}
showProducts();
let cartItems = [];

function showCart() {
  let cart = document.querySelector("tbody");
  cart.innerHTML = "";
  cartItems.forEach((product) => {
    cart.innerHTML += ` <tr>
<td>${product.id}</td>
<td>                <img src="${product.img}" alt="product" class="img-fluid cart-img" loading="lazy">
</td>
<td>${product.name}</td>
<td>${product.price}</td>
<td><button onclick="deleteProduct(${product.id})" class="btn btn-danger btn-md" >Delete</button></td>
    </tr>
    `;
  });
  document.querySelector(".cart-count span").innerHTML = cartItems.length;
}
showCart();

function deleteProduct(id) {
  cartItems = cartItems.filter((product) => product.id !== id);
  showCart();
}
function deleteAll() {
  cartItems = [];
  showCart();
}
let users = [];
function SignIn(e) {
  e.preventDefault(); // Prevent form submission
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_ib9q8mf";
  const templateId = "template_7hn7tqe";

  emailjs
    .send(serviceId, templateId, params)

    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Message Is Sent Successfully !",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((err) => () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let text = ""; // Error message variable

  if (email.length === 0 || email.indexOf("@") == -1) {
    text = "Please enter a valid email"; // Set error message
    document.getElementById("email_error").innerHTML = text;
    document.getElementById("email_error").style.color = "red";
    return false;
  } else if (password.length === 0 || password.length <= 3) {
    text = "Please enter a valid password"; // Set error message
    document.getElementById("password_error").innerHTML = text;
    document.getElementById("password_error").style.color = "red";
    return false;
  } else {
    let newUser = {
      id: users.length + 1,
      mail: email,
      pass: password,
    };
    users.push(newUser);
    console.table(users);

    return true;
  }
}
