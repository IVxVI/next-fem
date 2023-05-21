async function getData(params) {
  return `**${JSON.stringify(params)}** `;
}

export default async function BlogPost({ params }) {
  const data = await getData(params);
  return (
    <div>Post {data}</div>
  )
}