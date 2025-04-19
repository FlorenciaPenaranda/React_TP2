import ProducrtCard from "../components/productCard"
import productsData from "../services/productsData.json";
export default function EcommerceApp() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">My E-commerce App</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {productsData.products.map((producto, index) => (
                <ProducrtCard key={index} producto={producto} />
                ))}
            </div>
        </div>
    );
}