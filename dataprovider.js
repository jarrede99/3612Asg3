const path = require("path");
const fs = require("fs");
const _ = require("lodash"); 



const jpath1 = path.join(__dirname, "data", "galleries.json");
const jpath2 = path.join(__dirname, "data", "artists.json");
const jpath3 = path.join(__dirname, "data", "paintings-nested.json");

let paintings;
let galleries;
let artists;

fs.readFile(jpath1, (err, data)=>{
	if(err){
		console.log("could not read galleries.json");
	}
	else{
		galleries = JSON.parse(data);
	}
});

fs.readFile(jpath2, (err, data)=>{
	if(err){
		console.log("could not read artists.json");
	}
	else{
		artists = JSON.parse(data);
	}
});

fs.readFile(jpath3, (err, data)=>{
	if(err){
		console.log("could not read paintings-nested.json");
	}
	else{
		paintings = JSON.parse(data);
	}
});

function getPaintings(){
	return _.clone(paintings);
}
function getGalleries(){
	return _.clone(galleries);
}
function getArtists(){
	return _.clone(artists);
}


module.exports = {
	getPaintings,
	getArtists,
	getGalleries
};