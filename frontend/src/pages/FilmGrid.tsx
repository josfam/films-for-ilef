import FilmCard from "../components/FilmCard";
import filmList from "../utils/FilmList";
import { filmInfo } from "../types/Types";

const FilmGrid = () => (
  <div>
    <div className="relative mb-16 flex h-fit flex-col items-center justify-center py-6">
      <h1 className="absolute top-0 text-nowrap text-3xl font-semibold">
        Films for Ilef
      </h1>
      <div className="absolute bottom-0 h-[2px] w-full rounded-sm bg-orange-400 bg-opacity-70"></div>
    </div>
    <div className="grid w-full grid-cols-1 gap-x-10 gap-y-14 text-sky-900 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filmList.map((film: filmInfo) => (
        <FilmCard coverName={`${film.coverName}`} title={`${film.title}`} released={`${film.released}`}/>
      ))}
    </div>
  </div>
);

export default FilmGrid;
