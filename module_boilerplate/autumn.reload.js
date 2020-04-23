const {execSync} = require('child_process');
const Autumn = require("autumn-wizard");

let filesToWatch = [
    "./my_module/src/**",
];


const w = new Autumn();
w.watch(filesToWatch, () => {
    console.log("autumn reload");
    execSync('npm run test');


    w.browserReload("http://192.168.1.60:8080/", {
        webRootDir: './',
        // https: {
        //     key: '/usr/local/etc/httpd/ssl/jindemo.key',
        //     cert: '/usr/local/etc/httpd/ssl/jindemo.crt',
        // }
    });

});

