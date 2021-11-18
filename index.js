const express = require('express');
const app = express();
const ImageKIt = require('imagekit');
const port = 3001;

// SDK ImageKit initialization
const imageKit = new ImageKIt({
    publicKey: "public_lGafPttRIS/xR8KMgg+uSkT1IGw=",
    privateKey: "private_Z9z+wOT9pWqE4d85zgkFHLnPV/k=",
    urlEndpoint : "https://ik.imagekit.io/0lswtnkkmck"
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log('Servidor funcionando!!')
})