import React, { useEffect, useState } from 'react'
import Parser from 'html-react-parser';


export default function Datat() {


    const [user, setUser] = useState([]);
    // const GetBoolen = () => {

    //     if (user.mycourse.length > 0) {
    //         return true;
    //     } else {

    //         return false;
    //     }

    // }
    const fetchData = () => {
        return fetch("https://spicelearnweb.xrcstaging.in/webservice/rest/server.php?wstoken=fa1a63647c5c83eb68b95e07d985d2c5&wsfunction=local_api_my_course_detail&moodlewsrestformat=json&userid=5683")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <main>
            <h1>User List</h1>
            <div className="table-responsive" style={{ "max-height": "500px" }}>
                <table className="Table table-bordered">
                    <thead>
                        <tr>
                            <th>S No</th>
                            {
                                //console.log(Object.keys(user.mycourse[0]))
                                Object.entries(user.mycourse[0]).map(([key, value]) => {
                                    return (
                                        <th>{key}
                                        </th>
                                    );
                                })

                            }

                        </tr>
                    </thead>
                    <tbody>
                        {user.mycourse && user.mycourse.length > 0 && user.mycourse.map((userObj, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{userObj.id}</td>
                                <td>{userObj.fullname}</td>
                                <td>{userObj.shortname}</td>
                                <td>{Parser(userObj.summary)} </td>
                                <td>{userObj.sortorder}</td>
                                <td>{userObj.IsVisble}</td>
<td>{userObj.imageurl==="no image"?"" : <img alt="no data" src={userObj.imageurl} style={{ width: "100px" }}></img> }</td>

                                <td>{userObj.categoryname}</td>
                                <td>{userObj.categoey_sortname}</td>
                                <td>{userObj.courseprogress}</td>
                                <td>{userObj.is_favourite}</td>
                                <td>{userObj.coursestatus}</td>
                                <td>{userObj.lastaccess}</td>
                                <td>{userObj.parent_department}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}
