import { v4 as uuid } from "uuid";
import { Setting } from "./Settings";
import SettingsOption, { Option } from "./SettingsOption";
import { ValueType } from "./App";

type SettingsRowProps<T extends ValueType, O extends Option<T>> = {
  setting: Setting<T, O>;
};

export default function SettingsRow<T extends ValueType, O extends Option<T>>(
  props: SettingsRowProps<T, O>
) {
  return (
    <>
      <h3
        key={uuid()}
        className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
        id="modal-title"
      >
        {props.setting.title}
      </h3>
      <div className="mt-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {props.setting.subtitle}
        </p>
      </div>
      <div className="justify-end px-4 py-3 sm:flex sm:flex-row sm:px-6">
        {props.setting.options.map((option) => {
          return <SettingsOption option={option} key={uuid()} />;
        })}
      </div>
    </>
  );
}
