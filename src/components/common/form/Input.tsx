import React from "react";
import { Controller } from "react-hook-form";

import Row from "../Row";

interface IProps {
  name: string;
  className?: string;
  placeHolder: string;
  control?: any;
  rules?: any;
  errors?: any;
}
const Input: React.FC<IProps> = ({
  name,
  className,
  placeHolder,
  control,
  rules,
  errors,
  ...restProps
}) => {
  return (
    <Row className="flex-col w-full ">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            name={name}
            className={`w-full outline-none px-2 md:px-4 py-2 rounded-sm poppinsRegular text-[14px] md:text-[16px] ${className}`}
            placeholder={placeHolder}
            {...restProps}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-600  mt-[4px] poppinsRegular text-[14px] md:text-[16px] ">
          {errors[name].message}
        </p>
      )}
    </Row>
  );
};
export default Input;
