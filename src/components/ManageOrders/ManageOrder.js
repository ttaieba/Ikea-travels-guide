import React, { useEffect, useState } from 'react';
import { Container, Row, Table, Button } from 'react-bootstrap';
// import useAuth from '../../hooks/useAuth';

const ManageOrder = () => {
    const [manageuser, setmanageuser] = useState([])


    useEffect(() => {
        fetch(`https://lit-wildwood-88545.herokuapp.com/manageuser`)
            .then((res) => res.json())
            .then((data) => setmanageuser(data));
    }, []);

    const handleuserDelete = id => {
        const confirm = window.confirm('Are you want to delet user?');

        if (confirm) {
            fetch(`https://lit-wildwood-88545.herokuapp.com/manageuser/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const exsitingUser = manageuser.filter(user => user._id !== id);
                        setmanageuser(exsitingUser);
                    }
                });

        }

    }



    return (
        <div>
            <Container className="fluid">
                <h1>Manage All </h1>
                <Row>

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>user Name</th>

                                <th>Email</th>
                                <th>Ordered </th>
                            </tr>
                        </thead>

                        {
                            manageuser.map(user => <tbody

                                key={user._id}

                            >

                                <tr>

                                    <td>{user?.userName}</td>

                                    <td>{user?.email}</td>
                                    <td>{user?.Servicename}</td>

                                    <Button onClick={() => handleuserDelete(user?._id)}
                                        variant="outline-danger">delete</Button>
                                </tr>


                            </tbody>)
                        }




                    </Table>
                </Row>
            </Container>
        </div >
    );
};

export default ManageOrder;