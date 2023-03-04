import { useRouter } from "next/router";

export default function Home() {
  let router = useRouter();
  console.log(router.query);
  return <main>
    <div>help all params</div>
    <div>params{(router.query.params as string[])?.join('::')}</div>
  </main>;
}