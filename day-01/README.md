[Table of Contents](/README.md)

# Day 01 - Course Introductions, Command Line, HTML, CSS

## Challenge
5 mins to write as many HTML tags as you can think of

## Notes
### Command Line
- pwd - print working directory
- ls - list files in current directory
- cd - change directory
- .. - up one level in the directory trees
- mkdir - make directory
- touch - make files
- rm - remove a file
- clear - clears the bash output
- mv - moves a file, also used for renaming
- cp - copies a file
- . - current directory
- tree - print a tree from current directory down
- rmdir - remove directory (or you can rm -r, recursively remove)

### HTML
- Your browser will read anything you give it and interpret it as text content.
- anything inside of `<>` will be interpreted as a tag
- use semantic tags for yourself, other developers, your browser, and accessibility tools

#### anatomy of an html tag:
```html
<tagname attributeName="value"></closingtag>
<selfClosingTag />
<!-- comment Write a bunch of stuff here-->
```

#### required html structure:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>The title of your page</title>
  </head>
  <body>

  </body>
</html>
```

### CSS
- Cascading Style Sheets
- rules "cascade" down the html tree
- the style of your html page
- link into html with a link tag:
```html
<link rel="stylesheet" href="main.css" media="screen"/>
```

#### anatomy of a css ruleset:
```css
selector {
  property: value
}
```

#### css selectors
- tagname
- classes (.className)
- id (#idName)
- ` ` space character selects any descendent
- `>` right angle bracket selects only direct descendants
- `tagName.className` selects elements with BOTH tag and class match

#### css specificity
- rules are applied in order (top to bottom)
- competing rules follow specificity rules to decide who wins
- from least to most specific: tagname, classname, id
- the more selectors the more specific. A rule with two classnames trumps a rule with one. BUT a two tagnames rule is still less specific than one classname.

### Surge
- we use surge to host our websites easily. You have already installed the tool and can use it from your terminal
- use surge from a directory containing an index.html file. this file will be the entry point for your website.
- the command is `surge`. that's all! you can optionally type a path if you ran the command in a different location from where your index.html file lives
- you can optionally change the path you wish to host and also the sub-domain of the surge site you are creating. press enter until you've made it through all these prompts.
- You should submit your surge site's link for your homework assignments - TEST THEM TO MAKE SURE THEY WORK **before** you submit them to me!

## Resources
- [HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS resources](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
