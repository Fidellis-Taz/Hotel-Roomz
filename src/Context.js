import React, { createContext, useState, useEffect } from "react";
import items from "./data";
export const RoomContext = createContext();

export default function RoomContextProvider(props) {
  const [data, setData] = useState("hello");
  const [database, setDatabaz] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });
  //getData
  const formatData = (items) => {
    let tempİtems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images: images, id };

      return room;
    });
    return tempİtems;
  };

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    setDatabaz({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }, []);

  return (
    <RoomContext.Provider value={{ data, database }}>
      {props.children}
    </RoomContext.Provider>
  );
}
