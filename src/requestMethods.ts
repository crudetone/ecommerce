import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZjZkNmE5ZDQ2MGVlZmVkOGNhZTc5YSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiVTJGc2RHVmtYMS9lTjhsT2JtVDRxNEtnd2tCb3ExREI4SDVRVm1xeUtFaz0iLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTAxLTMwVDE4OjE5OjIxLjk1MVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAxLTMwVDE4OjE5OjIxLjk1MVoiLCJfX3YiOjB9LCJpYXQiOjE2NDM3MzY0MzYsImV4cCI6MTY0Mzk5NTYzNn0.Fcjmo1jvwXOCiwFRqqg14Q4SmHh0Z1t4kvWse6CzwMM";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`
  }
})
