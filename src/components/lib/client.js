import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "70c3p5ye",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
