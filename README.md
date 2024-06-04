# hunter
JavaScript library for hunter.io
# main
```js
const {hunter} = require('./hunter');

const email = new hunter();
email.domain_info("fffccg@niga.com").then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
