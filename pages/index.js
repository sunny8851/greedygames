import styles from "../styles/Home.module.css";
import { lazy } from "react";
const Form = lazy(() => import("../components/Form"));
const Brand = lazy(() => import("../components/Brand"));
const Top = lazy(() => import("../components/Top"));
const TopBrand = lazy(() => import("../components/TopBrand"));
export default function Home() {
  return (
    <div className="xl:mx-24">
      <Top />
      <Form />
      <TopBrand />
      <Brand />
    </div>
  );
}
