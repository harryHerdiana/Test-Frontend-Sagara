import Image from "next/image";
import Button from "../ui/button";

function NewsItem(props) {
  const { title, urlToImage, description, url, publishedAt } = props;
  const readableDate = new Date(publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className="flex mb-10 items-center rounded-r-lg bg-blue-100">
      <img src={urlToImage} alt={title} width={400} height={300} className="rounded-l-lg"/>
      <div className="">
        <h1 className="text-lg font-bold mb-2 ml-1">{title}</h1>
        <p className="text-sm ml-1">{description}</p>
        <div className="text-sm ml-1">
          <time>{readableDate}</time>
        </div>
      </div>
      <Button link={url} className="items-baseline">Read more</Button>
    </li>
  );
}
export default NewsItem;
