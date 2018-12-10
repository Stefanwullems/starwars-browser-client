import * as React from "react";

import { Link } from "react-router-dom";
import * as request from "superagent";

export default async function(
  model: Models,
  url: string,
  forceUpdateApp: () => void
) {
  const res = await request.get(url);
  const arr = url.split("/");
  const id = arr[arr.length - 2];
  console.log(arr);

  return (
    <Link
      to={`/${model}/${id}`}
      onClick={() => {
        forceUpdateApp();
      }}
    >
      {res.body.name}
    </Link>
  );
}
