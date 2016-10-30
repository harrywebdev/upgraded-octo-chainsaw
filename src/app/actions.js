export const SHOWS_SEARCH = 'shows/search'

export function setSearchTerm (searchTerm) {
  return {
    type: SHOWS_SEARCH,
    value: searchTerm
  }
}
