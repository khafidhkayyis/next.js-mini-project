import { useRouter } from "next/router";
const DetailProductPage = () => {
    const { query } = useRouter();  // Query Adalah parameter dari userouter 

    return (
        <div>
            <h1>Detail Product</h1>
            <p>Product : {query.product} </p> {/* text id mengikuti nama file yang didalam kurung [] */}
        </div>
    )
}

export default DetailProductPage;