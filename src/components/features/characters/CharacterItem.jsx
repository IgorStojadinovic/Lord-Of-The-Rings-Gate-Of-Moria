import charLogo from "../../assets/images/character-logo.jpg";

const CharacterItem = ({
  char: { name, wikiUrl, birth, race, death, spouse },
}) => {
  return (
    <div className="card  w-[80%] h-[60%] bg-base-200 shadow-xl sm:w-[50%]   md:w-[50%] md:h-[100%]  lg:w-[50%] lg:h-[100%] mb-7   xl:w-[50%] xl:h-[100%]  ">
      <figure className=" h-[40%] md:p-0  lg:visible xl:h-[100%] ">
        <img
          src={charLogo}
          alt="logo"
          className=" h-full  rounded-sm md:w-full md:h-full  md:p-0 md:object-cover lg:p-0 lg:h-[100%]  xl:h-[100%] xl:p-0  xl:w-[100%] "
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
