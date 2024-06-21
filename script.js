document.addEventListener("DOMContentLoaded", function () {
    fetch("headerPages.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("headerPages-placeholder").innerHTML = data;
    });

    fetch("navmenu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navmenu-placeholder").innerHTML = data;
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });

    // Code to hide the Naar winkelwagen button on the Booqable shopping cart 
    // popup, because that button has a bug on the Booqable side. It is unclear
    // when this will be resolved by them. Therefore, temporarily hide the button
    // on page load.
    const observer = new MutationObserver(function(mutationsList, observer) {
        mutationsList.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const button = node.querySelector('.bq-button[href*="carts"]');
                        if (button) {
                            button.style.display = 'none';
                        }
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });    
    // end block

    

});

// Booqable integration
var booqableOptions = {
    company: "f6757dda-e195-43ca-ae5a-772f4b64db0a",
};


//menu
/* script.js */
function toggleMenu() {
    const menuItems = document.getElementById('menu-items');
    const menuButton = document.getElementById('menu-button');

    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block';
        // Change button to close button
        menuButton.innerHTML = `
            <img src="resources/svg/close.svg" alt="Close Icon" class="menu-icon">
            <span>sluiten</span>
        `;
    } else {
        menuItems.style.display = 'none';
        // Change button back to menu button
        menuButton.innerHTML = `
            <img src="resources/svg/list.svg" alt="Menu Icon" class="menu-icon">
            <span>menu</span>
        `;
    }
}



//FAQ accordion list
document.addEventListener('DOMContentLoaded', function() {
    //FAQ accordion list
    var accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function(item) {
        var button = item.querySelector('.accordion-button');
        var content = item.querySelector('.accordion-content');

        button.addEventListener('click', function() {
            var isActive = button.classList.contains('active');
            
            // Close all accordion content
            document.querySelectorAll('.accordion-button').forEach(function(btn) {
                btn.classList.remove('active');
                btn.nextElementSibling.style.display = 'none';
            });

            // Toggle the clicked accordion content
            if (!isActive) {
                button.classList.add('active');
                content.style.display = 'block';
            }
        });
    });
});


