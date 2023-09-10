import { CatProps, FilterProps } from "@types";

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCats(filters: FilterProps) {
  const { name, origin, playfulness } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "5bde3ed85bmsh5d4d26b2ec2e4dep16f445jsnfa0957af9f76",
    "X-RapidAPI-Host": "cats-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cats-by-api-ninjas.p.rapidapi.com/v1/cats?name=${name}&origin=${origin}&playfulness=${playfulness}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
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
