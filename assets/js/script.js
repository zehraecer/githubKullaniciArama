const searchBtn = document.querySelector(".form");
const kutu = document.querySelector(".kutu")
const light = document.querySelector(".light")
const dark = document.querySelector(".dark")
const body = document.querySelector("body")


dark.addEventListener("click", function () {
    console.log("jrg");
    body.classList.add("darkMode")
    dark.style.display = "none"
    light.style.display = "block"

})

light.addEventListener("click", function () {
    console.log("fkjdv");
    body.classList.remove("darkMode")
    dark.style.display = "block"
    light.style.display = "none"
})


async function getFetch(endpoint) {
    const data = await fetch(`https://api.github.com/users/${endpoint}`)
    const users = await data.json();
    // console.log(users);
    return users;
}


searchBtn.addEventListener("submit", handleSearchForm)

async function handleSearchForm(e) {
    e.preventDefault();
    const searchValue = searchBtn["search"].value
    console.log(searchValue);
    const data = await getFetch(searchValue)
    console.log(data);

    return kutu.innerHTML = `
    <div class="imgKutu">
    <img src="${data.avatar_url}">
 </div>
<div class="kutu1">
    <div class="ilkSatir">
        <h2>${data.name}</h2>
        <h5>${data.created_at}</h5>
    </div>
    <div class="kullaniciAdi">
       <a href="#" id="kullaniciAdi">@${data.login}</a>
    </div>
    <p class="yazi">${data.bio}</p>

    <div class="kutu2">
        <div class="repos">
            <p class="kutu2-repos">Repos</p>
            <h1 class="repos-1">${data.public_repos}</h1>
        </div>
        <div class="repos">
            <p class="kutu2-repos">Followers</p>
            <h1 class="followers">${data.followers}</h1>
        </div>
        <div class="repos">
            <p class="kutu2-repos">Following</p>
            <h1 class="following">${data.following}</h1>
        </div>
    </div>

    <div class="alt">
    <div class="konum">
        <img src="assets/img/003-pin.svg">
        <p class="konumYazisi">${data.location}</p>
    </div>
    <div class="twitter">
        <img src="assets/img/004-twitter.svg">
        <p class="twitterYazisi">${data.twitter_username}</p>
    </div>
    <div class="githubBlog">
        <img src="assets/img/002-url.svg">
        <p class="githubBlogYazisi">${data.html_url}</p>
    </div>
    <div class="github">
        <img src="assets/img/001-office-building.svg">
        <p class="githubYazisi">@github</p>
    </div>
    </div>
</div>
    `


}









