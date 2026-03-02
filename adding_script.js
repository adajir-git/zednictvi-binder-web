document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    loadHTML('header.html', 'header_placeholder');
    loadHTML('footer.html', 'footer_placeholder');
});