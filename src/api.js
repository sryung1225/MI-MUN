const getParameters = {
  serviceKey: process.env.REACT_APP_MIMUN_API_KEY,
  returnType: "json",
  dataTerm: "month",
  pageNo: "1",
  numOfRows: "100",
};

export async function fetchData(station) {
  const apiUrl = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=${getParameters.serviceKey}&stationName=${station}&returnType=${getParameters.returnType}&dataTerm=${getParameters.dataTerm}&pageNo=${getParameters.pageNo}&numOrRows=${getParameters.numOfRows}`;
  let data;
  try {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((res) => {
        data = res["response"]["body"]["items"];
      });
    console.log(`${station} API 요청 성공`);
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
  return data;
}
