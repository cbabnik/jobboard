/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Jobs } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function JobsUpdateForm(props) {
  const {
    id,
    jobs,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: undefined,
    description: undefined,
    notes: undefined,
    minutesTaken: undefined,
    column: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [minutesTaken, setMinutesTaken] = React.useState(
    initialValues.minutesTaken
  );
  const [column, setColumn] = React.useState(initialValues.column);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...jobsRecord };
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setNotes(cleanValues.notes);
    setMinutesTaken(cleanValues.minutesTaken);
    setColumn(cleanValues.column);
    setErrors({});
  };
  const [jobsRecord, setJobsRecord] = React.useState(jobs);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Jobs, id) : jobs;
      setJobsRecord(record);
    };
    queryData();
  }, [id, jobs]);
  React.useEffect(resetStateValues, [jobsRecord]);
  const validations = {
    title: [],
    description: [],
    notes: [],
    minutesTaken: [],
    column: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description,
          notes,
          minutesTaken,
          column,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          const original = await DataStore.query(Jobs, id);
          await DataStore.save(
            Jobs.copyOf(original, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "JobsUpdateForm")}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        defaultValue={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              notes,
              minutesTaken,
              column,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              notes,
              minutesTaken,
              column,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        defaultValue={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              notes: value,
              minutesTaken,
              column,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <TextField
        label="Minutes taken"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={minutesTaken}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              minutesTaken: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              description,
              notes,
              minutesTaken: value,
              column,
            };
            const result = onChange(modelFields);
            value = result?.minutesTaken ?? value;
          }
          if (errors.minutesTaken?.hasError) {
            runValidationTasks("minutesTaken", value);
          }
          setMinutesTaken(value);
        }}
        onBlur={() => runValidationTasks("minutesTaken", minutesTaken)}
        errorMessage={errors.minutesTaken?.errorMessage}
        hasError={errors.minutesTaken?.hasError}
        {...getOverrideProps(overrides, "minutesTaken")}
      ></TextField>
      <TextField
        label="Column"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={column}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              column: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              description,
              notes,
              minutesTaken,
              column: value,
            };
            const result = onChange(modelFields);
            value = result?.column ?? value;
          }
          if (errors.column?.hasError) {
            runValidationTasks("column", value);
          }
          setColumn(value);
        }}
        onBlur={() => runValidationTasks("column", column)}
        errorMessage={errors.column?.errorMessage}
        hasError={errors.column?.hasError}
        {...getOverrideProps(overrides, "column")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
