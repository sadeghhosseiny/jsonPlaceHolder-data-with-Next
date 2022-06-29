import { useSelector } from "react-redux";
import { request } from "../services/apiRequest";
import { wrapper } from "../store";
import { getPosts } from "../store/actions";

export default function Home() {
  const data = useSelector((state) => state);
  return <div>{console.log(data)}</div>;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({}) => {
      await store.dispatch(request());
    }
);
