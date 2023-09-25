const getParameters = {
  serviceKey: process.env.REACT_APP_MIMUN_API_KEY,
  returnType: "json",
  pageNo: "1",
  numOfRows: "100",
};

export async function fetchData(sido) {
  const apiUrl = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters.serviceKey}&sidoName=${sido}&returnType=${getParameters.returnType}&pageNo=${getParameters.pageNo}&numOrRows=${getParameters.numOfRows}`;
  let data;
  try {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((res) => {
        data = res["response"]["body"]["items"];
      });
    console.log(`${sido} API 요청 성공`);
    console.log(data);
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
  return data;
}
