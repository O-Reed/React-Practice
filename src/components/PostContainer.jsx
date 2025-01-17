import { useContext, useState } from "react";
import PostContent from "./PostContent";
import UserContext from "../utils/contexts/UserContext";

const PostContainer = () => {
  const [data, setData] = useState("hello world");
  const userContextData = useContext(UserContext);
  return (
    <div>
      <div>
        <span>Post Containter</span>
      </div>
      <div>{userContextData.displayName}</div>
      <PostContent data={data} />
    </div>
  );
};

export default PostContainer;
