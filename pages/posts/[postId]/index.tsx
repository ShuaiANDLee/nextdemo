import Pagenormal from "./../../../components/normal-page";

export default function Home(props: any) {
  return <Pagenormal>
    <div className="posts-content">
      <h1>{props.post.title}</h1>
      <div>{props.dt}</div>
      <div>{props.post.body}</div>
    </div>
  </Pagenormal>
}

export async function getStaticPaths() {
  let res = await fetch('https://dummyjson.com/posts');
  let result = await res.json();
  let list: [] = result.posts;
  let paths: any[] = [];
  list.forEach((ele: any) => {
    paths.push({
      params: { postId: ele.id + '' }
    })
  });
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps(props: any) {
  let dt = new Date().toDateString();
  let res = await fetch('https://dummyjson.com/posts/' + props.params.postId);
  let result = await res.json();
  return {
    props: {
      dt,
      post: result
    }
  }
}