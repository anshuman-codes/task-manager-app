import AsideSignUp from "./AsideSignUp";
import MainSignUp from "./MainSignUp";

const Message = () => {
  return (
    <div className=" form-container background text-center flex-box">
      <div className="content-box">
        <AsideSignUp />
        <MainSignUp />
      </div>
    </div>
  );
};

export default Message;
