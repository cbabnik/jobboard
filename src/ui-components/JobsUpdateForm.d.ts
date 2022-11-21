/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Jobs } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JobsUpdateFormInputValues = {
    title?: string;
    description?: string;
    notes?: string;
    minutesTaken?: number;
    column?: number;
};
export declare type JobsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    minutesTaken?: ValidationFunction<number>;
    column?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobsUpdateFormOverridesProps = {
    JobsUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    notes?: FormProps<TextFieldProps>;
    minutesTaken?: FormProps<TextFieldProps>;
    column?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobsUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobs?: Jobs;
    onSubmit?: (fields: JobsUpdateFormInputValues) => JobsUpdateFormInputValues;
    onSuccess?: (fields: JobsUpdateFormInputValues) => void;
    onError?: (fields: JobsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: JobsUpdateFormInputValues) => JobsUpdateFormInputValues;
    onValidate?: JobsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobsUpdateForm(props: JobsUpdateFormProps): React.ReactElement;
