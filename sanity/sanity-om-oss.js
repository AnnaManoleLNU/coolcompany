// The module that queries the Sanity API om oss.

import { groq } from "next-sanity"
import { client } from "@/sanity/lib/sanity.client"


export async function getAbout() {
  const query = groq`*[_type == 'om-oss' ] {
  _id,
  title,
  content
}`

  return client.fetch(query)
}