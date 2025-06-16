import React, { useRef } from 'react';
import Card from './Card'; // Make sure Card is correctly imported

function Foreground() {
  const ref = useRef(null); // Create a reference for drag constraints

  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div
      ref={ref} // Attach the reference to this parent div
      className="flex flex-wrap gap-5 justify-center p-10 w-full h-full fixed top-0 left-0 z-[3]"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
