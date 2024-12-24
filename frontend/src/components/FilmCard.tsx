import { toast } from "sonner";

interface FilmCardProps {
  coverName: string;
}

const FilmCard = ({ coverName }: FilmCardProps) => {
  return (
    <div className="flex w-full flex-grow items-center justify-center transition-all duration-200 hover:scale-105">
      <div className="group relative w-[300px] rounded-xl bg-slate-900 shadow-lg shadow-sky-900 hover:shadow-sky-600">
        <img
          src={`/covers/${coverName}.jpg`}
          alt=""
          className="h-full w-full rounded-xl object-cover"
        />
        <div className="group absolute bottom-0 flex h-1/2 w-full scale-95 items-center justify-center rounded-bl-xl rounded-br-xl px-7 opacity-0 transition-all delay-75 duration-200 hover:scale-100 hover:opacity-100">
          <button className="btn-pri"
          onClick={() => toast.success("Okay, I will recommend another soon")}
          >I've seen this one</button>
          {/* background overlay */}
          <div className="absolute h-full w-full rounded-bl-xl rounded-br-xl rounded-tl-3xl rounded-tr-3xl bg-gray-900 opacity-75"></div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
