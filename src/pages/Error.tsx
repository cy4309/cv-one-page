// import { QuestionCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import BaseButton from "@/components/BaseButton";

const Error: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full min-h-[100dvh] flex flex-col justify-center items-center">
        {/* <div className="text-6xl">
          <QuestionCircleOutlined />
        </div> */}
        <p className="my-4 text-lg">Oops! This page doesn’t exist.</p>
        <BaseButton className="my-4 w-1/2" onClick={() => navigate("/")}>
          Back
        </BaseButton>
      </div>
    </>
  );
};

export default Error;
