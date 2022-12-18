const data = require('./dataprovider.js');

const handleArtists = app => {
    app.get('/artists', (req, resp) => {resp.json(data.getArtists())});
}

const handleArtistsbyCountry = app => {
	app.get('/artists/:country', (req, resp) => {
        const matches = data.getArtists().filter(u => u.Nationality == req.params.country);
        if(matches.length > 0)
        	resp.json(matches);
        else
        	resp.json({"message": "no artists found with given country"});
    });
}

const handleGalleries = app => {
	app.get('/galleries', (req, resp) => {resp.json(data.getGalleries())});
}

const handleGalleriesbyCountry = app => {
	app.get('/galleries/:country', (req, resp) => {
        const matches = data.getGalleries().filter(u => u.GalleryCountry == req.params.country);
        if(matches.length > 0)
        	resp.json(matches);
        else
        	resp.json({"message": "no galleries found"});
    });
}

const handlePaintings = app => {
	app.get('/paintings', (req, resp) => {resp.json(data.getPaintings())});
}

const handlePaintingsbyId = app => {
	app.get('/painting/:id', (req, resp) => {
        const matches = data.getPaintings().filter(u => u.paintingID == req.params.id);
        if(matches.length > 0)
        	resp.json(matches);
        else
        	resp.json({"message": "no painting found with given id"});
    });
}

const handlePaintingsbyColor = app => {//case insensitive
	app.get('/painting/color/:name', (req, resp) => {
		const matches = data.getPaintings().filter(u => (u.details.annotation.dominantColors[0].name.toUpperCase() == req.params.name.toUpperCase()||
														u.details.annotation.dominantColors[1].name.toUpperCase() == req.params.name.toUpperCase()||
														u.details.annotation.dominantColors[2].name.toUpperCase() == req.params.name.toUpperCase()||
														u.details.annotation.dominantColors[3].name.toUpperCase() == req.params.name.toUpperCase()||
														u.details.annotation.dominantColors[4].name.toUpperCase() == req.params.name.toUpperCase()||
														u.details.annotation.dominantColors[5].name.toUpperCase() == req.params.name.toUpperCase()));
		if(matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message": "no painting found with given color"});
	});
}

const handlePaintingsbyTitle = app => {//case insensitive
	app.get('/painting/title/:text', (req, resp) => {
		const matches = data.getPaintings().filter(u => u.title.toUpperCase().includes(req.params.text.toUpperCase()));
		if(matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message": "no painting found with given title"});
	});
}

const handlePaintingsbyYear = app => {//year range
	app.get('/painting/year/:min/:max', (req, resp) => {
		if(req.params.max >= req.params.min){
			const matches = data.getPaintings().filter(u => (u.yearOfWork >= req.params.min && u.yearOfWork <= req.params.max));
			if(matches.length > 0)
				resp.json(matches);
			else
				resp.json({"message": "no paintings found within given range"});
		}else{
			resp.json({"message": "invalid range"});
		}
	});
}

const handlePaintingsbyArtistid = app => {//   /api/painting/artist/id
	app.get('/painting/artist/:id', (req, resp) => {
		const matches = data.getPaintings().filter(u => u.artist.artistID == req.params.id);
		if(matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message": "no painting found with given artist id"});
	});
}

const handlePaintingsbyGalleryid = app => {//   /api/painting/gallery/id
app.get('/painting/gallery/:id', (req, resp) => {
	const matches = data.getPaintings().filter(u => u.gallery.galleryID == req.params.id);
		if(matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message": "no painting found with given gallery id"});
	});
}

module.exports = {
    handleArtists,
	handleArtistsbyCountry,
	handleGalleries, 
	handleGalleriesbyCountry, 
	handlePaintings, 
	handlePaintingsbyId, 
	handlePaintingsbyColor, 
	handlePaintingsbyTitle, 
	handlePaintingsbyYear,
	handlePaintingsbyArtistid,
	handlePaintingsbyGalleryid
};