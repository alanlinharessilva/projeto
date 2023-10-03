export default function Table({ products }) {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
