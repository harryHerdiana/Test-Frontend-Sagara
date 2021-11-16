import Link from "next/link";

function Button(props) {
  if (props.link)
    return (
      <Link href={props.link}>
        <a className="m-2 text-sm rounded p-1 bg-blue-500 no-underline hover:bg-blue-700 border-blue-700 active:bg-blue-700 border-blue-700">{props.children}</a>
      </Link>
    );
  return (
    <button className="no-underline hover:bg-blue-700 border-blue-700 active:bg-blue-700 border-blue-700" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
