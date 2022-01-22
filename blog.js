let blogPosts = [];

let blogs = document.getElementById("input");

function updateScreen(){
    blogPosts.push(blogs);
    document.getElementById("output").innerHTML = blogPosts[blogPosts.length-1];
}

