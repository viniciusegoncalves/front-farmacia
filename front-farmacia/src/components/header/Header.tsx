import { Navbar } from '../navbar/Navbar';

export function Header() {
  return (
    <header className="w-full bg-green-50 border-b border-green-200">
      <div className="max-w-7xl flex items-center justify-between p-4 mx-auto">
        <img
          className="w-20 object-cover rounded-full border-4 border-green-300 shadow-md"
          src="https://png.pngtree.com/png-vector/20221021/ourmid/pngtree-pharmacy-vector-logo-set-against-green-backdrop-assistance-icons-abstract-vector-png-image_20267346.jpg"
          alt="logo"
        />
        <Navbar />
      </div>
    </header>
  );
}
