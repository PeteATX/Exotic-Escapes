import React from 'react'
import GetawaysFilter from './GetawaysFilter'
import GetawaysList from './GetawaysList'
import {withRoomConsumer} from '../Context';
import Loading from  './Loading';

function RoomContainer ({context}){
const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading />;
    }
     return (
        <>
        <GetawaysFilter  rooms={rooms} />
        <GetawaysList rooms={sortedRooms} />
        </>

       )
}

export default withRoomConsumer(RoomContainer)





