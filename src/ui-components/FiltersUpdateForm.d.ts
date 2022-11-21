/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Filters } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FiltersUpdateFormInputValues = {
    name?: string;
};
export declare type FiltersUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FiltersUpdateFormOverridesProps = {
    FiltersUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FiltersUpdateFormProps = React.PropsWithChildren<{
    overrides?: FiltersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    filters?: Filters;
    onSubmit?: (fields: FiltersUpdateFormInputValues) => FiltersUpdateFormInputValues;
    onSuccess?: (fields: FiltersUpdateFormInputValues) => void;
    onError?: (fields: FiltersUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FiltersUpdateFormInputValues) => FiltersUpdateFormInputValues;
    onValidate?: FiltersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FiltersUpdateForm(props: FiltersUpdateFormProps): React.ReactElement;
