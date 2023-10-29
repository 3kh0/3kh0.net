document.querySelector('#intro').innerHTML = `
<div class="max-w-6xl mx-auto py-8 px-8">
  <div class="flex sm:flex-col md:flex-row items-center">
    <div class="w-1/2 py-6">
      <p class="text-3xl sm:text-base md:text-2xl lg:text-3xl xl:text-4xl text-center align-middle leading-8">
        Hi, my name is Drake! I coded a few minor things. I play video games and hack in my free time.
      </p>
    </div>
    <div class="w-1/3 mx-10 flex items-center justify-center">
      <div>
        <img loading="eager" src="/img/art/cutout2echo.webp" alt="fox" class="w-full h-auto rounded-3xl" />
      </div>
    </div>
  </div>
</div>
`;

// document.querySelector('#intro').innerHTML = `
// <p>hi</p>
// `;


document.querySelector('#projects').innerHTML = `
<section class="max-w-6xl mx-auto py-8 px-8">
  <h2 class="text-3xl mb-4">Cool stuff I made</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/website-v4/">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">3kh0 website</h3>
        <p class="text-sm">Vastly popular website with games</p>
      </div>
    </a>
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/ChessSword">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">Chess Sword</h3>
        <p class="text-sm">Chess bot to highlight the best moves</p>
      </div>
    </a>
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/3kh0-Assets">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">3kh0 Assets</h3>
        <p class="text-sm">Tons of game files for free use</p>
      </div>
    </a>
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/soundboard">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">Soundboard</h3>
        <p class="text-sm">Simple online soundboard app</p>
      </div>
    </a>
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/gamejamsnake">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">Arcade Snake</h3>
        <p class="text-sm">Simple version of snake for the web</p>
      </div>
    </a>
    <a referrerpolicy="no-referrer" href="https://github.com/3kh0/echodown">
      <div class="bg-gray-700 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
        <h3 class="text-xl font-semibold mb-2">Echo Down</h3>
        <p class="text-sm">A fake DDoS/Network stresser</p>
      </div>
    </a>
  </div>
</section>
`;

document.querySelector('#contact').innerHTML = `
<section class="max-w-6xl mx-auto py-8 px-8">
  <h2 class="text-3xl mb-4">Contact Me</h2>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <a href="mailto:echo-the-coder@tuta.io">
        <button class="bg-green-500 text-white shadow-lg py-2 px-4 rounded-xl hover:bg-green-600 transition duration-300 w-full">Email</button>
      </a>
    </div>
    <div>
      <a referrerpolicy="no-referrer" href="https://discord.com/users/1056383394470182922">
        <button class="bg-blue-600 text-white shadow-lg py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300 w-full">Discord</button>
      </a>
    </div>
    <div>
      <a rel="me" href="https://defcon.social/@3kh0">
        <button class="bg-purple-500 text-white shadow-lg py-2 px-4 rounded-xl hover:bg-purple-600 transition duration-300 w-full">Mastodon</button>
      </a>
    </div>
  </div>
</section>
`;

document.querySelector('#footer').innerHTML = `
<section class="max-w-6xl mx-auto py-8 px-8">
  <p class="text-center text-m">Made by 3kh0, built using Vite and Tailwind</p>
</section>
`;