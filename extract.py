#!/usr/bin/env python3
import re
import sys

with open('temp.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove Odoo-specific classes and attributes
html = re.sub(r'\s+o_colored_level', '', html)
html = re.sub(r'\s+o_default_snippet_text', '', html)
html = re.sub(r'\s+data-snippet="[^"]*"', '', html)
html = re.sub(r'\s+data-name="[^"]*"', '', html)
html = re.sub(r'\s+data-vcss="[^"]*"', '', html)
html = re.sub(r'\s+o_animate[^"\s]*', '', html)
html = re.sub(r'\s+o_anim_[^"\s]*', '', html)

# Replace image paths
html = re.sub(r'/medical_website/static/src/img/', 'img/', html)
html = re.sub(r'/web/image/website/1/[^"\']*', '', html)

# Find all sections
sections = re.findall(r'<section[^>]*>.*?</section>', html, re.DOTALL)

# Write index.html with our template
with open('index_template.html', 'r', encoding='utf-8') as f:
    template = f.read()

# Replace placeholder with sections
full_sections = '\n'.join(sections)
template = template.replace('<!-- Sections will be inserted here -->', full_sections)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(template)

print(f'Extracted {len(sections)} sections')