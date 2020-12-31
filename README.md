# Vuejs-webpack-multipage
multipage Vue application

# Installation
Download repo and setup on your local machine
```bash
npm install
```

For developement run:
```bash
npm run dev
```
the output will be in dist folder

For production run:
```bash
npm run prod
```
the output will be in dist folder and this must be used for production because tailwindcss development version is very big about 4mb.

For watch any changes in dist folder
```bash
npm run watch
```

For webpack dev server which includes hot reload and this is good for Vue application and only use this for development process
```bash
npm run serve
```


# How this works
Default project uses Tailwindcss framework and fully configured for production and development.
Add vue components to ./src/components folder and index.js is the main js where application starts. 

Put all the images into ./src/assets/images folder. The webpack copywebpackplugin will copy this images to the output directory.

Html pages must be added to ./src folder as index.html and test.html already there.
For example we add ./src/demo.html and we add this line to webpack.config.js:
```bash
...

module.exports = {
    ...
    plugins: [
        ...
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/test.html',
            filename: 'test.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/demo.html',
            filename: 'demo.html'
        }),
    ],
    ...
}
```