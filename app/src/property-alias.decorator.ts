function propertyAlias(alias: string) {
  function propertyAliasDecorator(target: any, property: string): void {
    target._aliasMap = target._aliasMap || [];
    target._aliasMap.push({
      propertyName: property,
      propertyAlias: alias
    });
  }
  return propertyAliasDecorator;
}
