[Table of Contents](/README.md)

# Day 04 - Form Accessibility, Icon fonts, RWD, media queries

## Review
- which tags are self closing?
  - img, input, link, meta, br, hr
  - can't put content inside a self closing tag
  - use atom beautify to align tags if you have messy code
- vocab
  - anatomy of html
    ```html
    <div class="cool-div">What am I?</div>
    ```
  - anatomy of css
    ```css
    div.cool-div {
      background: url('http://www.fillmurray.com/300/300');
    }
    ```
- centering
  - inline centering use `text-align: center;` to the parent
  - block centering set explicit width less than 100%, `margin: 0 auto;`. OR no width set but `margin: 0 someValue;`
- container fit only it's children (not swell to 100%)
  - take it out of flow
    - position: absolute;
      - z-index (works for siblings that are not statically positioned) moves elements in 3d space forward and back
    - float
  - inline-block
- difference between inline/block
- difference between float or inline-block
  - inline-block doesn't take it out of the flow
  - inline-block leaves a small white space between elements
- inheritance
  - almost all properties inherit
  - if you're not sure, look it up on mdn docs
- clearfix
  - overflow hidden vs ::after element
  - prefer ::after element for semantics and device compatibility

## Challenge
Recreate the following using only html and css (the action occurs on click):
![](/Users/tiy/Documents/button.gif)

## Notes
### icon fonts
  - allow us to treat icon images like text (we can apply color, font-size, etc)
  - setup
    - download the zip from fontawesome
    - add the css file to your project folder
    - add the font folder to your project
    - link in the css file in your html
    - profit
  - insert into the page with an `<i>` tag and the appropriate classes.

### form elements and labels
  - the `for` attribute of a label should match the `id` attribute of its corresponding input element
  - all inputs should have a `name` attribute for accessibility purposes
  - labels can be the parent of their inputs, OR can be siblings. Both are used in the real world.

### responsive design
  - style widths with %s
  - apply max-width to prevent ugly large screen layouts
  - allow height to be dictated by content!!!
  - top and bottom (margin, padding) should be defined in ems or rems
  - add this to the head of your html `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - when your page just starts looking awful and no responsive design will fix it, resort to media queries

### media queries
  ```css
  @media media-type and (parameters) {
    selector {
      property: value;
    }
  }
  ```
  - media-type example is 'screen' or 'print' or 'handheld'
  - parameter examples are 'orientation: landscape' or 'max-width: 400px'
  - they should be at the bottom of your css so they overwrite previous rules

## Resources
- [Font Awesome](http://fontawesome.io/)
- [Fontello](http://fontello.com/)
- [Scaling background images](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Scaling_background_images)
- [Responsive Web Design Checklist](http://rwdchecklist.com/)
