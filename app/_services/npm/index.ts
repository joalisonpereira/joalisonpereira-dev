import type {
  NpmPackageObject,
  NpmSearchData
} from './interfaces';

const NPM_SEARCH_URL =
  'https://registry.npmjs.org/-/v1/search?text=maintainer:joalisonpereira';

export async function loadNpmPackages(): Promise<
  NpmPackageObject[]
> {
  const res = await fetch(NPM_SEARCH_URL, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) return [];

  const data: NpmSearchData = await res.json();

  return data.objects;
}
