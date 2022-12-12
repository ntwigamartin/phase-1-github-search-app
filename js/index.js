//load dom first
document.addEventListener("DOMContentLoaded",(e)=>{

})


//Global Variables
const div1 = document.querySelector("#main")
const form1 = document.getElementById("github-form")
const input1 = document.getElementById("search")
const input2 = document.getElementById("submit")
const div2 = document.querySelector("#github-container")
const list1 = document.getElementById("user-list")
const list2 = document.getElementById("repos-list")



form1.addEventListener("submit", (e)=>{
    let userName = e.target.search.value
    e.preventDefault()
    form1.reset()

    fetch(`https://api.github.com/search/users?q=${userName}`)
    .then(res=>res.json())
    .then(users=>{
        console.log(users)
        users.items.forEach(item => {
            let li = document.createElement("li")
            li.innerHTML = `${item.login}:<br> <img src='${item.avatar_url}'>:<br> <a href='${item.html_url}'>Profile Link</a><br>`
            list1.appendChild(li)


            fetch(item.repos_url)
            .then(res=>res.json())
            .then(userRepos=>{
                userRepos.forEach(userRepo=>{
                    let li2 = document.createElement("li")
                    li2.innerHTML = `${userRepo.name}<br><br>`
                    li.appendChild(li2)
                })
            })
        });
        
    })
})