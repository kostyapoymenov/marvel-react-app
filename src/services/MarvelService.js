class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=a6b0c269b78f928f28cb71a9307d47fb';
  limitCharacters = 9;
  descriptionCharError = 'There is no description for this character'

  getResource = async (url) => {
    let res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Ошибка ${res.status}`)
    }

    return await res.json();
  }

  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiBase}characters?limit=${this.limitCharacters}}&offset=120&${this._apiKey}`);
    return res.data.results.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformCharacter(res.data.results[0]);
  }

  cropDescriptionChar = (text) => {
    if(text.length - 1 > 200)
      return text.slice(0, 200).replace(/\.$/, "") + '...';
    else 
      return text;
    
  }

  _transformCharacter = (char) => {
    return {
      name: char.name,
      description: char.description ? this.cropDescriptionChar(char.description) : this.descriptionCharError, 
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url
    }
  }

}

export default MarvelService;