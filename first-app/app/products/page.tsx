import Link from "next/link";
import CurrentFilter from "./CurrentFilter";
import { Suspense } from "react";


interface ProductsPageProps {
    searchParams: {
        category?: string;
        sort?: string;
    }
}

export const instant = false;

const products = [
    {id: 1, name: "React Course", category: "react"},
    {id: 2, name: "Node Course", category: "node"},
]


//server component
export default async function ProductsPage({searchParams} : ProductsPageProps){
    const {category, sort} = await searchParams;

    let filtered = products;

    if(category) {
        filtered = filtered.filter(product => product.category === category);
    }

    if (sort === "asc"){
        filtered = [...filtered].sort((a,b) => a.name.localeCompare(b.name));
    }

    return(
        <div>
            <div>Product page</div>

            <div style={{display:"flex", gap:12}}>
                <Link href="/products">All</Link>
                <Link href="/products?category=react">React</Link>
                <Link href="/products?category=node">Node</Link>
                <Link href="/products?sort=asc">Sort Ascending</Link>
            </div>

            <p>
                Current Filter: <b>
                    {category || "All"} | 
                Sort: {" "} <b>
                    {sort || "Default"}
                </b>
                </b>
            </p>

            <ul>
                {filtered.map(product => (
                    <li key={product.id}>{product.name} - {product.category}</li>
                ))}
            </ul>


            <Suspense fallback={<p>Loading filter...</p>}>
                <CurrentFilter />
            </Suspense>
        </div>
    )
}