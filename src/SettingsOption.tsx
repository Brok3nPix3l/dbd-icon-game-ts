import { ValueType, PerksValue } from "./App";

export type Option<Type> = {
  title: string;
  value: Type;
  selectHandler: (setting: Type) => void;
};

export type PerksOption = Option<PerksValue>;

type SettingsOptionProps<T> = {
  option: Option<T>;
};

export default function SettingsOption<T extends ValueType>(
  props: SettingsOptionProps<T>
) {
  return (
    <button
      onClick={() => {
        props.option.selectHandler(props.option.value);
      }}
      type="button"
      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 dark:bg-black dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-900 sm:ml-3 sm:mt-0 sm:w-auto"
    >
      <span className="capitalize">{props.option.title}</span>
    </button>
  );
}
