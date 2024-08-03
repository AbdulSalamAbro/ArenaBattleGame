function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the page with the specified pageId
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.style.display = 'block'; // Assuming pages are displayed as blocks by default
    } else {
        console.error(`Page with id '${pageId}' not found.`);
    }
}
