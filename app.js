let listaDeAmigos = [];

function adicionarAmigo() {
    let inserirAmigo = document.getElementById('amigo');
    let nomedoAmigo = inserirAmigo.value;

   if(!nomedoAmigo){
   alert('Digite um nome válido');
   return;

  }
  listaDeAmigos.push(nomedoAmigo);
  inserirAmigo.value = '';
  inserirAmigo.focus();
  atualizarLista();
}

function atualizarLista( ) {
    let listaAmigos = document.getElementById('listaAmigos');  //esse é o ID no HTML
    listaAmigos.innerHTML = '';

 for(let i = 0; i < listaDeAmigos.length; i++){
  let item = document.createElement('li');
  item.textContent = listaDeAmigos[i];
  listaAmigos.appendChild(item);
 }
}

function sortearAmigo( ) {
   if (listaDeAmigos.length === 0){
   alert('Nenhum amigo adicionado');
   return;
  }
  let amigosorteado = listaDeAmigos[Math.floor(Math.random()* listaDeAmigos.length)];
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `O amigo sorteado é: ${amigosorteado}`;
  
}