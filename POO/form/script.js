let form1 = document.getElementById('formulario');

form1.addEventListener('submit', e =>{
  e.preventDefault()
  console.log(e.target.nome.value)
});
