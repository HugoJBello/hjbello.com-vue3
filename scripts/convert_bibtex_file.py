import bibtexparser

#pip install --no-cache-dir --force-reinstall git+https://github.com/sciunto-org/python-bibtexparser@main

# open file as filedb in read only mode
library = bibtexparser.parse_file("mypapers.bib")

str_md_en = "## Published papers\n\n"
str_md_es = "## Artículos publicados\n\n"



for entry in library.entries:
    str_md_en = str_md_en + "1. **" + entry["title"] + "**. " + entry["year"] +  " (" + entry.entry_type + ")" + ". "
    str_md_es = str_md_es + "1. **" + entry["title"] + "**. " + entry["year"] +  " (" + entry.entry_type + ")" + ". "

    try:
        str_md_en = str_md_en + "*" + entry["journal"] + "*. "
        str_md_es = str_md_es + "*" + entry["journal"] + "*. "
    except:
        print("not found key")

    str_md_en = str_md_en + entry["author"] +"."
    str_md_es = str_md_es + entry["author"] +"."

    try:
        str_md_en = str_md_en + " [" + entry["url"] + "]" + "(" + entry["url"] + ")" 
        str_md_es = str_md_es + " [" + entry["url"] + "]" + "(" + entry["url"] + ")"  
    except:
        print("not found url")


    str_md_en = str_md_en + "\n\n"
    str_md_es = str_md_es + "\n\n"

str_md_en = str_md_en + "\n\n"
str_md_es = str_md_es + "\n\n"


str_md_en = str_md_en + "## Preprints\n\n"
str_md_es = str_md_es + "## Preprints\n\n"

library = bibtexparser.parse_file("preprints.bib")

for entry in library.entries:
    str_md_en = str_md_en + "1. **" + entry["title"] + "**. " +   entry["year"] + ". "
    str_md_es = str_md_es + "1. **" + entry["title"] + "**. " +   entry["year"] + ". "

    str_md_en = str_md_en + entry["author"]  + "."
    str_md_es = str_md_es + entry["author"]  + "."

    try:
        url = "https://arxiv.org/abs/" + entry["eprint"]
        str_md_en = str_md_en + " [" + url + "]" + "(" + url + ")" 
        str_md_es = str_md_es + " [" + url + "]" + "(" + url + ")"  
    except:
        print("not found url")


    str_md_en = str_md_en + "\n\n"
    str_md_es = str_md_es + "\n\n"


print(str_md_en)


with open('../public/articles/papers.en.md', 'w') as f:
    f.write(str_md_en)

with open('../public/articles/papers.es.md', 'w') as f:
    f.write(str_md_es)