# Web Analytics Client Library

This library has the basic features of **Google Analytics** library or of any similar web analytics tool.

#### Tracking Code

The following tracking code should be included in each page you want to keep track of user interaction.

```javascript
<script type="text/javascript">
  (function(a,s,i,m,o,v,x){a['LibAnalytics']=o;a[o]=a[o]||function(){
  (a[o].q=a[o].q||[]).push(arguments)},a[o].l=1*new Date();v=s.createElement(i),
  x=s.getElementsByTagName(i)[0];v.async=1;v.src=m;x.parentNode.insertBefore(v,x)})
  (window,document,'script','analytics.js','at');
  at('setAccount', '123456789');
  at('trackPageview');
</script>
```

## Demo

[See a demo here](https://alesmit.github.io/demo/web-analytics-client/index.html)

Open the dev tools to see the `trackPageview` event data. The script tries to send data to http://localhost:3030/collect which should be the webhook endpoint exposed by data-collector service.

Currently the only event is the `trackPageview`, which sends a bunch of information including visited page, client device, platform and browser.
The script generates a GUID for each client storing it in the cookies in order to make it recognize at each page visit keeping track of it and of actions performed by the user.

## Project Setup

This project uses [gulp](http://gulpjs.com/) as its build system. 

- Install gulp: `$ npm install -g gulp`

1. Install dependencies: `$ npm install`
2. Build: `$ gulp build`

## License

[MIT](./LICENSE) © 2017 [alesmit](https://github.com/alesmit)
