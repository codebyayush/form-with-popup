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
                    <h3>{values.name} and age is {values.age}</h3><hr />      
                </>
                ))}
        </Card>
    )
}

export default FormData;