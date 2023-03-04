export default function Home(props: any) {
  return <main>
    <h1>post List</h1>
    <div>{props.dt}</div>
    <ul>
      {
        props.list.map((item:any) => {
          return <li key={item.title}>{item.title}</li>;
        })
      }
    </ul>
  </main>;
  // const [dt, setDt] = useState('');
  // const [data, setData] = useState<any[]>([]);

  // const fetchData = () => {
  //   fetch('https://dummyjson.com/posts')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((reply) => {
  //       console.log(reply);
  //       setData(reply.posts);
  //       setDt(new Date().toString())
  //     })
  // }

  // useEffect(() => {
  //   fetchData();
   // }, []);

  // return <main>
  //   <h1>post List</h1>
  //   <div>{dt}</div>
  //   <ul>
  //     {data.map((item => {
  //       return <li key={item.title}>{item.title}</li>;
  //     }))}
  //   </ul>
  // </main>;
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