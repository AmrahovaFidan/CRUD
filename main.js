let posts = document.querySelector("#posts");
let container = document.querySelector(".container");
let shareBtn = document.querySelector("#shareBtn");
let postInput = document.querySelector("#postInput");
let descriptionInput = document.querySelector("#descriptionInput");
let delBtn = document.querySelector("#delBtn");

let backgroundUrl;
let avatar;
let fullname;


const work = () => {
    fullname = prompt("Ad ve soyadinizi daxil edin: ");
    if (!fullname.trim()) {
        alert("Ad ve Soyadinizi daxil etmediyinize gore sisteme daxil olmur!");
        container.classList.add("active");
        return;
    }
    backgroundUrl = prompt("Arxafon URL daxil edin: ");
    avatar = prompt("Avatar ucun URL daxil edin: ");

    renderPosts();
}

shareBtn.addEventListener("click", async function () {
    try {
        let title = postInput.value;
        let body = descriptionInput.value;

        const yeniData = {
            backgroundUrl,
            avatar,
            fullname,
            title,
            body,
        };

        await addPost(yeniData);

        postInput.value = " ";
        descriptionInput.value = " ";

        renderPosts();
    }
    catch (err) {
        console.log(err);
    }
});

async function renderPosts() {
    try {
        const data = await getPosts();
        console.log("data", data);
        //bu iki kod setri bize datani verir(getPostsdaki datadir!)
        const content = data.reverse().map((post) => {

            return `
            <div class="card">
            <img class="object-fit-cover" width="100%" height="300px" style="margin-bottom: 10px;"
                src="${post.backgroundUrl ? post.backgroundUrl : "https://www.azernews.az/media/2022/08/03/why-startups-are-more-popular-than-ever.jpg"}"
                alt="${post.body}">
            <div class="bottomPart">
                <p id="cardTitle" style="font-weight: 700; font-size: 16px;">${post.title}</p>
                <p id="cardBody" style="font-size: 16px;">${post.body}</p>
                <div class="cardProfil">
                    <img id="profilImg"
                        src="${post.avatar ? post.avatar : "https://www.shareicon.net/data/512x512/2016/02/22/722964_button_512x512.png"}" alt="">
                    <p id="profilName">${post.fullname ? post.fullname : "Anonim"}</p>
                    <button id="delBtn" class="btn btn-danger">Del</button>
                </div>
            </div>
        </div>
            `
        }).join("");

        posts.innerHTML = content;

    }
    catch (err) {
        console.log("Network Error!", err);
    }
}


work();


