export const addCustomer = async (customer) => {
  return await fetch("https://zoho-books-server.herokuapp.com/api/customer", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteCus = async (_id) => {
  try {
    const response = await fetch(
      `https://zoho-books-server.herokuapp.com/api/customerdelete/${_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getId = (user) => {
  // let email = user.email;
  return fetch(`https://zoho-books-server.herokuapp.com/api/customer/${user}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postMail = async (content, email) => {
  return await fetch(
    `https://zoho-books-server.herokuapp.com/sendmail/${email}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCus = (_id) => {
  // let email = user.email;
  return fetch(`https://zoho-books-server.herokuapp.com/api/customers/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getItem = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/itemall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addItem = async (items) => {
  return await fetch("https://zoho-books-server.herokuapp.com/items", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getItemId = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/items/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteItem = async (_id) => {
  try {
    const response = await fetch(
      `https://zoho-books-server.herokuapp.com/items/${_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getEstiID = (_id) => {
  return fetch(
    `https://zoho-books-server.herokuapp.com/api/allestimates/${_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSingleEsti = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/api/estimates/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /salesall/:userid

export const getSalesUser = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/salesall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSingleSales = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/sales/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /sales/:id

// /invoicesall/:useid

export const getInvoiceUser = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/invoicesall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /invoices/

export const getUserInvoice = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/invoices/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUserventor = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/vendorsall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addVendor = async (ventor) => {
  return await fetch("https://zoho-books-server.herokuapp.com/vendors", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ventor),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getcusBusale = (name) => {
  return fetch(
    `https://zoho-books-server.herokuapp.com/api/customersale/${name}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postSaleEmail = async (content, email) => {
  return await fetch(
    `https://zoho-books-server.herokuapp.com/sendsalemail/${email}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /vendors/:id

export const getventor = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/vendorsall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /payments

export const postParRec = async (content) => {
  return await fetch("https://zoho-books-server.herokuapp.com/payments", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /paymentall/:userid

export const getPayRec = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/paymentall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /pays

export const postpaymade = async (content) => {
  return await fetch("https://zoho-books-server.herokuapp.com/pays", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /payall/:userid

export const getPaymade = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/payall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getpayresbyid = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/payments/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getPaymadebyuser = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/pays/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getventorByUser = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/vendors/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// /purchasesall/:userid

export const getPurchasebyuser = (_id) => {
  return fetch(`https://zoho-books-server.herokuapp.com/purchasesall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};
