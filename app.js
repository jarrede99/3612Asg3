const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const jsonpath = path.join(__dirname, "data", "galleries.json");
