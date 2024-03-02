import { useCallback, useState } from "react";

export const useProfile = () => {
  const [page, setPage] = useState('profile');
  const [rent, setRent] = useState([])

  const useChangePage = useCallback(data => {
    setPage(data)
  }, [])

  const useChangePageData = useCallback((page, data) => {
    setPage(page)
    setRent(data)
  }, [])
  
  return { useChangePage,useChangePageData, page, rent }
}