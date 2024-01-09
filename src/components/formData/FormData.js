import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

function FormData(props){

    const [newuserarr, setnewuser] = useState(props.newUser);
 
    useEffect(() => {
        setnewuser(props.newUser);
      }, [props.newUser]);

    return (
        <Card className="form-data">
                {newuserarr.map((values) => (
                <>
                    <h2>Username: {values.name}</h2> 
                    <h3>Age: {values.age}</h3>
                    <h3>College: {values.clgName}</h3>
                    <hr />      
                </>
                ))}
        </Card>
    )
}

export default FormData;