// Populates the Image Gallery section with img tags

const gallery = document.getElementById('gallery');
const path = 'images/gallery/';
let galleryOutput = '';

const img = 'IMG_';
const images = [
  '0655',
  '0659',
  '0660',
  '0663',
  '0665',
  '0669',
  '0672',
  '0687',
  '0710',
  '0712',
  '0714',
  '0716'
]
const jpg = '.jpg';

images.forEach((image) => {
  let imgHTML = '<img src="';
  imgHTML += `${path}${img}${image}${jpg}`
  imgHTML += '" alt="Gallery Image">'
  galleryOutput += imgHTML;
});

gallery.innerHTML = galleryOutput;