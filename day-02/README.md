[Table of Contents](/README.md)

# Day 02 - Git Basics, CSS layout

## Review
- css colors
  - prefer hex values over names (`#fff` or `#ffffff`)
- screen sizing
  - while writing css, modifiy the size of your browser window to ensure that your styles work across different windows. Use % instead of px whenever possible to make layouts more fluid.
- linking within a document
  - use the `id` attribute to create linkable anchors on a page.
  - use the `a` tag and set the `href` attribute to the id to force the browser to scroll to the id'd element.
- adding multiple classes to an element, multiple attributes to one element
  - any element can have multiple attributes, but should only have ONE of any particular type of attribute
  - attributes should be in the opening tag of an element
  - multiple classes for a given element should be space delminted. the following div has 2 classes: `<div class="hero company-splash">`
- Paths
  - absolute: includes protocol, such as http:// or file://
  - root relative: denoted with a preceeding slash, always adds path to the root of the current domain, either the root of your computer, OR the web domain such as `http://google.com`
  - relative: takes into account the exact current location (not just the root of the current location) and will tack your path onto current location.

## Challenge
### QUIZ (ACK!)
1. What is the most specific selector?
  1. p > div
  2. div.container
  3. .container .child
  4. section#popup
1. What html tag is used for including links to a page?
1. What command in the terminal will create a new file?
1. What color will the paragraphs with the "feature" class be?
```css
    p {
      color: pink;
    }
    p.feature {
      color: blue;
    }
    .feature p {
      color: green;
    }
    p > .feature {
      color: red;
    }
```


## Notes
### Git
- version control software
- creating a new repository, which represents the code and code history of an entire project
  - `git init` creates a new empty repository in the current directory ON YOUR LOCAL MACHINE
  - create a matching repository in Github using their GUI.
  - follow the instructions on the new repo, or use these commands to link your local version to the github remote version:
    - `git remote add origin <https path to your remote repo>`
    - `git push origin master -u`
- basic flow:
  - make changes, create files, write code, etc
  - `git status` prints out changes that are or are not being tracked by git. use this to confirm you did what you think you did.
  - `git add .` add all files in the current directory to git for tracking
  - `git commit -m <your message here>` commit all the changes to memory in git.
  - `git push origin master`

### Block vs Inline elements
  - css display property: block, inline, inline-block
  - block
    - proud parents
    - contain children
    - swell to the size of their container
    - have no height by default
    - don't like to be next to anyone
    - respect your height, width, margin properties
  - inline
    - bratty teenagers
    - don't respect height, width, margin top or bottom
    - like being close to others
    - default only as wide as their Contents
    - have no height by default

### Box model
  - content - modified by height and width properties, the inner most box of the box model
  - padding - the space between border and content, has the background color of the element itself
  - border - the border of an element, short hand property with style, size, color. you can also alter border-radius.
  - margin - the space outside an elements border that other elements may not touch. pushes an element away from siblings or parents.
  - box-sizing: property that determines what height and width properties are modifying. defaults to content-box, but is usually preferable to reassign to border-box

### Css centering
  - block
    - set an explicit width less than 100%
    - add `margin: 0 auto;`
    - profit
    - element will be centered within the parent
  - inline
    - apply to the parent elements
    - `text-align: center;`
    - element will be centered WITHIN the parent

### Css layout
  - `display: inline-block;`
    - use when you don't care about a little white space between elements
    - gives the best of both worlds!
  - `float: <left or right>`
    - moves the applied element OUT OF FLOW OF page
    - element now allows other elements to touch it
    - will move itself up and to the <left or right> as far as possible while still respecting other elements KNOWN widths and heights
    - parents of floated children DON'T KNOW where their children are!
      - to fix this use the clearfix hack:
      ```css
      main::after {
        display: block;
        content: 'hi';
        clear: both;
      }
      ```

## Resources
- [Collapsing Margins](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
