import { ListaProdutos } from '../../produtos/listaProdutos/ListaProdutos';
import ModalProdutos from '../../produtos/modalProdutos/ModalProdutos';
import './Home.css';

function Home() {
  return (
    <>
      <div className="bg-green-50 flex justify-center">
        <div className="container grid grid-cols-2 text-gray-800">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-4xl font-semibold text-green-900">
              Bem-vindo à Pharma!
            </h2>
            <p className="text-lg text-gray-700">
              Encontre os melhores produtos para sua saúde.
            </p>

            <div className="flex justify-around gap-4">
              <ModalProdutos />
              <button className="rounded bg-green-600 hover:bg-green-700 text-white py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://as1.ftcdn.net/v2/jpg/00/83/75/36/1000_F_83753610_9HpC3dJZBbxHlYNKrug52QNzy4U4qf6p.jpg"
              alt="HOME"
              className="w-2/3 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <ListaProdutos />
    </>
  );
}

export default Home;
