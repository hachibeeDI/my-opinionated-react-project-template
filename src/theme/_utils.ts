export function createPropertyWithAlias<Props, Alias>(val: Props, createAlias: (origin: Props) => Alias): Readonly<Props & Alias> {
  const alias = createAlias(val);
  return {...val, ...alias};
}
