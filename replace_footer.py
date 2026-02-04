import re

# Read footer
with open('footer.html', 'r', encoding='utf-8') as f:
    footer = f.read()

# Clean footer
footer = re.sub(r'\s+o_colored_level', '', footer)
footer = re.sub(r'\s+o_default_snippet_text', '', footer)

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace footer placeholder
if '<!-- Footer will be inserted here -->' in content:
    content = content.replace('<!-- Footer will be inserted here -->', footer)
else:
    # Find footer tag and replace its content
    pattern = r'<footer id="footer"[^>]*>.*?</footer>'
    content = re.sub(pattern, footer, content, flags=re.DOTALL)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Footer replaced')