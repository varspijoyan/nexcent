export async function login(email) {
  try {
    const res = await api.post("/api/user/auth/admin/sign_in", { email });
    return res.data;
  } catch (error) {
    console.error("Failed send email");
  }
}

export async function verify(email, otp) {
  try {
    const res = await api.post("/api/user/auth/verify_otp", { email, otp });
    return res.data;
  } catch (error) {
    console.error("Failed verify");
  }
}

export async function getMe() {
  try {
    const res = await api.get("/api/user/me");
    return res.data;
  } catch (error) {
    console.error("Failed to get data");
  }
}

export async function updateMe(first_name, last_name) {
  try {
    const res = await api.put("/api/user/update_me", { first_name, last_name });
  } catch (error) {
    console.error("Failed to update user data");
  }
}
