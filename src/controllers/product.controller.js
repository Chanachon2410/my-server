exports.get = (req, res) => {
    res.send("get products here");
}

exports.getById = (req, res) => {
    res.send("Product ID: " + req.params.id);
}

exports.create = (req, res) => {
    res.send("Create a product");
}