import React, { useEffect, useState } from 'react'
import './UserLists.css'
// https://jsonplaceholder.typicode.com/users
const UserLists = () => {

    const [userdata, setUserdata] = useState(null);

    const [id, setId] = useState(null);

    useEffect(() => {

        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then((data)=>{
        //     console.log(data.json())
        // })
        // .catch(()=>{

        // })

        const fetchData = async () => {

            try {
                let resData = await fetch("https://jsonplaceholder.typicode.com/users");

                if (resData.ok) {
                    const finalData = await resData.json();
                    setUserdata(finalData)
                }

            }
            catch (err) {
                console.log(err)
            }
        }

        fetchData()

    }, [])

    let fuserdata;
    let filterData;
    if (userdata) {
        filterData = userdata;
        if (id) {
            filterData = userdata.filter((element) => element.id > Number(id))

            // console.log(id)
        }


        fuserdata = filterData.map((ele, idx) => (
            <div key={idx} className='card'>
                <img src='https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' />
                <h3>{ele.name}</h3>
                <p>{ele.email}</p>
                <p>{ele.phone}</p>
                <p>{ele.address.street} <br />
                    {ele.address.suite} <br />
                    {ele.address.city} <br />
                </p>
            </div>
        ))
    }

    return (
        <>
            <input
                type='text'
                placeholder='enter the user id'
                onChange={(e) => setId(e.target.value)}
            />
            <div className='container'>
                {fuserdata}
            </div>
        </>
    )
}

export default UserLists