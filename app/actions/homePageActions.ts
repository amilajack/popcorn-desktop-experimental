import { Item } from "../api/metadata/MetadataProviderInterface";
import { View } from "../reducers/homePageReducer";

export function setView(view: View) {
  return {
    type: "SET_ACTIVE_MODE",
    view,
  };
}

export function paginate(items: Array<Item>) {
  return {
    type: "PAGINATE",
    items,
  };
}

export function clearAllItems() {
  return {
    type: "CLEAR_ALL_ITEMS",
  };
}

export function setLoading(isLoading: boolean) {
  return {
    type: "SET_LOADING",
    isLoading,
  };
}

export function setLastPage() {
  return {
    type: "SET_LAST_PAGE",
  };
}
