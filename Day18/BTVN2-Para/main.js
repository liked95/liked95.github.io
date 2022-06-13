// Yêu cầu
// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)

const check = word => {
    const hasSpecialChar = word.includes('.') || word.includes(',') || word.includes('?') || word.includes('!')

    let realWordLength = hasSpecialChar ? word.length - 1 : word.length;
    if (realWordLength >= 8) {
        const trimmedWord = hasSpecialChar ? word.slice(0, word.length - 1) : word
        const endChar = hasSpecialChar ? word.slice(word.length - 1) : ""
        word = `<span>${trimmedWord}</span>${endChar}`
    } 

    return word

}
let para = document.querySelector('p')
let splitWords = para.innerText.trim()
    .split(" ")
    .map(check)


para.innerHTML = splitWords.join(" ")
const highlightedWords = document.querySelectorAll('p span')
highlightedWords.forEach(word => {
    word.style.backgroundColor = "yellow"
})

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const fbLink = document.createElement('a')
fbLink.textContent ='facebook'
fbLink.href = "https://www.facebook.com/"
fbLink.style.marginBottom = '15px'
document.body.appendChild(fbLink)



// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const wordCount = document.createElement('div')
document.body.appendChild(wordCount)
wordCount.style.marginTop = '15px'
wordCount.textContent = `Word Count: ${splitWords.length}`



// Thay thế các ký hiệu ? => 🤔, ! => 😲

para.innerHTML = para.innerHTML.replaceAll('?', '🤔')
para.innerHTML = para.innerHTML.replaceAll('!', '😲')

















