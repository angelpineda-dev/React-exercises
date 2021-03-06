import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({  
    data: [],
    loading: true
})

// This handle changes on our componen.
useEffect(() => {
  getGifs(category)
    .then( imgs => {
        setState({
        data: imgs,
        loading: false
      });
    });
  
}, [category])

return state;
}