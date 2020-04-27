const path = require("path");

console.log("theme1 is now ready.");


class DefaultTheme {
    constructor() {
        console.log("I need to be included separately.");
    }
}


export default DefaultTheme;