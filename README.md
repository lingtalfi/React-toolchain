React toolchain
================
2020-04-23


My toolchains when playing with react.



Intro
------------

I wanted to create a react module and inject it in an existing php app.
That required some boring configuration (aka tool chain).

In this repository, I show this configuration, so I don't have to remember it next time.

Note: this configuration takes care of transpiling Es6, and minimize sass, and bundle the js files defined
in the configuration.



The module boilerplate
=========

The basic idea is that we develop in the **my_module/src** directory, and the toolchain will
 generate the **my_module/dist** directory (and content) for us.


I want to create a react module, and call it from an **index.html** that looks like this:



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Title</title>
    <link rel="stylesheet" href="my_module/dist/main.css">

</head>

<body>

<div id="container"></div>

<script src="my_module/dist/main.bundle.js"></script>
<script src="my_module/dist/theme1.bundle.js"></script>
</body>
</html>
```


So I need to create the following assets:

- my_module/dist/main.css
- my_module/dist/main.bundle.js
- my_module/dist/theme1.bundle.js


I will use mainly [webpack](https://webpack.js.org/) and optionally [autumn](https://github.com/lingtalfi/Autumn) to do so.

Here are my steps (your mileage may vary):

- copy the **module_boilerplate** dir to the web root dir (the **index.html** file is the one shown in the example above)
- run `npm install` to install all dependencies

At this point we're ready. We can do the following:

- npm run test
- npm run build
- npm start


npm run test
-------
This will run webpack in development mode (i.e. source maps, bigger files, good for development).
Just read the **webpack.common.js** to see what it does, but basically it will end up creating a file structure similar to this:


```text
// (module_boilerplate/)
- my_module/
----- dist/
--------- c00ba59deb09260d37a32d1c1d98b5a0.gif      83k
--------- main.bundle.js                            2.5M
--------- main.css                                  622b
--------- theme1.bundle.js                          48k

```

Note: the **main.bundle.js** is very heavy, but when we will use the **npm run build** command, webpack will take care of this.

Note2: there is a gif image, it's because I wanted to test the **file-loader** from webpack, I'm not sure if that's a good idea;
the call is made from **my_module/src/js/components/Form.js**. Just to show that we can do those kind of things if we want.

npm run build
---------
Same as **npm run test**, but the production version. It will optimize the resources, so our filesystem will look like this:

```text
// (module_boilerplate/)
- my_module/
----- dist/
--------- c00ba59deb09260d37a32d1c1d98b5a0.gif      83k
--------- main.bundle.js                            133k
--------- main.css                                  81b
--------- theme1.bundle.js                          5k

```

Much better.


npm start
-------------

As a bonus, if you need the watch/reload browser functionality, you can run this command.
I used autumn, because I had some errors with webpack's dev-server that I didn't understand (and lazy to debug).

To use this, you need:

- to have an http server running first before you can use this command.
    Either use an apache server, or you can throw a quick http-server (npm i http-server), works well too.
- copy the browser's url in the **autumn.reload.js** script (instead of http://192.168.1.60:8080/)

That should be it.




























 


