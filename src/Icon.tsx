export type ICON_TRANSFORMATION = 'none' | 'invert-y' | 'rotate 180' | 'invert-y rotate 180'

type IconProps = {
  imageSrc: string;
  transform?: ICON_TRANSFORMATION;
  handleSelectedIcon: (correct: boolean) => void;
};

export default function Icon(props: IconProps) {

  return (
    <div className="bg-slate-700 border-slate-900 border-4">
        <img
          src={props.imageSrc}
          className={`cursor-pointer ${props.transform === 'invert-y' && '-scale-x-100'} ${props.transform === 'rotate 180' && 'rotate-180'} ${props.transform === 'invert-y rotate 180' && '-scale-x-100 rotate-180'}`}
          onClick={() => props.handleSelectedIcon(props.transform === 'none')}
        />
    </div>
  );
}
