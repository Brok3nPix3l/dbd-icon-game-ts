export type ICON_TRANSFORMATION =
  | "none"
  | "invert-y"
  | "rotate 180"
  | "invert-y rotate 180";

type IconProps = {
  imageSrc: string;
  transform?: ICON_TRANSFORMATION;
  handleSelectedIcon: (correct: boolean) => void;
};

export default function Icon(props: IconProps) {
  return (
    <div className="flex justify-center border-4 border-slate-900 bg-slate-700 dark:border-stone-200 dark:bg-stone-700">
      <img
        src={props.imageSrc}
        className={`cursor-pointer min-[550px]:w-[256px]
        ${props.transform === "invert-y" && "-scale-x-100"} ${
          props.transform === "rotate 180" && "rotate-180"
        } ${
          props.transform === "invert-y rotate 180" && "rotate-180 -scale-x-100"
        }`}
        onClick={() => props.handleSelectedIcon(props.transform === "none")}
        draggable={false}
      />
    </div>
  );
}
