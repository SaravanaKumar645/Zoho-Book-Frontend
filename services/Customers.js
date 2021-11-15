export const addCustomer = async(customer) => {
  return await fetch("http://localhost:4000/api/customer", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};



export const deleteCus = async (_id) => {
 
  try {
    const response = await fetch(`http://localhost:4000/api/customerdelete/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};


export const getId = (user) => {
  // let email = user.email;
  return fetch(`http://localhost:4000/api/customer/${user}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};

export const postMail = async(content,email) =>{
  return await fetch(`http://localhost:4000/sendmail/${email}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getCus = (_id) => {
  // let email = user.email;
  return fetch(`http://localhost:4000/api/customers/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};


export const getItem = (_id) => {
  return fetch(`http://localhost:4000/itemall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};


export const addItem = async(items) => {
  return await fetch("http://localhost:4000/items", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};





export const getItemId = (_id) => {
  return fetch(`http://localhost:4000/items/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};

export const deleteItem = async (_id) => {
 
  try {
    const response = await fetch(`http://localhost:4000/items/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};


export const getEstiID = (_id) => {
  return fetch(`http://localhost:4000/api/allestimates/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};







export const getSingleEsti = (_id) => {
  return fetch(`http://localhost:4000/api/estimates/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};



// /salesall/:userid


export const getSalesUser = (_id) => {
  return fetch(`http://localhost:4000/salesall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getSingleSales = (_id) => {
  return fetch(`http://localhost:4000/sales/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};

// /sales/:id

// /invoicesall/:useid

export const getInvoiceUser = (_id) => {
  return fetch(`http://localhost:4000/invoicesall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};


// /invoices/




export const getUserInvoice = (_id) => {
  return fetch(`http://localhost:4000/invoices/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};




export const getUserventor = (_id) => {
  return fetch(`http://localhost:4000/vendorsall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};


export const addVendor = async(ventor) => {
  return await fetch("http://localhost:4000/vendors", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ventor)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getcusBusale = (name) => {
  return fetch(`http://localhost:4000/api/customersale/${name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};



export const postSaleEmail = async(content,email) => {
  return await fetch(`http://localhost:4000/sendsalemail/${email}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


// /vendors/:id


export const getventor = (_id) => {
  return fetch(`http://localhost:4000/vendorsall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};


// /payments


export const postParRec = async(content) => {
  return await fetch("http://localhost:4000/payments", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


// /paymentall/:userid

export const getPayRec = (_id) => {
  return fetch(`http://localhost:4000/paymentall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};



// /pays


export const postpaymade = async(content) => {
  return await fetch("http://localhost:4000/pays", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


// /payall/:userid

export const getPaymade = (_id) => {
  return fetch(`http://localhost:4000/payall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};


export const getpayresbyid = (_id) => {
  return fetch(`http://localhost:4000/payments/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getPaymadebyuser = (_id) => {
  return fetch(`http://localhost:4000/pays/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getventorByUser = (_id) => {
  return fetch(`http://localhost:4000/vendors/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};



// /purchasesall/:userid


export const getPurchasebyuser = (_id) => {
  return fetch(`http://localhost:4000/purchasesall/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    
    },
    
  })
    .then(response => {
      console.log(response.email)
      return response.json();
    })
    .catch(err => console.log(err));
};