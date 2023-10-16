// Runs on home page only

fetch("/json/blog-preview.json")
  .then((response) => response.json())
  .then((data) => {
    const blogPostsContainer = document.querySelector("#blog-container");
    Object.values(data).forEach((blogPost) => {
      const blogPostElement = document.createElement("div");
      blogPostElement.classList.add("max-w-2xl", "mx-auto", "bg-gray-700", "rounded-xl", "shadow-lg", "overflow-hidden", "my-4");
      blogPostElement.innerHTML = `
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-white">${blogPost.title}</h3>
        <p class="text-white text-base">${blogPost.description}</p>
        <a href="${blogPost.link}" class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300">Read More</a>
      </div>
    `;
      blogPostsContainer.appendChild(blogPostElement);
    });
  })
  .catch((error) => console.error(error));
