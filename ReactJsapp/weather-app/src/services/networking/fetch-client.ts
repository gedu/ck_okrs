import { serviceConfig } from "../service-config";

const baseUrl = `${serviceConfig.baseUrl}/${serviceConfig.version}`;

export const securedGet = async <ResponseData>(path: string) => {
  const response = await fetch(
    `${baseUrl}/${path}&appid=${serviceConfig.apiKey}`
  );
  return (await response.json()) as ResponseData;
};
