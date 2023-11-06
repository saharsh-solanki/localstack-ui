/*
Resuable component for toast 
1. Handles 404 not error 
2. handling rest errors 
*/

import { toast } from 'react-toastify';

// Helper function to display toasts
const showToast = (custom) => {
  const messages = {
    404: 'System has encountered some error. Can not find the page you are looking for',
    200: 'Success.',
    201: 'Success.',
    default: 'System Error.',
  };

  const { response , customMessages = {} } = custom;
  const statusCode = response?.statusCode;
  console.log(custom);
  let message;
  try {
    if (customMessages.hasOwnProperty(statusCode)) {
      message = customMessages[statusCode];
    } else {
        console.log("response:",response);
        if (response?.data?.message) {
            message = response?.data?.message;
        }
        else if(response?.data?.error){
            message = response?.data?.error;
        }
        else {
            message = messages.hasOwnProperty(statusCode)
            ? messages[statusCode]
            : messages?.default;
        }
    }
  } catch (e) {
    message = messages?.default;
  }

  switch (statusCode) {
    case 404:
      toast.info(message);
      break;
    case 200:
      toast.success(message);
      break;
    case 201:
        toast.success(message);
        break;
    default:
      toast.error(message);
      break;
  }
};

export default showToast;
