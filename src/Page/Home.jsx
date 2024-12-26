import Card from "../Components/Card";
import HomeImage from "../Components/HomeImage";

const Home = () => {
  const homeImage = {
    title: "Salon Kecantikan Dengan Harga Terjangkau",
    children:
      "Harga terjangkau dengan kualitas perawatan yang premium sehingga memberikan kepuasan pelanggan",
  };

  const card = {
    title: [["TRENDY SALON"], ["Misi Kami"]],
    children: {
      "TRENDY SALON": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec sed tristique libero. Aliquam dapibus metus sed ligula dignissim.",
      ],
      "Misi Kami": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Etiam arcu diam, egestas at felis in, viverra pretium elit.",
      ],
    },
  };

  return (
    <>
      <HomeImage title={homeImage.title}>{homeImage.children}</HomeImage>
      <Card titles={card.title}>{card.children}</Card>
    </>
  );
};

export default Home;
