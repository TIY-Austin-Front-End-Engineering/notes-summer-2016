[Table of Contents](/README.md)

# Day 06 - Sass

## Review

## Challenge
Use HTML and CSS (only) to create a dropdown menu that opens on hover. Use the following markup:

```HTML
<ul>
  <li><a href="#">Menu Title</a></li>
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
  <li><a href="#">Item 5</a></li>
</ul>
```

If you finish, try to make sub-levels!

## Notes
### Sass
#### setup
  - "watch" a folder of scss files for changes. Anytime you save changes, the scss will be compiled into a css file.
  - `sass --watch path/to/folder/where/scss/files/are:path/where/css/file/should/live --style compressed`

#### partials
  - link separate `.scss` files in with an `@import` statement
  - "partial" `.scss` files should be named with a preceeding `_` (eg. `styles/_drop-down.scss`)

#### nesting
  - the descendent selector (a ` ` space character) can be replaced with nested rules. example:
  ```scss
    .dropdown-menu {
      a {
        text-decoration: none;
      }
    }
  ```
  the above selects an `a` that is a descendent of the class `dropdown-menu`
  - nesting makes code more legible and helps keep related code together
  - nesting rules compile into plain css, making more specific rules
  - aim to nest no more than 4 levels deep, ever!
  - use the `&` for parent selector (used for pseudo selectors etc)
  ```scss
  .dropdown-menu {
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  ```

#### variables
  - denoted with a `$` eg: `$color-background: #fff;`
  - used to store repeated **values**
  - must be defined before it is used
  - we can now change a value in just ONE place, and those changes will cascade through to any place they are referenced!

#### mixins
  - used to store repeated **rule sets**
  - defined like so:
  ```scss
  @mixin nameOfMixin {
    property: value;
    other-property: otherValue;
  }
  ```
  - used like so:
  ```scss
  body {
    @include nameOfMixin;
  }
  ```
  - mixins can have arguments
    - defined like so:
    ```scss
    @mixin nameOfMixin($someSpecifiedValue) {
      property: value;
      other-property: $someSpecifiedValue;
    }
    ```  
    - used like so:
    ```scss
    body {
      @include nameOfMixin(50px);
    }
    ```

## Resources
- [The Sass Way - Choosing great variable names](http://thesassway.com/beginner/variable-naming)
- [The Sass Way - Nested selectors: the inception rule](http://thesassway.com/beginner/the-inception-rule)
- [The Sass Way - Referencing parent selectors using the ampersand character](http://thesassway.com/intermediate/referencing-parent-selectors-using-ampersand)
- [The Sass Way - Modular CSS naming conventions](http://thesassway.com/advanced/modular-css-naming-conventions)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
