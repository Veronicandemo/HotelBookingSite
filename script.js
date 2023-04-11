'use strict'
console.log('Hello world')
const btnNavigationElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header')
btnNavigationElement.addEventListener('click', () => {
    headerElement.classList.toggle('nav-open')
})