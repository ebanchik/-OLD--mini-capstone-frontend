import axios from "axios";
export function Content() {
  []  

const handleIndexProducts = () => {
  console.log("test, test, 123")
  
  axios.get('http://localhost:3000/products.json').then(response => {
      console.log(response.data)
      // setProducts(response.data)
    })
  }
  return (
    <div>
      <p>Hello</p>
      <button onClick={handleIndexProducts}>get the posts from the api</button>
    </div>
  )
}