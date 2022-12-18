const path = require("path");
const express = require("express");
const app = express();

app.get('/', (req, resp) => {
	console.log("no address path");
	resp.json({"message": "hi, this page is empty"});
});

const handler = require('./datahandler.js');
handler.handleArtists(app);
handler.handleArtistsbyCountry(app);
handler.handleGalleries(app); 
handler.handleGalleriesbyCountry(app); 
handler.handlePaintings(app); 
handler.handlePaintingsbyId(app); 
handler.handlePaintingsbyColor(app); 
handler.handlePaintingsbyTitle(app); 
handler.handlePaintingsbyYear(app);
handler.handlePaintingsbyArtistid(app);
handler.handlePaintingsbyGalleryid(app);


let port = 8080;
app.listen(port, () => {
	console.log("Server running at port= " + port);
});
  