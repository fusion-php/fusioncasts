import Pipeline from '@fusion/vue/pipeline';
import ActionFactory from '@fusion/vue/actionFactory';


export const state = ["name"];
export const actions = [];
export const fusionActions = ["fusionSync"];

let cachedState;

export function useFusion(keys = [], props = {}, useCachedState = false) {
  const state = (useCachedState && cachedState) ? cachedState : new Pipeline(props).createState();

  if (!useCachedState) {
    cachedState = state;
  }

  const all = {
    ...state,
    ...new ActionFactory([...actions, ...fusionActions], state),
  }

  const shouldExport = {};
  for (const key of keys) {
    if (key in all) {
      shouldExport[key] = all[key];
    }
  }

  return shouldExport;
}