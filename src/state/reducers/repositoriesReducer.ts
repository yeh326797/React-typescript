interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: "search_respositories";
}
interface SearchRepositoriesSuccessAction {
  type: "search_respositories_success";
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: "search_respositories_error";
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
): RepositoriesState => {
  switch (action.type) {
    case "search_respositories":
      return { loading: true, error: null, data: [] };
    case "search_respositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_respositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
