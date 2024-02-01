import Image from "next/image";

type Props = {
  label: string;
  title: string;
  content: React.ReactNode;
  image_url: string;
  image_position: "right" | "left";
  image_bigger: boolean;
  image_bottom: boolean;
  circle: boolean;
  square: boolean;
};

export default function SectionLayer({
  label,
  title,
  content,
  image_url,
  image_position,
  image_bigger,
  image_bottom,
  circle,
  square,
}: Props) {
  return (
    <section
      className={` flex flex-wrap ${
        image_bottom ? "items-end" : "items-start"
      } gap-6 `}
    >
      <div
        className={` space-y-5 ${
          image_bigger ? "w-full md:w-[40%]" : "w-full md:w-[55%]"
        } flex flex-col ${image_position === "right" && "items-end"} ${
          image_position === "right" && "text-end"
        } space-y-5 ${
          image_bottom ? "pb-0 md:pb-[10rem]" : "pt-0 md:pt-[10rem]"
        } ${image_position === "left" && "order-1"}`}
      >
        <p className=" text-customRed tracking-wider font-bold">{label}</p>
        <h3 className=" tracking-widest break-words">{title}</h3>
        {content}
      </div>
      <div
        className={` ${
          image_bigger ? "w-full md:w-[55%]" : "w-full md:w-[40%]"
        }`}
      >
        <aside
          className={` relative w-full ${
            square ? "aspect-[1/1]" : "aspect-[1.5/1]"
          } ${
            circle ? "rounded-full overflow-hidden mb-5 md:mb-10 lg:mb-20" : ""
          }`}
        >
          <Image src={image_url} alt="me" fill className=" object-cover" />
        </aside>
      </div>
    </section>
  );
}
