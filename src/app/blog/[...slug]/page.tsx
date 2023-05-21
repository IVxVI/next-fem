import Button from "@component/app/components/button/Button";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function getData(params: any) {
  await delay(5000);
  return `**${JSON.stringify(params)}** `;
}

export default async function BlogPost({ params }: {params : any}) {
  const {slug} = params;

  const data = await getData(params);
  return (
    <>
      <div>Post {data}</div>
      <Button />
    </>
  )
}