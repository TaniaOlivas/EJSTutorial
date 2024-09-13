import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

let meetings = [
    { topic: "CIT Monthly Meeting", mandatory: true, dateTime: "September 19th 2024, 2pm - 3pm", location: "Knoy Hall West Lafayette" },
    { topic: "Research In Higher Level Ed", mandatory: false, dateTime: "September 24th 2024, 1pm - 5pm", location: "Beresford Building, Room 2, West Lafayette" },
    { topic: "Curriculum Planning", mandatory: true, dateTime: "October 19th 2024, 4pm - 6pm", location: "IO240, Indianapolis" },
];

app.get('/', (req, res) => {
    res.render('pages/index', { data: meetings, title: "Scheduled Meetings" });
});

app.get("/about", (req, res) => {
    res.render("pages/about", { title: "About Us" });
});

app.get("/contact", (req, res) => {
    res.render("pages/contact", { title: "Contact Us" });
});


app.listen(port, () => {
    console.log(`App listening at port ${port}.`);
});