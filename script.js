const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const clearBtn = document.getElementById('clear-btn');

// Set default markdown text
const defaultMarkdown = `# Welcome to Markdown Previewer!

## Mai to heading hu 

### Ruko abhi aur dekho

Yaha pe aap text **aeseMotaKarSakteHo** or *thodaTedha* or even ***motaAurTedhaDono***!

Koi link rakhna ho to aese rakhneka: [GitHub](https://github.com/ShyamG555)

List banani hai? Lo aese banao:
- Item 1
- Item 2
- Subitem
- Item 3

1. Ordered list
2. Second item
3. Third item

> kux quote krke likhna hai aese likho

\`\`\`javascript
// Code blocks
function helloWorld() {
console.log("Hello, world!");
}
\`\`\`

Inline code: \`console.log('hello')\`
`;

// Initialize editor with default text
editor.value = defaultMarkdown;
preview.innerHTML = marked.parse(defaultMarkdown);

// Update preview in real-time
editor.addEventListener('input', () => {
    preview.innerHTML = marked.parse(editor.value);
});

// Clear button function
clearBtn.addEventListener('click', () => {
    editor.value = '';
    preview.innerHTML = '';
});
