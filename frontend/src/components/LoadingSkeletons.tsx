import ContentLoader from "react-content-loader";

const FilmCardSkeleton = () => {
  return (
    <div className="flex h-auto w-full items-center justify-center rounded-lg">
      <ContentLoader
        speed={2}
        width={314}
        height={471}
        backgroundColor="#aaaaaa"
        animate={true}
      >
        {/* simulating the film card */}
        <rect x="0" y="0" rx="10" ry="0" width="300" height="400" />
      </ContentLoader>
    </div>
  );
};

export { FilmCardSkeleton };
