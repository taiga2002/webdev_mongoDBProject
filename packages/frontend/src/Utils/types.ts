export interface FormElements extends HTMLFormControlsCollection {
  taskNameInput: HTMLInputElement;
}
export interface TaskNameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
