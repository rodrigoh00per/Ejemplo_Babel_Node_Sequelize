import app from "./app";
import "@babel/polyfill";

async function main(){
    await app.listen(process.env.PORT);
    console.log("servidor levantado en el puerto 3000");
}


main();

