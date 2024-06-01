import { useEffect, useState } from "react";

export default function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondDeg = time.getSeconds() * 6;
  const minuteDeg = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

  return (
    <div className="z-43 flex items-center justify-center relative w-full h-screen ">
      <div className="z-30 w-full h-screen fixed">
        {" "}
        <video
          className="z-20 absolute   w-full h-screen object-cover object-center"
          src="https://video.wixstatic.com/video/11062b_3e2f37c297534f9ead156265242fbca8/720p/mp4/file.mp4" // Buraya kendi video URL'nizi koyun
          autoPlay
          loop
          muted
        />
        <div className="z-40 absolute h-screen opacity-40 w-full bg-gray-500"></div>
      </div>

      <div className="z-40 absolute h-[600px] w-[600px] flex items-center justify-center">
        {/* Hour hand */}
        <div
          className="absolute w-2 h-[150px] bg-white origin-bottom top-36"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        ></div>
        {/* Minute hand */}
        <div
          className="absolute w-2 h-[200px] bg-white origin-bottom top-24  "
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        ></div>
        {/* Second hand */}
        <div
          className="absolute w-1 h-[250px] bg-white origin-bottom top-10"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        ></div>

        {/* Hour marks */}
        <div className="absolute w-[600px] h-[600px] flex items-center justify-center">
          <div className="text-white flex flex-col items-center justify-center gap-5">
            <div className="text-2xl">YENİ WEB SİTEMİZ</div>
            <div className="text-8xl text-wrap text-center">
              ÇOK <br></br>
              <br></br> YAKINDA{" "}
            </div>
            <div className="text-2xl">TAKİPTE KALIN!</div>
          </div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-12 bg-white"
              style={{ transform: `rotate(${i * 30}deg) translateY(-250px)` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
