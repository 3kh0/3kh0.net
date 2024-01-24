// This code will run on every page, if there were more pages...

console.log(
  `%c
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠙⠻⢶⣄⡀⠀⠀⠀⢀⣤⠶⠛⠛⡇⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣇⠀⠀⣙⣿⣦⣤⣴⣿⣁⠀⠀⣸⠇⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣡⣾⣿⣿⣿⣿⣿⣿⣿⣷⣌⠋⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣷⣄⡈⢻⣿⡟⢁⣠⣾⣿⣦⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⠘⣿⠃⣿⣿⣿⣿⡏⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠈⠛⣰⠿⣆⠛⠁⠀⡀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣦⠀⠘⠛⠋⠀⣴⣿⠁⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⣀⣤⣶⣾⣿⣿⣿⣿⡇⠀⠀⠀⢸⣿⣏⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠀⠀⠀⠾⢿⣿⠀⠀⠀⠀⠀⠀
  ⠀⣠⣿⣿⣿⣿⣿⣿⡿⠟⠋⣁⣠⣤⣤⡶⠶⠶⣤⣄⠈⠀⠀⠀⠀⠀⠀
  ⢰⣿⣿⣮⣉⣉⣉⣤⣴⣶⣿⣿⣋⡥⠄⠀⠀⠀⠀⠉⢻⣄⠀⠀⠀⠀⠀
  ⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣋⣁⣤⣀⣀⣤⣤⣤⣤⣄⣿⡄⠀⠀⠀⠀
  ⠀⠙⠿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠋⠉⠁⠀⠀⠀⠀⠈⠛⠃⠀⠀⠀⠀
  ⠀⠀⠀⠀⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      fox gang :D⠀- 3kh0`,
  "color: #fc9505;"
);

// Place headers on pages that don't have them
window.onload = function() {
  /**
   * Header div placement.
   * TODO: Make header work for mobile screens.
   * @type {HTMLElement}
   */
  var headerDiv = document.getElementById('header');
  if (headerDiv) {
    headerDiv.innerHTML = `
    <header class="py-4 px-8 flex justify-between items-center max-w-6xl mx-auto">
    <div>
      <h1 class="text-7xl font-bold text-green-500 text-center py-1">3kh0</h1>
      <p class="text-sm">Programmer, Hacker, Silly fox</p>
    </div>
    <div class="flex">
      <a href="/#projects" class="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition duration-300 flex items-center mr-4"><i class="fas fa-project-diagram mr-2"></i> Projects</a>
      <a href="/#art" class="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition duration-300 flex items-center mr-4"><i class="fas fa-palette mr-2"></i> Art</a>
      <a href="/#connect" class="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition duration-300 flex items-center mr-4"><i class="fas fa-share-alt mr-2"></i> Socials</a>
      <a href="/extra/index.html" class="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition duration-300 flex items-center"><i class="fas fa-star mr-2"></i> Extras</a>
    </div>
  </header>
  
    `;
  }
}