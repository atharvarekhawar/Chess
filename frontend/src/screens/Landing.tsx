import chess from "../assets/chess.png";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[70%] h-[70%] flex">
        <img src={chess} alt="chess" className="w-[500px] rounded-md" />
        <div className="w-1/2 h-full flex flex-col items-center justify-start text-white p-20 gap-10">
          <p className="text-5xl font-bold text-center leading-snug ">
            Play Chess Online on the #1 Site!
          </p>
          <button
            onClick={() => {
              navigate("/game");
            }}
            className="w-[20rem] bg-[#81b64c] px-10 py-6 rounded-md text-3xl font-bold"
          >
            Play Online{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
