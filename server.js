const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static('public'));
app.use('/pages', express.static('pages'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'aboutUs', 'aboutUsPage.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'contact', 'contactPage.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'gallery', 'gallery.html'));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});