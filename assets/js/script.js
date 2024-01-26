document.addEventListener("click", function(){
    const userNameInput = document.querySelector(".arama");
    const searchBtn = document.querySelector(".gonder");
    const kullanici = document.querySelector("h2");
    const tarih = document.querySelector("h5");
    const kullaniciAdi = document.querySelector("#kullaniciAdi");
    const bio = document.querySelector(".yazi");
    const repos = document.querySelector(".repos-1");
    const followers = document.querySelector(".followers");
    const following=document.querySelector(".following");
    const konum=document.querySelector(".konumYazisi");
    const twitter = document.querySelector(".twitterYazisi");
    const githubBlog = document.querySelector(".githubBlogYazisi");
    const github = document.querySelector(".githubYazisi")
    const profil=document.querySelector(".imgKutu");


    searchBtn.addEventListener("click",function(){
        const inputUsername = userNameInput.value.trim();

        if(inputUsername !== ""){
           
            fetch(` https://api.github.com/users/${inputUsername}`)
            .then(response => response.json())
            .then(data => {
                tarih.textContent= `Joined ${new Date(data.created_at).toLocaleDateString()}`
                kullanici.textContent= data.name || 'N/A';
                kullaniciAdi.textContent=`@${data.login}`;
                bio.textContent= data.bio || "This profile has no bio";
                repos.textContent= data.public_repos;
                followers.textContent= data.followers;
                following.textContent = data.following;
                konum.textContent=data.location|| "N/A";
                twitter.textContent= data.twitter_username || "Not Avaliable";
                githubBlog.textContent = data.blog || "N/A";
                github.textContent=data.email || "N/A";
                profil.style.backgroundImage = `url(${data.avatar_url})`;
                profil.style.width = '100px';
                profil.style.height = '100px';
                profil.style.backgroundSize = 'cover';

            })
            .catch(error => console.error('Error fetching GitHub user data:', error));
        }
    })


})