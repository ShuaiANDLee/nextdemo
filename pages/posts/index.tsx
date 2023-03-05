import Pagenormal from "./../../components/normal-page";
export default function Home(props: any) {
  return <Pagenormal>
    <div className="posts-content">
      <h1>post List</h1>
      <div>{props.dt}</div>
      <ul className="post-list">
        {
          props.list.map((item: any) => {
            return <li key={item.title}>
              <a href={"/posts/"+item.id}>{item.title}</a></li>;
          })
        }
      </ul>
    </div>
  </Pagenormal>
}

export async function getStaticProps() {
  let dt = new Date().toDateString();
  let res = await fetch('https://dummyjson.com/posts');
  let result = await res.json();
  return {
    props: {
      dt,
      list: result.posts
    }
  }
}