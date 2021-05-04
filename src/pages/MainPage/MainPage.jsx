import React from "react";
import { MainTemplate } from "components/templates";
import useRequest from "hooks/useRequest";

const MainPage = () => {
  const { data, loading, error } = useRequest("/data/data.json");

  return (
    <div>
      {loading ? (
        error ? (
          <div>에러가 발생했습니다.</div>
        ) : (
          <div>로딩 중입니다...</div>
        )
      ) : (
        data && <MainTemplate data={data} />
      )}
    </div>
  );
};

export default MainPage;
