"use client";

export function Customers() {
  return (
    <div className="container mt-28">
      <h2 className="text-3xl lg:text-6xl  opacity-20 font-black text-center uppercase">
        Alunos
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 border border-secondary rounded-xl overflow-hidden p-3">
          <iframe
          
            title="YouTube Video"
            width={"100%"}
            height="315"
            src={`https://www.youtube.com/embed/RcHAs7dOsZA?si=usAvOaCL6JrRGqWQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-1 border border-secondary rounded-xl overflow-hidden p-3">
          <iframe
            title="YouTube Video"
            width={"100%"}
            height="315"
            src={`https://www.youtube.com/embed/RcHAs7dOsZA?si=usAvOaCL6JrRGqWQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-1 border border-secondary rounded-xl overflow-hidden p-3">
          <iframe
            title="YouTube Video"
            width={"100%"}
            height="315"
            src={`https://www.youtube.com/embed/RcHAs7dOsZA?si=usAvOaCL6JrRGqWQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
