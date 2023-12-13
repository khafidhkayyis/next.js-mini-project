import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
    const [IsLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
        if (!IsLogin) {
            push("/auth/login");
        }
    }, []);
    return (
        <div>
            <h1>Product Page</h1>
        </div>
    )
}

export default ProductPage;
