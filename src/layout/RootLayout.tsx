import { ComponentType } from "react";
import { Outlet } from "react-router-dom";

interface RootComponent {
  rootComponent: ComponentType<any>;
}

export default function RootLayout({ rootComponent: Root }: RootComponent) {
  return (
    <>
      <Root />
      <Outlet />
    </>
  );
}
