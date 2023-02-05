
let proyects = [{
  proyecto: '1', name:'E-commerce-Toys', image: '/proyecto-jugueteria.jpg', url:'https://proyectofinalcoderhouseecommerce.netlify.app',
  proyecto: '2', name:'Buscador de Gifs',image: '/proyecto-gif', url:'https://gifsexpertapp888.netlify.app',
  proyecto: '3', name:'Festival de musica',image: '/proyecto-musica', url:'https://proyectomusic.netlify.app',
  proyecto: '4', name:'Juego de Memoria',image: '/proyecto-memo', url:'https://memo-game-app.netlify.app',
  proyecto: '5', name:'Grid Cards',image: '/proyecto-cards', url:'https://tangerine-beignet-bb566d.netlify.app',
  proyecto: '6', name:'Blog de Noticias',image: '/proyecto-noticias', url:'https://blockdenoticias.netlify.app'
}]

export const GFetch = (proyecto) => {
  return new Promise( ( resolve, reject ) => {

    const condition = true
    if(condition) {
      setTimeout(() => {
        resolve(proyects)
      }, 1000)
    }else{
      reject('critical error')
    }
  })
}