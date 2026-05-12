import Image from "next/image";

const ShareSite = () => {
  return (
    <div className="mb-5 border items-center  border-orange-500 rounded-[10px] p-2 flex">
      <div className="flex items-center justify-center mr-4">
        <Image
          src="/images/cute.gif"
          alt="Cute animated gif"
          unoptimized
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="leading-6">
        <h2>Love this site?</h2>
        <h4>Share it and let others know!</h4>
      </div>
    </div>
  );
};
export default ShareSite;
