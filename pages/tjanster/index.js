import { useEffect, useState } from "react";
import GridImageSquare from "@/components/GridImageSquare";
import { getTjanster } from "@/sanity/sanity-tjanster";

const Services = () => {
  const [tjansterData, setTjansterData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTjanster();
      setTjansterData(data);
    };
    fetchData();
  }, []);

  const images = tjansterData.map((tjanst) => ({
    href: `/tjanster/${tjanst.slug}`,
    src: tjanst.image,
    alt: tjanst.title,
    caption: tjanst.title,
    key: tjanst._id,
  }));

  return (
    <div>
      <GridImageSquare images={images} />
    </div>
  );
};

export default Services;
