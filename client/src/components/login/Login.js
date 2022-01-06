import AsideLogin from "./AsideLogin";
import MainLogin from "./MainLogin";

const Message = () => {
  return (
    <div className=" form-container background text-center flex-box">
      <div className="content-box">
        <MainLogin />
        <AsideLogin />
      </div>
    </div>
  );
};

export default Message;
