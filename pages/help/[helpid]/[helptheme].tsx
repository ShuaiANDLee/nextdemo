import { useRouter } from "next/router";

export default function Home() {
    let router = useRouter();
    return <main>
        <div>help detail</div>
        <div>helpid {router.query.helpid}</div>
        <div>helptheme {router.query.helptheme}</div>
    </main>;
}