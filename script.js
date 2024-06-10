document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
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


//reserveren information icon


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


