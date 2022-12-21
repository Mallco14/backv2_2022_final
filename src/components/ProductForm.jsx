import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/productsApi";

const ProductForm = () => {
  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
     
      
      queryClient.invalidateQueries("products");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addProductMutation.mutate({
      ...product,
      inStock: true,
    })
  };

  return (
    <div className="text-center">
        <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre :</label><br></br>
      <input type="text" name="nombre" id="nombre" />
      <th></th>
      <label htmlFor="description">Cantidad:</label><br></br>
      <input type="number" name="cantidad" id="cantidad" />
      <th></th>
      <label htmlFor="price">Precio</label>
      <br></br>
      <input type="number" name="precio" id="precio" />
      <br></br>
      <label htmlFor="price">Distribuidor</label>
      <br></br>
      <input type="text" name="distribuidor" id="distribuidor" />
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
    
  );
};

export default ProductForm;
