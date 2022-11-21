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
export declare type JobsCreateFormInputValues = {
    title?: string;
    description?: string;
    notes?: string;
    minutesTaken?: number;
    column?: number;
};
export declare type JobsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    minutesTaken?: ValidationFunction<number>;
    column?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobsCreateFormOverridesProps = {
    JobsCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    notes?: FormProps<TextFieldProps>;
    minutesTaken?: FormProps<TextFieldProps>;
    column?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobsCreateFormProps = React.PropsWithChildren<{
    overrides?: JobsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobsCreateFormInputValues) => JobsCreateFormInputValues;
    onSuccess?: (fields: JobsCreateFormInputValues) => void;
    onError?: (fields: JobsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: JobsCreateFormInputValues) => JobsCreateFormInputValues;
    onValidate?: JobsCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobsCreateForm(props: JobsCreateFormProps): React.ReactElement;
