import client from "./client";

// 본 코드는 테스트용입니다.  proxy 값 확인해보기

export const login = ({ username, password }) =>
    client.post("/api/auth/login", { username, password });

export const regsister = ({ username, password }) =>
    client.post("/api/auth/register", { username, password });

export const check = () =>
    client.get("/api/auth/check");

