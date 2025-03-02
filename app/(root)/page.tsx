// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";

// sfc -> arrow function snippet
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  // await delay(1000);
  return <>
    <ProductList data={latestProducts} title={"Newest Arrivals"} limit={4}/>
  </>; 
}
 
export default Homepage;