import { CatProps, FilterProps } from "@types";

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);

  newSearchParams.delete(type.toLocaleLowerCase());

  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCats(filters: FilterProps) {
  const { name, origin, playfulness } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": "5bde3ed85bmsh5d4d26b2ec2e4dep16f445jsnfa0957af9f76",
    "X-RapidAPI-Host": "cats-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cats-by-api-ninjas.p.rapidapi.com/v1/cats?name=${name}&origin=${origin}&playfulness=${playfulness}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export const generateCatImageUrl = (cat: CatProps, angle?: string) => {
  const { name, general_health, meowing, playfulness, origin, image_link } =
    cat;
  const url = new URL(image_link);

  url.searchParams.append(
    "customer",
    "5bde3ed85bmsh5d4d26b2ec2e4dep16f445jsnfa0957af9f76"
  );
  url.searchParams.append("name", name);
  url.searchParams.append("meowing", `${meowing}`);
  url.searchParams.append("general_health", `${general_health}`);
  url.searchParams.append("origin", origin);
  url.searchParams.append("playfulness", `${playfulness}`);

  return `${url}`;
};
