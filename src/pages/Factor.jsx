import { useContext } from "react";
import { Maincontext } from './../provider/Provider';

const Factor = () => {
    const { factor } = useContext(Maincontext)

    let total = 0
    for (let f of factor) {
        total += f.count * f.price
    }

    return (
        <div className="container m-5 p-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>price</th>
                        <th>count</th>
                        <th>total price</th>
                    </tr>
                </thead>
                <tbody>
                    {factor.map((fact, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{fact.title}</td>
                            <td>{fact.price}</td>
                            <td>{fact.count}</td>
                            <td>{fact.count * fact.price}</td>
                        </tr>
                    )}
                </tbody>

            </table>
            <div className="d-flex justify-content-center align-items-center">
                <h1>totalAmount:</h1>
                <h2 className="mx-2 m-5 p-5">{total}</h2>
                <button className="btn btn-outline-info">Payment</button>
            </div>
        </div>
    );
}

export default Factor;