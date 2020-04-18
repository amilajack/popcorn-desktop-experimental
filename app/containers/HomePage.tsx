/**
 * Home page component that renders CardsGrid and uses VisibilitySensor
 *
 * @TODO: Use waitForImages plugin to load background images and fade in on load
 */
import { connect } from "react-redux";
import {
  clearAllItems,
  paginate,
  setActiveMode,
  setLoading,
} from "../actions/homePageActions";
import Home from "../components/home/Home";
import { ItemKind } from "../api/metadata/MetadataProviderInterface";

type State = {
  activeMode: ItemKind;
  activeModeOptions: Record<string, string>;
  modes: ItemKind[];
  items: string[];
  isLoading: boolean;
  infinitePagination: boolean;
};

function mapStateToProps(state: State) {
  return {
    activeMode: state.homePageReducer.activeMode,
    activeModeOptions: state.homePageReducer.activeModeOptions,
    modes: state.homePageReducer.modes,
    items: state.homePageReducer.items,
    isLoading: state.homePageReducer.isLoading,
    infinitePagination: false,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearAllItems: () => dispatch(clearAllItems()),
    paginate: (activeMode, activeModeOptions) =>
      dispatch(paginate(activeMode, activeModeOptions)),
    setActiveMode: (mode, activeModeOptions) =>
      dispatch(setActiveMode(mode, activeModeOptions)),
    setLoading: (isLoading: boolean) => dispatch(setLoading(isLoading)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
