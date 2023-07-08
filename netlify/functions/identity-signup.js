export async function handler(event) {
  const user = JSON.parse(event.body).user;
  console.log(user);
  return {
    body: JSON.stringify({
      ...user,
      role: "Premium",
      app_metadata: {
        ...user.app_metadata,
        roles: ["premium"],
      },
    }),
    statusCode: 200,
  };
}
