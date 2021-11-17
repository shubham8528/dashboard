import React from 'react'

const Data = [
    {
        name: 'Jan',
        "Active User": 4000,
        "Money": 100000

    },
    {
        name: 'Feb',
        "Active User": 3000,
        "Money": 100000

    },
    {
        name: 'Mar',
        "Active User": 2000,
        "Money": 100000

    },
    {
        name: 'April',
        "Active User": 2780,
        "Money": 100000

    },
    {
        name: 'May',
        "Active User": 1890,
        "Money": 100000

    },
    {
        name: 'Jun',
        "Active User": 2390,
        "Money": 100000

    },
    {
        name: 'Jul',
        "Active User": 1490,
        "Money": 100000

    },
    {
        name: 'Aug',
        "Active User": 1190,
        "Money": 100000

    },
    {
        name: 'Sep',
        "Active User": 4490,
        "Money": 100000

    },
    {
        name: 'Oct',
        "Active User": 1090,
        "Money": 100000

    },
    {
        name: 'Nov',
        "Active User": 2990,
        "Money": 100000

    },
    {
        name: 'Dec',
        "Active User": 2490,
        Money: 100000

    },
]


function createData(id, image, name, calories, fat, carbs) {
    return { id, image, name, calories, fat, carbs };
}

const Rows = [
    createData(1, 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=', 'Shubham Bisht', 'shubhambisht0123@gmail.com', 'Active', '$ 12.000'),
    createData(2, 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=', 'Koshal Kumar ', 'shubhambisht0123@gmail.com', 'Active', '$ 12.000'),
    createData(3, 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=', 'Mohit Rawat', 'shubhambisht0123@gmail.com', 'Active', '$ 12.000'),
    createData(4, 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=', 'Gaurav Gupta', 'shubhambisht0123@gmail.com', 'Active', '$ 12.000'),
    createData(5, 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=', 'Pradeep Rawat', 'shubhambisht0123@gmail.com', 'Active', '$ 12.000'),
];

export default Data
export { Rows }