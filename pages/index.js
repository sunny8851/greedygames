import styles from "../styles/Home.module.css";
import Top from "../components/Top";
import Brand from "../components/Brand";
import TopBrand from "../components/TopBrand";
import Form from "../components/Form";
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
