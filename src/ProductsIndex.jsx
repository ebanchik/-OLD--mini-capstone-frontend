export function ProductsIndex(props) {
  console.log(props.products);
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} />
          <p>{product.body}</p>
        </div>
      ))}
    </div>
  );
}
