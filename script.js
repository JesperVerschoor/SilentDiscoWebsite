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
});

var booqableOptions = {
    company: "f6757dda-e195-43ca-ae5a-772f4b64db0a",
};

//FAQ accordion list
document.addEventListener('DOMContentLoaded', function() {
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


