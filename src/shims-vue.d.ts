declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>;
  export default component;
}

declare module "@fontsource/jetbrains-mono/*";
declare module "@fontsource-variable/*";
