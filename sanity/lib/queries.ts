import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current)] | order('_createdAt', desc){
  _id,
  title,
  category,
  views,
  _createdAt,
  description,
  slug,
  author -> {
    _id,
    name,
    image,
    bio
  },
  image
}`)