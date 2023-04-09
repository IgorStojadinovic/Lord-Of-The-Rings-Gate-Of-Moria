import charLogo from "../../assets/images/character-logo.jpg";

const CharacterItem = ({
  char: { name, wikiUrl, birth, race, death, spouse },
}) => {
  return (
    <div className="card  w-[90%] h-[60%] bg-base-200 shadow-xl md:w-[80%]  md:h-[750px]  lg:w-[50%] lg:h-[100%] mb-7   xl:w-[50%] xl:h-[100%] xl:card-side ">
      <figure className=" h-[40%] p-5 md:p-0 lg:visible xl:w-[100%] ">
        <img
          src={charLogo}
          alt="logo"
          className=" h-[200px] rounded-sm md:w-full md:h-full md:p-0 md:pt-7 md:object-contain lg:rounded-2xl lg:h-[200px]  xl:h-[100%]  xl:p-5 xl:w-[100%] "
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="pt-5 text-xs md:text-base">Date of birth : {birth}</p>
        <p className="pt-5 text-xs md:text-base">Date of death : {death}</p>
        <p className="pt-5 text-xs md:text-base">
          Spause : {spouse ? spouse : "None"}{" "}
        </p>
        <p className="pt-5">Race : {race}</p>

        <div className="card-actions justify-end">
          <a
            href={wikiUrl}
            target="_blank"
            rel="noreferrer"
            className="badge badge-outline p-4"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
