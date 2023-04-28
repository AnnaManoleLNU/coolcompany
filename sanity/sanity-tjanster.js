// The module that queries the Sanity API tjänster.

import { groq } from "next-sanity"
import { client } from "@/sanity/lib/sanity.client"


export async function getTjanster() {
  const query = groq`*[_type == 'tjanster' ] {
  _id,
  title,
  "slug": slug.current,
  "image": image.asset->url, 
  "alt": image.alt,
  url,
  content
}`

  return client.fetch(query)
}
