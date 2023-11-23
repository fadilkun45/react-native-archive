import axios from 'axios'
import React, { useEffect, useState } from 'react'

const fetchAll = () => {
      const [isLoading, setIsLoading] = useState(true)
      const [data, setData] = useState(null)
      useEffect(() => {
          axios.get(`https://restcountries.com/v3.1/all`).then(({data}) => {
            setData(data)
            setIsLoading(false)
          })
      },[])

      return {data, isLoading}

}

export {fetchAll}

