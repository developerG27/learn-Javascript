const title = document.getElementById('title')

const azione = e => console.log(e.target.textContent);

//Doppio click
title.addEventListener('dblclick', e => {
  azione(e)
  console.log('Ho fatto doppio click');
})

//Il mouse entra nell'elemento
title.addEventListener('mouseenter', e => {
  azione(e)
  console.log("Sono dentro l'elemento");
})

//Il mouse esce dall'elemento
title.addEventListener('mouseleave', e => {
  azione(e)
  console.log("Sono uscito dall'elemento");
})

title.addEventListener('contextmenu', e => {
  azione(e)
  console.log('è stato premuto il tasto destro');
  e.preventDefault(); //Permette cancellare l'elevento che sarebbe partito di default
})