import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Pagination, message } from "antd";
import Products from "../../components/product/products";

const Home = () => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, loading } = useFetch(
    "/products",
    {
      limit,
      skip: (skip - 1) * limit,
    },
    [skip, limit]
  );
  const handlChange = (current, pageSize) => {
    message.success("Malumot yangilandi ");
    setLimit(pageSize);
    setSkip(current);
  };
  return (
    <div>
      {<Products data={data?.products} loading={loading} />}
      <Pagination
        current={skip}
        onChange={handlChange}
        className="mt-5"
        align="center"
        defaultCurrent={1}
        defaultPageSize={limit}
        total={data?.total}
      />
    </div>
  );
};

export default Home;
