import Link from "next/link";

Link
const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <p>Sudah punya akun? <Link href={"/auth/login"}>klik disini</Link></p>
        </div>
    )
}

export default RegisterPage;