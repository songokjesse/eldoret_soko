export const getStaticPaths = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/houses");
    const house_data = await res.json();

    const paths = house_data.data.map( house => {
        return {
            params: { id: house.house_id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("http://127.0.0.1:8000/api/houses/" + id);
    const house_data = await res.json();
    return {
        props : {
            houses : house_data
        }
    }
}


const HouseDetails = ({houses}) => {
    return (
        < >
            <div className="container">
                <h2>House Details</h2>
                <br/>
                <div className="card">
                    <div className="card-header">
                        House
                    </div>
                    <div className="card-body">
                    {houses.house.map(house => (
                        <table key={house.house_id} className="table table-striped table-hover">
                        <tr >
                            <td>Category</td>
                            <td>{house.category}</td>
                        </tr>
                        <tr>
                        <td>Location</td>
                        <td>{house.location}</td>
                        </tr>
                            <tr>
                                <td>Price</td>
                                <td>{house.price}</td>
                            </tr>
                        </table>
                    ))}
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-header">
                       Amenities
                    </div>
                    <div className="card-body">

                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                {houses.amenities.map(amenity => (
                                <li key={amenity.id} className="list-group-item">{amenity.name}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <br/>
                <div className="card">
                    <div className="card-header">
                        Images
                    </div>
                    <div className="card-body">
                    </div>
                </div>



            </div>
        </>
    )
}

export default HouseDetails