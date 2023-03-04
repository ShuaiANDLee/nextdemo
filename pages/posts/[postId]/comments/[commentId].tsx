import { useRouter } from "next/router";

export default function Home() {
    let router = useRouter();
    return <main>
        <div>comment detail</div>
        <div>postId：{router.query.postId}</div>
        <div>commentid：{router.query.commentId}</div>
    </main>;
}