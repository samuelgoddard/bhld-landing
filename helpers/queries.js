const contact = `"contact": *[_type == "contact"][0]{ emailAddress, phone, instagram }`
const seo = `seo { ..., shareGraphic { asset-> } }`
const image = `
  asset-> { ... },
  hotspot { ... },
  crop { ... },
  caption
`
const slug = `slug { current }`

export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    introText
  },
  ${seo},
  ${contact}
}`

export const projectsQuery = `{
  "projects": *[_type == "project"] | order(_createdAt asc) {
    title,
    projectCode,
    teaserImage {
      ${image},
    },
    galleryImages[] {
      image {
        ${image}
      }
    },
    ${slug}
  },
  ${contact}
}`

export const projectQuery = `{
  "project": *[_type == "project" && slug.current == $slug][0]{
    _createdAt,
    title,
    projectCode,
    projectInfo,
    galleryImages[] {
      ${image}
    },
    ${slug},
    "next": *[_type == "project" && ^._createdAt < _createdAt] | order(_createdAt asc)[0] {
      title,
      ${slug}
    },
    "first": *[_type == "project"] | order(_createdAt asc)[0] {
      title,
      ${slug}
    }
  },
  ${contact},
}`