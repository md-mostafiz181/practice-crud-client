import { useLoaderData } from "react-router-dom";


const UpdateUser = () => {

    const loadedUser =useLoaderData()
    console.log(loadedUser)

    const handleUpdate = event =>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const updatedUser={name,email}
        console.log(updatedUser)

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {

            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

            if(data.modifiedCount > 0){
                alert("your user is updated")
                
               
            }
        })
    }
    return (
        <div>
            <h1>You can update user from here :{loadedUser.name}</h1>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" placeholder="name"  defaultValue={loadedUser?.name}/>
                <br />
                <input type="email" name="email" id="" placeholder="email" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;