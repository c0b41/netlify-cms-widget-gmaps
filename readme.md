[![NPM](https://img.shields.io/npm/v/netlify-cms-widget-gmaps.svg)](https://www.npmjs.com/package/netlify-cms-widget-gmaps)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/netlify-cms-widget-gmaps.svg)
[![npm](https://img.shields.io/npm/dw/netlify-cms-widget-gmaps.svg)](https://www.npmjs.com/package/netlify-cms-widget-gmaps)

# netlify-cms-widget-gmaps


## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-gmaps
```

```js
import {
  netlifyCmsGMapsControl,
  netlifyCmsGMapsPreview
} from 'netlify-cms-widget-gmaps'

CMS.registerWidget('gmaps', netlifyCmsGMapsControl, netlifyCmsGMapsPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-gmaps@^1.0.0"></script>

<script>
  CMS.registerWidget('gmaps', netlifyCmsGMapsControl, netlifyCmsGMapsPreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
fields:
  - { name: <fieldname>, label: <fieldlabel>, widget: gmaps }
```
