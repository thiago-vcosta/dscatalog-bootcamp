import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <Link to="/admin/products" className="mr-5">
        Listar Produtos
      </Link>
      <Link to="/admin/products/create" className="mr-5">
        Criar Produto
      </Link>
      <Link to="/admin/products/10" className="mr-5">
        Editar Produto
      </Link>
      <Switch>
        <Route path="/admin/products" exact>
          <h1>exibir a listagem de produtos</h1>
        </Route>
        <Route path="/admin/products/create">
          <h1>criar novo produto</h1>
        </Route>
        <Route path="/admin/products/:productId">
          <h1>editar um produto</h1>
        </Route>
      </Switch>
    </div>

  );
}

export default Products;