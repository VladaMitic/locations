const FIREBASE_DOMAIN =
  'https://destinations-c5293-default-rtdb.europe-west1.firebasedatabase.app';

export const fetchAllData = async (resoures) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/${resoures}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Подаци се не могу преузети.');
  }

  if (!data || data.length < 0) {
    throw new Error(
      'Нема података. Унесите податке у базу или покушајте поново'
    );
  }

  //TO DO: Change this for real API. This transformation is to adapt firebase data structure into regular array data structure
 let transformedData = [];

  if(Array.isArray(data)) {
    transformedData = data.filter((item) => item && item);
  } else {
    for (const key in data) {
      const dataObj = {
        ...data[key],
      };
  
      transformedData.push(dataObj);
    }
  }


  return transformedData;
};

export const fetchOneItem = async (resoures, id) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/${resoures}/${id}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Подаци се не могу преузети.');
  }

  if (!data) {
    throw new Error(
      'Нема података. Унесите податке у базу или покушајте поново'
    );
  }
  //TO DO: Change this for real API. This transformation is to adapt firebase data structure into regular array data structure
  const loadedData = {
    id: id,
    ...data,
  };

  return loadedData;
};

export const deleteOneItem = async (resoures, id) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/${resoures}/${id}.json`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Подаци се не могу обрисати.');
  }
};
