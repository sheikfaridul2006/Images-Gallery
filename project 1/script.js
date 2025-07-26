const uploadInput = document.getElementById('imageUpload');
 const gallerydocument.getElementById('gallery');
 const nextBtn = document.getElementById('nextBtn');
 const previousBtn = document.getElementById('previousBtn');
 let uploadedImages = [];
 let currentIndex = 0;
 // Handle image upload
 uploadInput.addEventListener('change', function () {
const filesArrayfrom(this.files);
uploadedImages = files.map(file => URL.createobjectURL(file));

currentIndex = 0;

displayImage();

});

// Show the current image

 function displayImage() {
gallery.innerHTML = '';

if (uploadedImages.length > 0) {

const img = document.createElement('img');
img.srcuploadedImages [currentIndex];

gallery.appendChild(img);

} else {

gallery.innerHTML = '<p>No images uploaded.</p>';

}
// Next button click
nextBtn.addEventListener('click', function ())   {
if (uploadedImages.length > 0) {

currentIndex = (currentIndex + 1) % uploadedImages.length;

displayImage();
}
}
);


// previous button click
previousBtn.addEventListener('click', function ()) {

if (uploadedImages.length > 0) [

}
currentIndex = currentIndex - 15% uploadedImages.length;

displayImage();
]

};