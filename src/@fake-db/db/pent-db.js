import _ from '@lodash';
import mock from '../mock';


const data = [
    {
        "id": "1",
        "avatar": "assets/images/avatars/james.jpg",
        "name": "Jack Gilbert", "experience": "8 Years",
        "charge": "900 K",
        "certificate": "CEH , OSCP",
        "status": "Add"
    },
    {
        "id": "2",
        "avatar": "assets/images/avatars/katherine.jpg",
        "name": "Kathy Anderson", "experience": "3 Years",
        "charge": "500 K",
        "certificate": "OSWE",
        "status": "Add"
    },
    {
        "id": "3",
        "avatar": "assets/images/avatars/garry.jpg",
        "name": "Gary Gonzalez",
        "experience": "1.5 Years",
        "charge": "300 K",
        "certificate": "Ret Hat",
        "status": "Add"
    },
    {
        "id": "4",
        "avatar": "assets/images/avatars/andrew.jpg",
        "name": "Mark Turner",
        "experience": "2 Years",
        "charge": "400 K",
        "certificate": "CISM",
        "status": "Add"
    },
    {
        "id": "5",
        "avatar": "assets/images/avatars/james.jpg",
        "name": "Jack Aldem",
        "experience": "1 Years",
        "charge": "300 K",
        "certificate": "CISCO NETWORK",
        "status": "Occupied"
    }]


mock.onGet('/api/pent').reply(() => {

    return [200, data];
});

