import Image from "next/image";
import { Permanent_Marker } from "next/font/google";
const PermanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
function Experience_section() {
  return (
    <div className="h-[100vh] w-full justify-center relative mb-32px">
      <p
        className={`${PermanentMarker.className} text-hmi-orange text-center font-extrabold mt-32 mb-4`}
      >
        Hello Friends :)
      </p>
      <h1 className="text-center font-extrabold text-4xl mx-80">
        Hey, we're Oslo. We bring together years of experience.
      </h1>
      <p className="text-sm text-hmi-battleship-gray text-center mb-32 mt-8 mx-96">
        lorem ipsum sit amet, consectetur adipiscing elit. Meecenas massa massa
        id arcu blandit dignissim costum
      </p>
      <div className="absolute top-30 justify-center w-full">
        <p
          className={`${PermanentMarker.className} uppercase text-center text-hmi-orange mb-4`}
        >
          Here
        </p>
        <p
          className={`${PermanentMarker.className} uppercase text-center text-hmi-orange mb-4`}
        >
          Always
        </p>
        <p
          className={`${PermanentMarker.className} uppercase text-center text-hmi-orange`}
        >
          For you
        </p>
      </div>
      <div className="absolute inline-flex justify-center w-full">
        <div className="">
          <Image
            src="/gambar1.png"
            width={500}
            height={500}
            style={{
              width: "300px",
              height: "350px",
            }}
            alt="Dies natalies HMI"
            className="border-hmi-orange border-4 rounded-2xl rotate-[-10deg]"
          ></Image>
        </div>
        <div className="mt-[130px]">
          <Image
            src="/gambar2.png"
            width={280}
            height={450}
            style={{
              width: "300px",
              height: "350px",
            }}
            alt="Idul Fitri"
            className="border-hmi-papaya-whip border-4 rounded-2xl rotate-[-3deg]"
          ></Image>
        </div>
        <div className="">
          <Image
            src="/gambar3.png"
            width={280}
            height={380}
            style={{
              width: "300px",
              height: "350px",
            }}
            alt="Hari Kartini"
            className="border-hmi-reseda-green border-4 rounded-2xl rotate-[15deg]"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Experience_section
