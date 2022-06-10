function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}




document.getElementById("heading").innerHTML = 'Hehehehe'
const paras = document.getElementsByTagName('p')
Array.from(paras).forEach(para => {
    para.style.color = random_rgba()
});


// className
const parasClassName = document.getElementsByClassName('para')
Array.from(parasClassName).forEach(para => {
    para.style.fontSize = '25px'
})

const parasSelector = document.querySelectorAll('p')
Array.from(parasSelector).forEach(para => {
    para.style.fontWeight = '700'
})

const para3 = document.querySelector('.para:last-of-type')
console.log(para3)

const ul2 = document.querySelector('body > ul')
console.log(ul2)






const para1  = document.querySelector('p')
console.log(para1)
document.body.insertBefore(para1, para3)


// link 
const link = document.createElement('a')
link.innerText = 'Google Here'
link.href = "https://www.techiedelight.com/breadth-first-search/"
// document.body.insertBefore(link, ul2)
console.log(link)


// input
const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Enter Name'

const para2 = document.querySelector('.para')
document.body.insertBefore(input, para2)

document.body.insertAdjacentElement("beforeend", link)


// iteration to create and insert elements

let links = [
    {
        link: "https://www.facebook.com/" ,
        title: "Facebook Inc",
    },
    {
        link: "https://www.instagram.com/" ,
        title: "Instagram Inc",
    },
    {
        link: "https://www.twitter.com/" ,
        title: "Twitter Inc",
    },
]

const socialMedia = document.querySelector('.social-media')
// socialMedia.style.display = 'flex'
// socialMedia.style.flexDirection = 'column'

// links.forEach(element => {
//     const link = document.createElement('a')
//     link.href = element.link
//     link.innerText = element.title
//     socialMedia.insertAdjacentElement('beforeend', link)
// })

// links.forEach(ele => {
//     socialMedia.insertAdjacentHTML('beforeend', `<a href=${ele.link}>${ele.title}</a>`)
// })


// let html = ""
// links.forEach(ele => {
//     html +=`<a href=${ele.link}>${ele.title}</a> <br/>`
// })
// socialMedia.innerHTML = html

links.forEach(ele => {
    socialMedia.innerHTML += `<a href=${ele.link}>${ele.title}</a> <br/>`
})




