import { useState } from "react";
import { Card } from "../../components/Card";
import { Product, list } from "../../models/Product";

export function LandingPage() {
    const [products, setProducts] = useState(list as Product[]);

    return (
        <main
            className="
                ring-1 ring-red-500
                flex
                py-8
                items-start
                justify-center
                h-screen
                overflow-auto
            "
        >
            <Card
                className="bg-slate-200"
                products = {products}
                setProducts={setProducts}
            />
        </main>
    );
}