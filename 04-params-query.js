const express = require('express');
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
    res.send("<h1> Home Page </h1> <a href='api/products'>products</a> ")
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    });
    res.json(newProducts)
});


app.get("/api/products/:productID", (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID));

    if (!singleProduct) {
        return res.status(404).send("Product does not exist budy!")
    }
    return res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
});

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { limit, search } = req.query;
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)

        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('We dont have what you looking for! Oh maan! yes so sad I know!')
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)

    // res.send('Hello world');
});



app.listen(5500, () => {
    console.log('Server is listening on port 5500...')
});