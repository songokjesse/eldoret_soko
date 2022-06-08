import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/houses");
    const house_data = await res.json();

    return {
        props : {
            houses : house_data.data
        }
    }
}
const Index = ({houses}) => {
    console.log(houses)
    return(
        <>
            <div className="container">
            <h1>Houses</h1>
            <br/>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {houses.map( house => (

                    <tr key={house.house_id}>
                        <td>{house.category}</td>
                        <td>{house.location}</td>
                        <td>{house.price} Ksh</td>
                        <td><Link href="#"><a>Show</a></Link></td>
                    </tr>
                            ))}
                </tbody>

            </table>
            </div>
        </>
    )
}

export default Index