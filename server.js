const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/products/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const products = router.db.get('products').value();
  const results = products.filter(product =>
    Object.values(product).some(value =>
      value.toString().toLowerCase().includes(query)
    )
  );
  res.json(results);
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
