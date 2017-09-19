export class Field {
  value: string;
  selected: boolean;
  editable: boolean;
}

export class Fields {
  id: Field;
  name: Field;
  location: Field;
  office: Field;
  phoneOffice: Field;
  phoneCell: Field;
}

export class Row {
  status: string;
  fields: Fields;
}
