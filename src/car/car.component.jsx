import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Car extends Component {

    render() {

        // Map through cars and return linked cars

        const cars = this.props.route.data;

        const carNode = cars.map((car) => {
            return (
                <Link
                    to={"/cars/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });

        return (
            <div>
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    };
}

export default Car;