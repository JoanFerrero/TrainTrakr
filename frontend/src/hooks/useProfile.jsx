import { useCallback, useState } from "react";

export const useProfile = () => {
  const [page, setPage] = useState('profile');
  const [rent, setRent] = useState([]);
  const [trip, setTrip] = useState([]);

  const useChangePage = useCallback(data => {
    setPage(data)
    setTrip([])
  }, [])

  const useSelectTrip = useCallback(data => {
    console.log(data)
    setTrip(data)
  }, [])

  const useChangePageData = useCallback((page, data) => {
    setPage(page)
    setRent(data)
    setTrip([])
  }, [])
  
  return { useChangePage,useChangePageData, useSelectTrip, page, rent, trip }
}