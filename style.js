const faceopen = document.querySelector('.open')
const faceclose = document.querySelector('.closed')

const label = document.querySelector('.write')



faceclose.addEventListener('click', () => {
    if(faceopen.classList.contains('open')){
        faceopen.classList.add('active');
        faceclose.classList.remove('active');
        label.innerHTML = "I am happy"
    }
});

faceopen.addEventListener('click', () => {
    if(faceclose.classList.contains('closed')){
        faceclose.classList.add('active');
        faceopen.classList.remove('active');
        label.innerHTML = "i am sad"
    }
});
