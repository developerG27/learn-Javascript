const title = document.getElementById('title')

//Doppio click
title.addEventListener('dblclick', () => {
  console.log('Ho fatto doppio click');
})

//Il mouse entra nell'elemento
title.addEventListener('mouseenter', () => {
  console.log("Sono dentro l'elemento");
})

//Il mouse esce dall'elemento
title.addEventListener('mouseleave', () => {
  console.log("Sono uscito dall'elemento");
})

//Al click destro del mouse
title.addEventListener('contextmenu', () => {
  console.log('è stato premuto il tasto destro');
  e.preventDefault(); //Permette cancellare l'elevento che sarebbe partito di default
})