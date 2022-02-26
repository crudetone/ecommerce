import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZjZkNmE5ZDQ2MGVlZmVkOGNhZTc5YSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiVTJGc2RHVmtYMS9lTjhsT2JtVDRxNEtnd2tCb3ExREI4SDVRVm1xeUtFaz0iLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTMwVDE4OjE5OjIxLjk1MVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAxLTMwVDE4OjE5OjIxLjk1MVoiLCJfX3YiOjB9LCJpYXQiOjE2NDU4MDY0NTUsImV4cCI6MTY0NjA2NTY1NX0.w-TZzNZbz8vQOq_yCqwKVjZwzIwQNhHZ0uBsg_mc-mo";

export const publicRequest = axios.create({ baseURL: BASE_URL });

const axiosParams = {
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
}

export const userRequest = axios.create(axiosParams);
