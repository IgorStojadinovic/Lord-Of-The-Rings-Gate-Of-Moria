import giff from "../../assets/images/and.gif";

const Spinner = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <button className="btn btn-xl loading mt-10 h-4/5 w-full bg-transparent border-none"></button>
      <p> Waiting for Api response</p>
      <img src={giff} alt="" />
    </div>
  );
};

export default Spinner;
