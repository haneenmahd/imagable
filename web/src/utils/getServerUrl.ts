export default function getServerUrl(): string {
  if (process.env.NODE_ENV === "production") {
    return "https://imagable-server.herokuapp.com";
  } else {
    return "http://localhost:3000";
  }
}
