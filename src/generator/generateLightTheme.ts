const generateLightTheme = (colorRef: any) => {
  return {
    primary: colorRef.primary.primary40,
    onPrimary: colorRef.primary.primary100,
    primaryContainer: colorRef.primary.primary90,
    onPrimaryContainer: colorRef.primary.primary10,

    secondary: colorRef.secondary.secondary40,
    onSecondary: colorRef.secondary.secondary100,
    secondaryContainer: colorRef.secondary.secondary90,
    onSecondaryContainer: colorRef.secondary.secondary10,

    tertiary: colorRef.tertiary.tertiary40,
    onTertiary: colorRef.tertiary.tertiary100,
    tertiaryContainer: colorRef.tertiary.tertiary90,
    onTertiaryContainer: colorRef.tertiary.tertiary10,

    background: colorRef.neutral.neutral99,
    onBackground: colorRef.neutral.neutral10,
    surface: colorRef.neutral.neutral99,
    onSurface: colorRef.neutral.neutral10,
    surfaceVariant: colorRef.neutralVariant.neutralVariant90,
    onSurfaceVariant: colorRef.neutralVariant.neutralVariant30,
    outline: colorRef.neutralVariant.neutralVariant30,
  };
};

export default generateLightTheme;
