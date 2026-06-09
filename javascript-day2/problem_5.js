function buildServerUrl(host, portValue, useHttps) {
  if (!host) return "host가 필요합니다.";
  let port = Number(portValue);
  if (!port) return "port는 숫자여야 합니다.";
  else if (port % 1 !== 0) {
    return "port는 정수여야 합니다.";
  } else if (port < 1 || port > 65535) return "port 범위가 올바르지 않습니다.";
  let http = useHttps ? "https" : "http";
  return `${http}://${host}:${port}`;
}

console.log(buildServerUrl("localhost", "3000", false));
console.log(buildServerUrl("", "3000", false));
console.log(buildServerUrl("api.local", "abc", true));
console.log(buildServerUrl("api.local", "3000.5", true));
