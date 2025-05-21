function toggleSidebar(sidebarId, menuIconId) {
    const sidebar = document.getElementById(sidebarId);
    const menuIcon = document.getElementById(menuIconId);
  
    if (sidebar.style.left === '0px') {
      sidebar.style.left = '-250px'; // Hide sidebar
      menuIcon.textContent = '☰'; // Change to hamburger icon
    } else {
      sidebar.style.left = '0px'; // Show sidebar
      menuIcon.textContent = '✖'; // Change to cross icon
    }
  }
  
  // Add event listener to the button
  document.getElementById('menuBtn').addEventListener('click', () => {
    toggleSidebar('sidebar', 'menuIcon');
  });
  