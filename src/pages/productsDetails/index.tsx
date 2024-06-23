import { useNavigate, useParams } from "react-router-dom";

export function ProductsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate("/products");
  };

  return (
    <>
      <div>
        <button>
          <h1 onClick={handleProduct}>Products Details {id}</h1>
        </button>
      </div>
    </>
  );
}
