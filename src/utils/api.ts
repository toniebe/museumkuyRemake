import {API_KEY, BASE_URL} from '@env';

async function getDataFromApi(url: string, params?: string) {
  // Construct the URL with parameters

  try {
    // https://api.binderbyte.com/wilayah/provinsi?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d
    console.log(
      'url --> ',
      `${BASE_URL}${url}?api_key=${API_KEY}${params ? `&${params}` : ''}`,
    );
    const response = await fetch(
      `${BASE_URL}${url}?api_key=${API_KEY}${params ? `&${params}` : ''}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(`Error fetching data: ${error.message}`);
    return null;
  }
}

export default getDataFromApi;
