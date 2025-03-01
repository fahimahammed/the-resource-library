document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const file = params.get("file");

    if (file) {
        fetch(`docs/${file}`)
            .then(response => response.text())
            .then(markdown => {
                document.getElementById("content").innerHTML = markdownToHTML(markdown);
            })
            .catch(error => {
                document.getElementById("content").innerHTML = "<p>Error loading content.</p>";
            });
    }
});

function markdownToHTML(markdown) {
    return markdown
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
        .replace(/^\* (.*$)/gm, '<li>$1</li>')
        .replace(/\*\*(.*?)\*\*/gm, '<b>$1</b>')
        .replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>');
}
