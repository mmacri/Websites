const jsonUrl = 'https://mmacri.github.io/Websites/posts.json'; // Update this URL if needed

// Load and display blog posts
const loadPosts = () => {
    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const postsContainer = document.getElementById("blog-posts");
            postsContainer.innerHTML = "";

            data.forEach((post, index) => {
                const postDiv = document.createElement("div");
                postDiv.className = "blog-post mb-4";
                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <h4>Comments</h4>
                    <ul>
                        ${post.comments.map(comment => `<li>${comment}</li>`).join('')}
                    </ul>
                    <form class="comment-form mt-3">
                        <input type="text" placeholder="Add a comment" class="form-control mb-2" data-index="${index}">
                        <button type="button" class="btn btn-secondary post-comment" data-index="${index}">Comment</button>
                    </form>
                `;
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
};

// Add a new comment to a post
const addComment = (index, comment) => {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(posts => {
            posts[index].comments.push(comment);

            // You cannot directly update JSON files on GitHub Pages
            // For local development or API-based backend, save the updated file here.
            console.log('Updated posts:', posts);
        })
        .catch(error => console.error("Error adding comment:", error));
};

// Add event listener for comment buttons
document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("post-comment")) {
        const index = e.target.getAttribute("data-index");
        const commentInput = document.querySelector(`input[data-index="${index}"]`);
        const comment = commentInput.value.trim();

        if (comment) {
            addComment(index, comment);
            commentInput.value = "";
            loadPosts(); // Refresh posts
        } else {
            alert("Comment cannot be empty.");
        }
    }
});

// Add a new blog post (Admin Only)
const addPost = (title, content) => {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(posts => {
            const newPost = { title, content, comments: [] };
            posts.unshift(newPost);

            // You cannot directly update JSON files on GitHub Pages
            // For local development or API-based backend, save the updated file here.
            console.log('Updated posts:', posts);
        })
        .catch(error => console.error("Error adding post:", error));
};

// Handle the blog form submission
document.getElementById("submit-blog").addEventListener("click", () => {
    const title = document.getElementById("blog-title").value.trim();
    const content = document.getElementById("blog-content").value.trim();
    const passcode = document.getElementById("admin-passcode").value.trim();

    if (passcode !== "14!!pl00t") {
        alert("Incorrect admin passcode.");
        return;
    }

    if (title && content) {
        addPost(title, content);
        document.getElementById("blog-title").value = "";
        document.getElementById("blog-content").value = "";
        document.getElementById("admin-passcode").value = "";
        loadPosts(); // Refresh posts
    } else {
        alert("Title and content cannot be empty.");
    }
});

// Load posts on page load
window.onload = loadPosts;
