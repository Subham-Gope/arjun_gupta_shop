import axios from "axios";

const sendMail = async (formData) => {
  const url = import.meta.env.VITE_BACKEND_URL;

  try {
    const response = await axios.post(`${url}/send-email`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
