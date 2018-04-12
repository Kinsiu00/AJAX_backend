const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogposts')

app.use(cors());
app.use(morgan('combined'));
app.use(express.json()); //body parser!
app.use(express.urlencoded({extended: true}));

app.use('/blogposts', blogRoutes);


const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('Blog Start')
})

app.listen( PORT, () => {
  console.log(`${PORT} is now active.`)
})
