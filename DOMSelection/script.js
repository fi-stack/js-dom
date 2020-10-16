// DOM Selection
// document.getElementById() -> element
// js tolong carikan saya element yang idnya <apa> yang ada didalam document

// const judul = document.getElementById('judul')
// judul.style.color = 'red'
// judul.style.backgroundColor = ' #ccc'
// judul.innerHTML = 'Rafi Nur Oktafian'

// document.getElementsByTagName() -> HTMLCollection
// js tolong carikan saya element-element yang nama tagnya <apa>
// const p = document.getElementsByTagName('p')
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue'
// }

// const h1 = document.getElementsByTagName('h1')[0]
// h1.style.fontSize = '50px'

// document.getElementsByClassName() -> HTMLCollections
// const p1 = document.getElementsByClassName('p1')[0]
// p1.innerHTML = 'Ini diubah dari javascript'

// document.querySelector() -> element
// const p4 = document.querySelector('#b p')
// p4.style.color = 'green'
// p4.style.fontSize = '30px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'orange'

// const p = document.querySelector('p')
// p.innerHTML = 'Ini diubah melalui js'

// document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll('p')
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue'
// }

// mengubah noderoot default->document
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
p4.style.backgroundColor = 'orange'