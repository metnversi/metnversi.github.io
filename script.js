window.onload = function() {
    var tabs = document.querySelectorAll('nav a');
    var tabPanels = document.querySelectorAll('.tab-panel');

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            // Hide all tab panels
            tabPanels.forEach(function(panel) {
                panel.style.display = 'none';
            });

            // Show the clicked tab's panel
            tabPanels[index].style.display = 'block';
        });
    });
};