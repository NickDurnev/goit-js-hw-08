// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { imageBuiltInLazyLoad, imageLazySizesLoad } from './lazy-load';

const galleryEl = document.querySelector('.gallery');
const galleryItemMarkUp = createGalleryItemMarkUp(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemMarkUp);

galleryEl.addEventListener('click', createLigthBoxGallery);


function createGalleryItemMarkUp(galleryItems) {
        return galleryItems.map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}">
            <img loading="lazy" class="gallery__image" data-src="${preview}" alt="${description}"/>
        </a>
        `})
            .join('');
};

function createLigthBoxGallery(e) {
        e.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: '250'})
}

 if ('loading' in HTMLImageElement.prototype) {
     imageBuiltInLazyLoad();
  } else {
     imageLazySizesLoad();
 }

console.log(galleryItems);
