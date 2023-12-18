import Image from "next/legacy/image"

const AvatarOrganization: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div className="boder-2 relative rounded-full border-[4px] border-white dark:border-black xs:w-28 md:w-48">
      <Image
        alt="pic"
        src={"/organization/avatar.png"}
        width={200}
        height={200}
        className=" rounded-full"
      />
      <div className="absolute rounded-full bg-red-500 xs:bottom-5 xs:right-0 xs:h-[20px] xs:w-[20px] md:bottom-10 md:right-0 md:h-[30px] md:w-[30px]"></div>
    </div>
  )
}

export default AvatarOrganization
