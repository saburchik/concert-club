import { useLocation } from 'react-router-dom'

export const useQuery = () => new URLSearchParams(useLocation().search)
// Use the URLSearchParams API to extract the query parameters
// useLocation().search will have the query parameters eg: ?foo=bar&a=b
