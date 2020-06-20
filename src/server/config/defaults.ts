const defaults: {
  [property: string]: ({ default: unknown; transform?(value: unknown): unknown });
} = {
  "SQL_DSN": {
    default: ""
  }
};

export default defaults;
