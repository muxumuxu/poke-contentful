import * as contentful from 'contentful'
import axios from 'axios'
import languages from './country-language'

const SPACE_ID = 'comcajhqj1du'
const ACCESS_TOKEN = '431032e096f4eed45ef116b4dd173beeeff2dc8452eb538cd7f8da302cdc5249'

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

// Retrieve introduction
export const getIntroduction = () => {
  const contentTypeId = 'introduction'
  return retrieveLocale()
  .then(locale => fetchEntriesForContentType(contentTypeId, locale))
  .then(entries => ({
    title: entries[0].fields.title,
    baseline: entries[0].fields.baseline,
    company: entries[0].fields.company
  }))
}

// Load all entries for a given Content Type from Contentful
const fetchEntriesForContentType = (contentTypeId, locale = '*') => {
  return client.getEntries({ content_type: contentTypeId, locale })
  .then(response => response.items)
}

// Retrieve the user locale based on the browser
const retrieveLocale = () => {
  return axios.get('http://freegeoip.net/json/')
  .then(res => {
    const countryCode = res.data.country_code
    return `${languages[countryCode.toLowerCase()]}-${countryCode}`
  })
}

// Fetch all available content types
const fetchContentTypes = () => {
  return client.getContentTypes().then(res => res.items)
}
