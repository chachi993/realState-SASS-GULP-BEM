const imagenes= document.querySelectorAll('.propiedad__imagen');
const scroll = this.scrollY;
imagenes.forEach((imagen) => {
    imagen.style.backgroundPositionY = `${scroll}px`;
})
window.addEventListener('scroll', () =>{
})