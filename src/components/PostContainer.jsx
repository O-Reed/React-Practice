import { useState } from "react";
import PostContent from "./PostContent";

const PostContainer = () => {
  const [data, setData] = useState("hello world");
  return (
    <div>
      <PostContent data={data} />
    </div>
  );
};

export default PostContainer;
