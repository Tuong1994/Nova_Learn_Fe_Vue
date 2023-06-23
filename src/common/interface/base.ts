export interface ISelectOption {
  label: string;
  value: string | number;
}

export interface IRule {
  required?: boolean;
  phone?: boolean;
  email?: boolean;
  whiteSpace?: boolean;
  min?: number;
  max?: number;
  message?: string;
}

export interface ITableHeader {
  id: string;
  title: string;
}

export interface IDropdownItem {
  id: string;
  title: string;
  link?: string;
  icon?: string;
  active?: boolean;
  onClick?(): void;
}

export interface ITabs {
  id: string;
  title: string;
  titleIcon?: string;
  componentName: string;
}

export interface IAccordion {
  id: string;
  title: string;
  titleIcon?: string;
  content: string;
}

export interface ISlideItem {
  id: string;
  componentName: string;
  dotIcon?: string;
  dotTitle?: string;
}

export interface ISlideGalleryImage {
  id: string;
  src: string;
}

export interface IMenuItem {
  id: string;
  title?: string;
  link?: string;
  subs?: IMenuItem[];
  type?: "main" | "support";
  typeSubs?: "default" | "mega" | "none";
}

export interface ILinkItem {
  id: string;
  title?: string;
}

export interface IBenefitItem {
  id: string;
  title?: string;
  content?: string;
  icon: string;
}

export interface IBreadCrumbItem {
  id: string;
  title: string;
  link: string;
}

export interface IStudentCard {
  id: string;
  name: string;
  imageUrl: string;
  course: string;
  workAt: string;
  position: string;
}

export interface FieldValue {
  [key: string]: string | undefined;
}
