import React from 'react';
import { Image } from 'react-bootstrap';
import checkIcon from '../../../images/check-icon.png';

const Order = () => {
    return (
        <section id='Order'>
            <div className="order-wrapper position-relative">
                <div className="order-content">
                    <Image src={checkIcon}></Image>
                    <h3>Order Placed</h3>
                    <p>Order Number : #23672715413</p>
                </div>
            </div>
        </section>
    );
};

export default Order;