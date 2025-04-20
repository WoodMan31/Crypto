// middleware.js

// A simple middleware function that logs the request details
function logRequest(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next(); // Call the next middleware function in the chain
 }
 
 function blockSpecialBrand(req, res, next) {
    const brand = req.params.brand; // Express автоматично декодує "Brand%20C" → "Brand C"
    if (brand === 'Brand C') {
        return res.status(403).send('Unavailable Brand'); // Додано return!
    }
    next(); // Якщо бренд не "Brand C", продовжуємо
}
 
 module.exports = { logRequest, blockSpecialBrand };