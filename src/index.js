import app from "./app";
import "@babel/polyfill";

async function main(){
    await app.listen();
    console.log("servidor levantado en el puerto 3000");
}


main();

