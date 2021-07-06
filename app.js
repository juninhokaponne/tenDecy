const pessoa = document.getElementById("login");
//var logar = document.getElementById("login");

pessoa.addEventListener("click", function(e) {
  e.preventDefault();
  const nome = document.getElementById("user1");
  const value = nome.value;
  console.log(value);
  if (nome.value ==  "" || nome.value == undefined || nome.value.length <3 ){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Ops, Campo usuário incorreto, por favor tente novamente',
      showConfirmButton: false,
      timer: 1500
    })
  }else {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cadastro realizado com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
  }
}); 


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
