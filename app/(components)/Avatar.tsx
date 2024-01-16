import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <a href="/">
        <div className="avatar md:hover:scale-[102%] transition-all duration-300">
          <div className="w-32 mask mask-squircle">
            <Image
              priority={true}
              alt="user avatar"
              src="/johnwondercursive.png"
              width={100}
              height={100}
            />
          </div>
        </div>
      </a>
    </>
  );
}
