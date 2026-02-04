import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove o_default_snippet_text class
content = re.sub(r'class="o_default_snippet_text"', '', content)
content = re.sub(r'class="o_default_snippet_text\s*', '', content)

# Remove other Odoo-specific classes
content = re.sub(r'\s+o_animate[^"\s]*', '', content)
content = re.sub(r'\s+o_anim_[^"\s]*', '', content)
content = re.sub(r'\s+oe_structure', '', content)
content = re.sub(r'\s+oe_empty', '', content)

# Remove data-snippet and data-name attributes
content = re.sub(r'\s+data-snippet="[^"]*"', '', content)
content = re.sub(r'\s+data-name="[^"]*"', '', content)
content = re.sub(r'\s+data-vcss="[^"]*"', '', content)

# Remove empty class attributes
content = re.sub(r'class="\s*"', '', content)
content = re.sub(r'class=\'\s*\'', '', content)

# Remove extra spaces
content = re.sub(r'  +', ' ', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Cleaned HTML')