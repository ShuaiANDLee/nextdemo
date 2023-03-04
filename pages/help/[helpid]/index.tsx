import { useRouter } from "next/router";

export default function Home() {
    let router = useRouter();
    return <main>
        <div>help detail</div>
        <div>help {router.query.helpid}</div>
    </main>;
}