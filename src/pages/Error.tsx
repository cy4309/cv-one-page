// import { QuestionCircleOutlined } from "@ant-design/icons";

const Error: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-[100dvh] flex flex-col justify-center items-center">
        {/* <div className="text-6xl">
          <QuestionCircleOutlined />
        </div> */}
        <p className="text-lg text-white">
          Missing page...Please try again later.
        </p>
        <button className="mt-4">Back</button>
      </div>
    </>
  );
};

export default Error;
