import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "../Components/Loading";
import Room from "./Room";

export default function FeaturedRooms() {
  let { data, database } = useContext(RoomContext);

  let loading = database.loading;

  const rumz = database.rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className="featured-rooms">
      <h2>Featured Rooms</h2>
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rumz}
      </div>
    </section>
  );
}
