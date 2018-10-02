# GDM Products

## Requirements

* Node 10+
* Vue CLI 2.9.6+ (Install globally, npm install -g vue-cli)

## Setup

Clone the repository to your computer

```bash
$ git clone git@github.com:abodnar/gdmproducts.git
```
Install Node Packages

```bash
$ npm install
```

Edit prod.env.js in config directory and enter your API_TOKEN.

## Run Locally

```
$ npm run dev
```

Open http://localhost:8080 in your browser

## Serve on website

```
$ npm run build
```

Copy all files in dist directory (index.html and static directory) to your web server. 

By default code expects to be in the root of the web server. 
If not, you will need to update index.js and change the assetsPublicPath(line 53) variable to the sub-directory the code
will be in.   

## Known issues

* After updating a product, it will not automatically update the name or description of the product in the list. Refreshing the page will correct this.
