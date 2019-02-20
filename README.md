# labblog

## Description

- api folder

&emsp;&emsp;Mainly reserved for the `axios` module, ready to encapsulate HTTP requests

- assets folder

&emsp;&emsp;Static file storage location, such as .png files

- components folder

&emsp;&emsp;Grassroots components folder

- config folder

&emsp;&emsp;Configuration data and simulation data

- plugins folder

&emsp;&emsp;vue cli-3.0 install plugins

- routers folder

&emsp;&emsp;routers

- store folder

&emsp;&emsp;use vuex to set and change status

- views folder
  - components folder
  - contents folder

&emsp;&emsp;last views

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### 跨域

|                             URL                              | Description                       |             是否允许通信             |
| :----------------------------------------------------------: | --------------------------------- | :----------------------------------: |
|      `http://www.d.com/d.js`<br>`http://www.d.com/w.js`      | 同一域名下                        |                 允许                 |
| `http://www.d.com/lab/a.js`<br>`http://www.d.com//src/b.js`  | 同一域名下不同文件夹              |                 允许                 |
| `http://www.d.com:3333/a.js`<br>`http://www.d.com:4444/b.js` | 同一域名不同端口                  |                不允许                |
|     `http://www.d.com/a.js`<br>`http://46.33.22.44/b.js`     | 域名和域名对应IP                  |                不允许                |
|    `http://www.d.com/a.js`<br>`http://script.d.com/b.js`     | 主域相同，子域不同                |                不允许                |
|        `http://www.d.com/a.js`<br>`http://d.com/w.js`        | 同一域名,不同二级域名<br>（同上） | 不允许(cookie这种情况下也不允许访问) |
|      `http://www.d.com/d.js`<br>`http://www.v.com/w.js`      | 不同域名                          |                不允许                |

js

```javascript
res.header('Access-Control-Allow-Origin','*')
res.header('Access-Control-Allow-Headers','X-Requested-With,Content-Type')
res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
