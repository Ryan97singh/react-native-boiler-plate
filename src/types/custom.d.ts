declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '@husam287/react-native-draw-overlay' {
  function askForDispalayOverOtherAppsPermission(): Promise<boolean>;
}
