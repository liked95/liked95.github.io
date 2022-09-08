let users = []

async function getUserName() {
    try {
        let res = await axios.get("https://api.github.com/users")
        console.log(res)
        users = res.data
        render(users)
    } catch (error) {
        console.log(error)
    }
}

getUserName()

const render = arr => {
    $('.pagination-container').pagination({
        dataSource: arr,
        pageSize: 5,
        className: 'paginationjs-theme-blue',
        callback: function (data, pagination) {
            // template method of yourself
            // console.log(pagination)
            renderUser(data, pagination.pageNumber, pagination.pageSize)
        }
    })
}

function renderUser(arr, pageNumber, pageSize) {
    
    if (!arr.length) {
        $("tbody").html(`<p>Không có user</p>`);
        return;
    }
    
    let userTableHtml = ""
    arr.forEach((user, index) => {
        const { id, login, avatar_url, html_url, repos_url } = user
        userTableHtml += `
        <tr>
            <td>${index + 1 + (pageNumber - 1) * pageSize}</td>
            <td>
                <img src=${avatar_url} alt=${login}>
            </td>
            <td>${login}</td>
            <td>${html_url}</td>
            <td>${repos_url}</td>
        </tr>
        `
    });

    $("tbody").html(userTableHtml)
}
// tim kiem khi enter
$("#search-input").keyup((e) => {
    if (e.keyCode == 13) {
        searchByName()
    }
    
    searchByName()

})


// tim kiem khi click btn
$(".search-form button").click(() => {
    searchByName()
})



const searchByName = () => {
    const value = $("#search-input").val()
    // if (!value) {
    //     alert("Nội dung tìm kiếm không được để trống!")
    //     return;
    // }

    let filterUsers = users.filter(user => user.login.toLowerCase().includes(value.toLowerCase()))
    render(filterUsers)

}

