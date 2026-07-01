## BEM style for React / SolidJS

[BEM online manual](https://en.bem.info/methodology/naming-convention/#react-style)

### Template:

```
BlockName-ElementName_modifierName_modifierValue
```

<div style="padding: 0 4rem;">

### Example

```html
<!-- The `SearchForm` BlockName has modifierName `theme` with modifierValue `islands` -->
<form class="SearchForm SearchForm_theme_islands">
    <input class="SearchForm-Input" />

    <!-- The `Button` ElementName has modifierName `size` with modifierValue `m` -->
    <button class="SearchForm-Button SearchForm-Button_size_m">Search</button>
</form>
```

**observe:** Names of blocks and elements begin with an Uppercase Letter.
Names of modifiers begin with a lowercase letter.

**note:** avoid using a double hyphen to separate the Modifier from the
Element, as it might cause an error when referenced inside a comment (--)
during validation of a HTML document - particularly in React app.

</div>

## Ordering Styling Properties

SPATIA

Acronym for six property categories or “property spaces”, ordered from structural to behavioral:

```
 SPATIA = · Size · Position · Appearance · Text · Interaction · Animation ·**
```

Pronounced “spa-tia” like the Latin word for “spaces”, it’s short enough to say out loud and logical enough to reconstruct from first principles.

<div style="padding: 0 4rem;">

### (S) Size

```css
width: 40px;
height: 40px;
min-width: 0;
max-height: 100%;
border: 1px solid #ccc;
border-radius: 4px;
margin: 0 auto;
align-items: center;
box-sizing: border-box;
display: flex;
gap: 8px;
justify-content: space-between;
overflow: hidden;
padding: 8px 16px;
```

### (P) Position

```css
bottom: 0;
clear: both;
float: left;
left: 0;
position: fixed;
top: 0;
z-index: 100;
```

### (A) Appearance

```css
background: rgba(0, 0, 0, 0.15);
background-color: #fff;
background-image: url('texture.png');
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
filter: blur(4px);
opacity: 0.8;
visibility: hidden;
```

### (T) Text

```css
color: rgba(0, 0, 0, 0.5);
font-family: monospace;
font-size: 14px;
font-style: italic;
font-weight: bold;
letter-spacing: 0.02em;
line-height: 1.5;
text-align: center;
text-decoration: underline;
text-transform: uppercase;
white-space: nowrap;
```

### (I) Interactions

```css
cursor: pointer;
pointer-events: none;
resize: both;
scroll-behavior: smooth;
touch-action: pan-y;
user-select: none;
```

### (A) Animation

```css
animation: fadeIn 0.3s ease;
transform: translate(-50%, -50%);
transition: opacity 0.2s ease-out;
will-change: transform;
```
</div>  

### Example

Tooltip cursor element styled following SPATIA protocol:

```css
.tooltip {
  width: 2.5rem; /* Size */
  height: 2.5rem;
  border-radius: 50%;
  align-items: center;
  display: none;

  position: fixed; /* Position */
  z-index: 1000;

  background: rgba(0, 0, 0, 0.15); /* Appearance */
  opacity: 1;

  color: rgba(0, 0, 0, 0.5); /* Text */
  font-size: 10px;
  font-family: monospace;
  font-weight: bold;

  pointer-events: none; /* Interaction */

  transform: translate(-50%, -50%); /* Animation */
  transition: opacity 0.2s ease-out;
}
```

### Edge Case Decisions

A few properties that don’t fit neatly into one category:

**overflow → Size**, controls how the container handles its own dimensions  

**isolation → Appearance**, affects stacking context and compositing  

**content (for ::before / ::after) → Text**, defines textual or generated content  
**counter-reset / counter-increment → Text**, relates to generated text content  

**will-change → Animation**, hint for upcoming transitions  

---
