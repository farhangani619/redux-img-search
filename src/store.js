import API from "./API";
const initialState = {
  title: "React Image Search",
  searchTerm: "",
  loading: false,
  images: []
};

export const actions = {
  searchTermChanged(searchTerm) {
    return {
      type: "SEARCH_TERM_CHANGED",
      searchTerm
    };
  },
  getImages(searchTerm) {
    console.log(searchTerm);
    return {
      type: "IMAGES",
      payload: API.search(searchTerm)
    };
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_TERM_CHANGED": {
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    }
    case "IMAGES_PENDING": {
      return {
        ...state,
        loading: true,
        images: []
      };
    }
    case "IMAGES_FULFILLED": {
      return {
        ...state,
        loading: false,
        images: action.payload
      };
    }
    default:
      return state;
  }
}
