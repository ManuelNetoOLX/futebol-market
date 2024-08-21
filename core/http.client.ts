export default function httpClient() {
  async function post(
    url: string,
    data: any,
    headersCustom?: Record<string, string>
  ): Promise<any> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...headersCustom,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      console.error("An error occurred while making the POST request:", error);
      throw error;
    }
  }

  async function get(
    url: string,
    headersCustom?: Record<string, string>
  ): Promise<any> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...headersCustom,
    };

    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      });

      return await response.json();
    } catch (error) {
      console.error("An error occurred while making the GET request:", error);
      throw error;
    }
  }

  async function deleteRequest(
    url: string,
    data: any,
    headersCustom?: Record<string, string>
  ): Promise<any> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...headersCustom,
    };

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers,
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      console.error(
        "An error occurred while making the DELETE request:",
        error
      );
      throw error;
    }
  }

  return {
    post,
    get,
    delete: deleteRequest,
  };
}
