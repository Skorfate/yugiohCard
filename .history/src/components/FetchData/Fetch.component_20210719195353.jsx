import React, { useState } from 'react'

const Fetch = ( param = null) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true);
    
        fetch(url, options)
          .then(res => res.json())
          .then(data => {
            setData(data);
            setError(null);
          })
          .catch(error => {
            setError(error);
            setData(null);
          })
          .finally(() => setLoading(false));
      }, [param]);

    return (
        <div>
            
        </div>
    )
}

export default Fetch
