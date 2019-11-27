import React from "react";


const Contact = props => {

    const actorCard = props.actors.map((el) => {
        return (<tr key={el.id}>
            <td>
                <img className="actorpic" src={el.pictureUrl} alt="img" />
            </td>

            <td>
                {el.name}
            </td>

            <td>
                {el.popularity.toFixed(2)}
            </td>
            <td>
                <button onClick={() => props.deleteContact(el.id)}>Delete</button>
            </td>
        </tr>)
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Picture </th>
                    <th>Name</th>
                    <th> Popularity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {actorCard}
            </tbody>
        </table>

    )

}

export default Contact