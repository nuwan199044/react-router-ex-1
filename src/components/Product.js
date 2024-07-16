import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Product" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Product;
