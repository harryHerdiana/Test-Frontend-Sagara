import Link from "next/link";
import { Fragment } from "react";

export default function Copyright() {
  return (
    <Fragment>
      <div className="absolute bottom-4 ">
        <div className="bottom-0 h-10 fixed text-white text-base w-full flex items-center p-px bg-gray-800">
          <h2 className="ml-8">
            {"Copyright © "}
            <Link color="inherit" href="https://jabarcodingcamp.id/">
              JCC Harry Herdiana
            </Link>
          </h2>
        </div>
      </div>
    </Fragment>
  );
}
