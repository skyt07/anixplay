import Image from "next/image";

const ShareSite = () => {
  return (
    <section className="flex items-center gap-4 p-3 mb-5 transition border border-orange-500/60 rounded-2xl bg-orange-500/5 backdrop-blur-md hover:bg-orange-500/10">
      {/* Gif */}
      <div className="flex items-center justify-center shrink-0">
        <Image
          src="/images/cute.gif"
          alt="Cute animated gif"
          unoptimized
          width={48}
          height={48}
          className="object-cover rounded-full"
        />
      </div>

      {/* Text */}
      <div className="leading-snug">
        <h2 className="text-sm font-semibold text-white md:text-base">
          Love this site?
        </h2>

        <p className="text-xs text-gray-300 md:text-sm">
          Share it and let others discover AnixPlay!
        </p>
      </div>
    </section>
  );
};

export default ShareSite;
