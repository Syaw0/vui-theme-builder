const generateDarkTheme = (colorRef: any) => {
  return {
    primary: colorRef.primary.primary80,
    onPrimary: colorRef.primary.primary20,
    primaryContainer: colorRef.primary.primary30,
    onPrimaryContainer: colorRef.primary.primary90,

    secondary: colorRef.secondary.secondary80,
    onSecondary: colorRef.secondary.secondary20,
    secondaryContainer: colorRef.secondary.secondary30,
    onSecondaryContainer: colorRef.secondary.secondary90,

    tertiary: colorRef.tertiary.tertiary80,
    onTertiary: colorRef.tertiary.tertiary20,
    tertiaryContainer: colorRef.tertiary.tertiary30,
    onTertiaryContainer: colorRef.tertiary.tertiary90,

    background: colorRef.neutral.neutral10,
    onBackground: colorRef.neutral.neutral90,
    surface: colorRef.neutral.neutral10,
    onSurface: colorRef.neutral.neutral80,
    surfaceVariant: colorRef.neutralVariant.neutralVariant30,
    onSurfaceVariant: colorRef.neutralVariant.neutralVariant80,
    outline: colorRef.neutralVariant.neutralVariant60,
  };
};

export default generateDarkTheme;
