import { useContext } from "react";
import UserContext from "../utils/contexts/UserContext";

const PostContentButton = () => {
  const { id, setUserData } = useContext(UserContext);

  return (
    <div>
      <div>
        <span>PostContentButton</span>
      </div>
      {id}
      <button
        onClick={() => {
          setUserData((currentState) => ({
            ...currentState,
            displayName: "Updated Display Name",
          }));
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default PostContentButton;
