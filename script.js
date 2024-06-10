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

        const startDateElement = document.querySelector('.DateTimeContainer-hoIcDq.from .Detail-cBJHIl .DateTime-goLChh');
        const endDateElement = document.querySelector('.DateTimeContainer-hoIcDq.till .Detail-cBJHIl .DateTime-goLChh');
        const messageElement = document.getElementById('message');
    
        const calculateDaysBetween = (start, end) => {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const timeDiff = endDate - startDate;
            return Math.ceil(timeDiff / (1000 * 3600 * 24)); // Calculate difference in days
        };
    
        const updateMessage = () => {
            const startDate = startDateElement.textContent;
            const endDate = endDateElement.textContent;
            const daysBetween = calculateDaysBetween(startDate, endDate);
    
            if (daysBetween > 1) {
                messageElement.textContent = 'The selected period is more than one day.';
            } else {
                messageElement.textContent = '';
            }
        };
    
        if (startDateElement && endDateElement) {
            // Initial message update
            updateMessage();
    
            // Event listeners to update message on date change
            startDateElement.addEventListener('input', updateMessage);
            endDateElement.addEventListener('input', updateMessage);
        } else {
            console.log('Date picker elements not found');
        }    
});

var booqableOptions = {
    company: "f6757dda-e195-43ca-ae5a-772f4b64db0a",
};

//reserveren read date picker
document.addEventListener('DOMContentLoaded', function() {
    
});



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


