import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Pagination from "../components/Pagination";

const PRODUCTS_PER_PAGE = 8;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div className="max-w-screen-lg w-full mx-auto p-2 min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Pagination at the bottom */}
      <div className="mt-auto py-4">
        <div className="flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}