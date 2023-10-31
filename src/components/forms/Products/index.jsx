export default function ProductForm({ newProduct, setNewProduct }) {
  return (
    <form className="flex flex-col gap-3">
      <input
        id="title"
        type="text"
        name="title"
        value={newProduct.title}
        onChange={(e) =>
          setNewProduct((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Titulo do Produto"
        className="outline-none py-2 px-3 rounded-x1 bg-white border"
      />
      <input
        id="description"
        type="text"
        name="description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Descricao do Produto"
        className="outline-none py-2 px-3 rounded-x1 bg-white border"
      />
      <input
        id="price"
        type="number"
        name="price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Preco do Produto"
        className="outline-none py-2 px-3 rounded-x1 bg-white border"
      />
      <select
        name="category"
        id="category"
        value={newProduct.category}
        onChange={(e) =>
          setNewProduct((prev) => ({ ...prev, category: e.target.value }))
        }
        className="outline-none py-2 px-3 rounded-xl bg-white border"
      >
        <option value="electronics">Eletronicos</option>
        <option value="jewelery">Joias</option>
        <option value="men's clothing">Roupas Masculinas</option>
        <option value="women's clothing">Roupas Femininas</option>
      </select>
    </form>
  );
}
