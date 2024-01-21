
let baseUrl = "https://blog-api-t6u0.onrender.com";


const getPosts = async () => {
    try {
        const res = await fetch(baseUrl + "/posts", {
            method: "GET"
        });
        const data = res.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
};




const addPost = async (form) => {
    try {
        const res = await fetch(baseUrl + "/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        const data = res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};



const update = async (id, form) => {
    try {
        const res = await fetch(baseUrl + "/posts/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
};


const del = async (id) => {
    try {
        const res = await fetch(baseUrl + "/posts/" + id, {
            method: "DELETE"
        });
        const data = res.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
};
