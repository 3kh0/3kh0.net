// Blog previews

fetch("/json/blog-preview.json")
  .then((response) => response.json())
  .then((data) => {
    const blogPostsContainer = document.querySelector("#blog-container");
    const reversedData = Object.values(data).reverse();
    reversedData.forEach((blogPost) => {
      const blogPostElement = document.createElement("div");
      blogPostElement.classList.add("max-w-2xl", "mx-auto", "bg-gray-700", "rounded-xl", "shadow-lg", "overflow-hidden", "my-4");
      blogPostElement.innerHTML = `
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-white">${blogPost.title}</h3>
        <p class="text-white text-base">${blogPost.description}</p>
        <button data-blog-post-id="${blogPost.id}" class="read-more-link mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-xl hover-bg-blue-600 transition duration-300">Read More</button>
      </div>`;
      blogPostsContainer.appendChild(blogPostElement);
    });
  })
  .catch((error) => console.error(error));


// Blog content

document.addEventListener("DOMContentLoaded", function () {
  const checkForBlogPosts = () => {
    const blogPostsContainer = document.querySelector("#blog-container");
    if (blogPostsContainer.childElementCount > 0) {
      // Blog posts have loaded, add event listeners
      const blogLinks = document.querySelectorAll(".read-more-link");
      blogLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          document.body.classList.add("overflow-hidden");

          const blogPostId = link.getAttribute("data-blog-post-id");
          fetch(`/json/posts/${blogPostId}.json`)
            .then((response) => response.json())
            .then((blogPost) => {
              const blogContentContainer = document.getElementById("blog-content");
              blogContentContainer.innerHTML = `
              <div id="blog-content" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
                <div class="bg-gray-900 p-6 rounded-xl shadow-xl w-fill h-5/6 max-w-4xl relative overflow-y-auto">
                  <h3 class="text-xl font-semibold mb-2 text-white">${blogPost.title}</h3>
                  <div class="text-gray-100 p-3 text-base">
                    ${blogPost.content}
                  </div>
                  <button id="close-blog-popup" class="absolute top-2 right-2 rounded-xl text-white bg-red-500 hover:bg-red-600 transition duration-300 cursor-pointer w-10 h-10 flex items-center justify-center">&times;</button>
                </div>
              </div>`;
              blogContentContainer.style.display = "block";
            })
            .catch((error) => console.error(error));
        });
      });
    } else {
      setTimeout(checkForBlogPosts, 100);
    }
  };

  checkForBlogPosts();
});

document.addEventListener("click", function (event) {
  if (event.target.id === "close-blog-popup") {
    const blogPopup = document.querySelector("#blog-content");
    blogPopup.style.display = "none";

    document.body.classList.remove("overflow-hidden");
  }
});