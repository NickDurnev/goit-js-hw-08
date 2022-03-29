function imageBuiltInLazyLoad () {
     const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
}

function imageLazySizesLoad() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.classList.add('lazyload');
}

export { imageBuiltInLazyLoad, imageLazySizesLoad };