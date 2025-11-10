import { $fetch } from "ofetch";

export const useCsrfFetch = async (url, options = {}) => {
  try {
    // Ambil CSRF cookie dulu
    await $fetch("http://localhost:8000/sanctum/csrf-cookie", {
      credentials: "include",
    });

    // Ambil token dari cookie
    const xsrfToken = decodeURIComponent(
      document.cookie
        .split(";")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1] || ""
    );

    // Jalankan request dengan credentials dan X-XSRF-TOKEN
    return await $fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": xsrfToken, // ✅ wajib
        ...(options.headers || {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
  } catch (err) {
    console.error("useCsrfFetch error:", err);
    throw err;
  }
};
