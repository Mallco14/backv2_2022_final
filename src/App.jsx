import ProductForm from './components/ProductForm';
import Products from './components/Products';

const App = () => {
  return <>
    <ProductForm className="border"/>
    <br></br>
    <div className='text-center'>
    <table className="table border">
    <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Distribuidor</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  </table>
  
    </div>
    
    <Products />
    
  </>;
}

export default App
