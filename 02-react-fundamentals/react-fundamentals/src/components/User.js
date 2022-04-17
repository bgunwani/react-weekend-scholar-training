
/* Function Component */

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name},
                Age: {props.age},
                City: {props.children}</p>
        </div>
    )
}

export default User;