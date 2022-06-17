// Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
const jobContainer = document.querySelector(".job-card")
const firstCard = document.querySelector(".job-card-inner")

for (let i = 0; i < 3; i++) {
    let card = firstCard.cloneNode(true)
    jobContainer.append(card)
}
// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
const jobTitles = ["Software Engineer", "JavaScript Developer","Java Developer","Python Developer"]
const jobLists = document.querySelectorAll(".job-card-inner");
jobLists.forEach((job, index) => {
    const title = job.querySelector('h3')
    title.textContent = jobTitles[index]
})
// Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
document.querySelector("#jobs-listed span").textContent = jobLists.length
// Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi

const search = document.getElementById("search");
search.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        
        for (let job of jobLists) {
            const title = job.querySelector('h3')
            console.log(title)
            if (!title.textContent.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
                job.classList.add("hidden")
            } else {
                job.classList.remove("hidden")
            }
        }
    }
})


// Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc

const showAllBtn = document.getElementById("show-all")
showAllBtn.addEventListener("click", ()=> {
    jobLists.forEach( job => {
        job.classList.remove("hidden")
    })
})