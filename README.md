![s](doc/head.png)

# Vui Theme Builder

**_Generate Theme Tokens For Your Project Easily_**

<br/>

## Get Started

```bash
npm install vui-theme-builder
```

<br/>

## How To Use

```javascript

import vuiThemeGenerator from "vui-theme-builder''
// or
const vuiThemeGenerator = require("vui-theme-builder")

const tokens = vuiThemeGenerator("#11ff11")

```

<br/>

## Color Scheme

you can use hex, cmyk, hsl or rgb string.

```javascript
// valid examples ✔️
const tokens = vGen("#11ff11");
const tokens2 = vGen("rgb(0,222,111)");
const tokens3 = vGen("rgb(0 ,   222    ,  111  )");
const tokens4 = vGen("cmyk(0%,40%,30%,1%)");
const tokens5 = vGen("cmyk(0,40,3,1)");
const tokens6 = vGen("hsl(123,10%,50%)");
const tokens7 = vGen("hsl(123,30,50)");
```

```javascript
// invalid examples ❌
const tokens = vGen("#  11ff11");
const tokens2 = vGen("rgb(256,256,-1)"); // r,g,b must be in range 0-255
const tokens3 = vGen("cmyk(0%,110%,-1%,111%)"); // all item must be in range 0-100
const tokens5 = vGen("hsl(361,100%,100%)"); // hue must be in range 0-360
const tokens5 = vGen("hsl(222,102%,102%)"); // saturation and lightness must be in range 0-100
```

<br/>

## Lincence

MIT
