export default function Table({ products, handleLimit, deleteFunction }) {
  function handleDelete(id) {
    deleteFunction(id);
  }

  return (
    <div className="px-12 py-5 border rounded-md bg-white shadow">
      <table>
        <thead className="border-b">
          <tr>
            <th className="pb-3 w-1/6 text-center">#</th>
            <th className="pb-3 w-1/6 text-center">Imagem</th>
            <th className="pb-3 w-1/6 text-center">Titulo</th>
            <th className="pb-3 w-1/6 text-center">Categoria</th>
            <th className="pb-3 w-1/6 text-center">Preco</th>
            <th className="pb-3 w-1/6 text-center">Avaliacao</th>
            <th className="pb-3 w-1/6 text-center">Acoes</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td className="text-center py-3">{product.id}</td>
                <td className="flex items-center justify-center py-3">
                  <img
                    className="rounded-full w-24 h-24 object-contain"
                    src={product.image}
                    alt=""
                  />
                </td>
                <td className="text-center py-3">{product.title}</td>
                <td className="text-center py-3">{product.category}</td>
                <td className="text-center py-3">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="text-center py-3">{product.rating.rate}</td>
                <td className="text-center py-3">
                  <button
                    className="border px-3 py-2 bg-red-600 rounded text-white"
                    onClick={() => handleDelete(product.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex w-full items-center justify-end">
        <select onChange={(e) => handleLimit(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}
