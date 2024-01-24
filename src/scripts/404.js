// /src/scripts/404.js 
/**
 * This script sets up the HTML content for a 404 error page.
 * Referenced and used at loader.js:66
 */
document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      const startTime = performance.now();
      window.addEventListener("load", function () {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
        const endTime = performance.now();
        const elapsedTime = endTime - startTime;
      });
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 - Page Not Found</title>
  </head>
  <body class="bg-gray-900 text-white">
    <div id="loader" class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white z-50">
      <div class="animate-spin rounded-full h-32 w-32"></div>
    </div>
    <div id="header"></div>
    <div class="h-[60vh] w-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-[128px] font-bold text-red-500 py-8">404</h1>
        <p class="text-3xl">Nothing to see here!</p>
        <p class="mt-4 text-lg">It might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" class="text-lg mt-6 inline-block bg-green-500 hover:bg-green-700 duration-150 text-white py-2 px-4 rounded">Go Home</a>
      </div>
    </div>
    <div id="footer">
      <section class="max-w-6xl mx-auto py-8 px-8">
        <p class="text-center text-m">Made by 3kh0, built using Vite and Tailwind</p>
      </section>
    </div>
    <script defer type="module" src="/src/scripts/index.js"></script>
  </body>
</html>
`;