import { useContext } from "react";
import PostContentButton from "./PostContentButton";
import UserContext from "../utils/contexts/UserContext";

const PostContent = ({ data }) => {
  const userContextData = useContext(UserContext);
  return (
    <div>
      <div>
        <span>PostContainer</span>
      </div>
      {userContextData.email}
      <PostContentButton />
    </div>
  );
};

export default PostContent;
