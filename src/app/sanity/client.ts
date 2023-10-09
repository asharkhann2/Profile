import { createClient } from "next-sanity";



const client = createClient({
  projectId: "xz3jb29u",
  dataset: "production",
  apiVersion: "2022-02-03",
  useCdn: false
});

export default client;