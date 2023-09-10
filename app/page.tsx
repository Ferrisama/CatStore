import { fetchCats } from "@utils";
import { HomeProps } from "@types";
import { playfulness } from "@constants";
import { CatCard, CustomFilter, Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const allCats = await fetchCats({
    name: searchParams.name || "",
    origin: searchParams.origin || "",
    limit: searchParams.limit || 10,
    playfulness: searchParams.playfulness || 5,
  });

  const isDataEmpty = !Array.isArray(allCats) || allCats.length < 1 || !allCats;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div
        className="mt-15 padding-x padding-y max-width custom-rounded bg-green-200 "
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            <b style={{ color: "blue" }}>CAT</b>
            <i className=" text-green-400">alogue</i>
          </h1>
          <p>Explore our cats that might like you</p>
        </div>

        <div className="home__filters text-center">
          <div className="home__filter-container mx-auto">
            <b className="text-xl font-extrabold" style={{ color: "orange" }}>
              Select Cats based on Playfulness
            </b>
            <CustomFilter title="playfulness" options={playfulness} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCats?.map((cat) => (
                <CatCard cat={cat} key={cat.id} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no cats</h2>
          </div>
        )}
      </div>
    </main>
  );
}
