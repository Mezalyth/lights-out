const pixel = document.querySelectorAll('td');


function toggle(e) {
    console.log('clicked!', this);
    if(this.classList.contains('on')) {
        this.classList.remove('on');
    } else {
    this.classList.add('on');
    }
}   

pixel.forEach(function(pixel) {
    pixel.addEventListener('click', toggle);
});
