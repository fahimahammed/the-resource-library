import { marked } from 'marked';

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
                console.error(error)
                document.getElementById("content").innerHTML = "<p>Error loading content.</p>";
            });
    }
});

// function markdownToHTML(markdown) {
//     console.log("Markdown Input:", markdown);

//     return markdown
//         // Headers (H1 - H6)
//         .replace(/^###### (.*$)/gm, '<h6>$1</h6>')
//         .replace(/^##### (.*$)/gm, '<h5>$1</h5>')
//         .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
//         .replace(/^### (.*$)/gm, '<h3>$1</h3>')
//         .replace(/^## (.*$)/gm, '<h2>$1</h2>')
//         .replace(/^# (.*$)/gm, '<h1>$1</h1>')

//         // Bold and Italic
//         .replace(/\*\*(.*?)\*\*/gm, '<b>$1</b>')
//         .replace(/\*(.*?)\*/gm, '<i>$1</i>')
//         .replace(/__(.*?)__/gm, '<b>$1</b>')
//         .replace(/_(.*?)_/gm, '<i>$1</i>')

//         // Strikethrough
//         .replace(/~~(.*?)~~/gm, '<del>$1</del>')

//         // Inline code
//         .replace(/`(.*?)`/gm, '<code>$1</code>')

//         // Blockquotes
//         .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')

//         // Ordered List
//         .replace(/^\d+\.\s(.*$)/gm, '<li>$1</li>')
//         .replace(/(<li>.*<\/li>)/gm, '<ol>$1</ol>')

//         // Unordered List
//         .replace(/^\* (.*$)/gm, '<li>$1</li>')
//         .replace(/^- (.*$)/gm, '<li>$1</li>')
//         .replace(/(<li>.*<\/li>)/gm, '<ul>$1</ul>')

//         // Horizontal rule
//         .replace(/^---$/gm, '<hr>')

//         // Links
//         .replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2" target="_blank">$1</a>')

//         // Images
//         .replace(/!\[(.*?)\]\((.*?)\)/gm, '<img src="$2" alt="$1" style="max-width:100%; height:auto;">')

//         // Videos (Custom Syntax: !video[alt text](video_url) )
//         .replace(/!video\[(.*?)\]\((.*?)\)/gm, '<video controls><source src="$2" type="video/mp4">Your browser does not support the video tag.</video>')

//         // Audio (Custom Syntax: !audio[alt text](audio_url) )
//         .replace(/!audio\[(.*?)\]\((.*?)\)/gm, '<audio controls><source src="$2" type="audio/mpeg">Your browser does not support the audio tag.</audio>')

//         // Table (supports GitHub-style tables)
//         .replace(/\|(.+)\|\n\|[-:\s]+\|\n((?:\|.*\|\n)+)/gm, (match, headers, rows) => {
//             console.log("Matched:", match);
//             console.log("Headers:", headers);
//             console.log("Rows:", rows);

//             const ths = headers.split('|').map(header => header.trim()).filter(Boolean)
//                 .map(header => `<th>${header}</th>`).join('');

//             const trs = rows.trim().split('\n').map(row => {
//                 const tds = row.split('|').map(cell => cell.trim()).filter(Boolean)
//                     .map(cell => `<td>${cell}</td>`).join('');
//                 return `<tr>${tds}</tr>`;
//             }).join('');

//             return `<table border="1"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
//         })


//         // Line breaks and paragraphs
//         .replace(/\n$/gm, '<br>')
//         .replace(/(.+)\n/g, '<p>$1</p>');
// }
// import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"

// function markdownToHTML(markdown) {
//     console.log("Marked.js:", typeof marked);

//     console.log("Markdown Input:", markdown);

//     // Convert Markdown to HTML using marked
//     let html = marked(markdown);

//     // Ensure tables have borders for better visibility
//     //html = html.replace(/<table>/g, '<table border="1">');
//     console.log(html)
//     return html;
// }


// or const { marked } = require('marked');

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

