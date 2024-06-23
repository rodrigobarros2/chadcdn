import { Link } from "react-router-dom";

export function Products() {
  return (
    <>
      <div>
        <button>
          <Link to="/products/1">Product 1</Link>
        </button>

        <br />
        <br />

        <button>
          <Link to="/products/3">Product 2</Link>
        </button>

        <br />
        <br />

        <button>
          <Link to="/products/3">Product 3</Link>
        </button>
      </div>
    </>
  );
}
