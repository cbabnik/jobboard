/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FiltersCreateFormInputValues = {
    name?: string;
};
export declare type FiltersCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FiltersCreateFormOverridesProps = {
    FiltersCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FiltersCreateFormProps = React.PropsWithChildren<{
    overrides?: FiltersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FiltersCreateFormInputValues) => FiltersCreateFormInputValues;
    onSuccess?: (fields: FiltersCreateFormInputValues) => void;
    onError?: (fields: FiltersCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FiltersCreateFormInputValues) => FiltersCreateFormInputValues;
    onValidate?: FiltersCreateFormValidationValues;
} & React.CSSProperties>;
export default function FiltersCreateForm(props: FiltersCreateFormProps): React.ReactElement;
